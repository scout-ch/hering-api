/**
 * link service
 */

import { factories } from '@strapi/strapi';
import { FindMany } from "@strapi/types/dist/modules/documents/params/document-engine";

const markdownLinkLookup: RegExp = /\[(?<desc>.*?)]\(\$(?<key>[\w-]+)\$\)/g;

function buildKey(key: string, locale: string): string {
    return `${key}--${locale}`;
}

const linkDocumentParams: FindMany<'api::link.link'> = {
    fields: ['id', 'title', 'key', 'isPublic', 'publicUrl', 'locale'],
    populate: {
        chapter: {
            fields: ['id'],
            populate: {
                section: {
                    fields: ['id']
                }
            }
        }
    },
    status: 'published'
}

export default factories.createCoreService('api::link.link', ({ strapi }) => ({
    cache: new Map<string, any>(),

    async initCache() {
        try {

            const availableLocales = await strapi.plugins.i18n.services.locales.find();

            const entries: any[] = [];
            for (const locale of availableLocales) {
                const localizedEntries = await strapi.documents('api::link.link').findMany({
                    locale: locale.code,
                    ...linkDocumentParams
                });

                entries.push(...localizedEntries);
            }

            this.cache.clear();
            entries.forEach((entry) => {
                if (entry.key) {
                    this.cache.set(buildKey(entry.key, entry.locale), entry);
                }
            });

            strapi.log.info(`[link-cache] Loaded ${this.cache.size} entries into the cache.`);
        } catch (error) {
            strapi.log.error('[link-cache] Error loading cache:', error);
        }
    },

    async updateCache(entry: any) {
        const link = await strapi.documents('api::link.link').findOne({
            documentId: entry.documentId,
            locale: entry.locale,
            ...linkDocumentParams
        });

        this.cache.set(buildKey(link.key, link.locale), link);
    },

    removeCache(entry: any) {
        this.cache.delete(buildKey(entry.key, entry.locale));
    },

    async replaceKeysWithUrls(content: string, locale: string): Promise<string> {
        if (!markdownLinkLookup.test(content)) {
            return content;
        }

        // Reset lastIndex to ensure proper matching when using replace.
        markdownLinkLookup.lastIndex = 0;

        const keySet = new Set<string>();
        for (const match of content.matchAll(markdownLinkLookup)) {
            const { key } = match.groups;
            keySet.add(key);
        }

        const linkKeyToUrl = await this.findByKeysCached(Array.from(keySet), locale);
        return content.replace(markdownLinkLookup, (_, ...args) => {
            const { desc, key } = args[args.length - 1];
            const link = linkKeyToUrl.get(key);

            if (link) {
                if (link.isPublic) {
                    return `[${desc}](${link.publicUrl})`;
                }

                if (link.chapter.documentId) {
                    return `[${desc}](/${link.chapter.section.documentId}#${link.chapter.documentId})`;
                }
            }

            return `[${desc}](#invalid-link)`;
        });
    },

    async findByKeysCached(keys: string[], locale: string): Promise<Map<string, any>> {
        const keyToLink = new Map<string, any>();
        const keysToFetch = new Set<string>();

        for (const key of keys) {
            const cachedLink = this.cache.get(buildKey(key, locale));

            // Entries that are not stored in the cache are undefined.
            // Entries that do not exist in the database but in the cache are null.
            if (cachedLink !== undefined) {
                keyToLink.set(key, cachedLink);
            } else {
                keysToFetch.add(key);
            }
        }

        if (keysToFetch.size > 0) {
            const linkResponse = await strapi.documents('api::link.link').findMany({
                locale: locale,
                filters: {
                    key: {
                        $in: Array.from(keysToFetch),
                    }
                },
                ...linkDocumentParams
            });

            for (const keyToFetch of keysToFetch) {
                const link = linkResponse.find(r => r.key === keyToFetch);
                if (link) {
                    this.cache.set(buildKey(link.key, locale), link);
                } else {
                    // Store null for keys that do not exist in the database
                    // so we don't have to query them again.
                    this.cache.set(buildKey(keyToFetch, locale), null);
                }
            }
        }

        return keyToLink;
    }
}));
