/**
 * `set-links` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    return async (ctx, next) => {
        await next();

        if (ctx.response.status !== 200) {
            return;
        }

        const sections = ctx.response.body.data ?? [];
        if (sections.length === 0) {
            return;
        }

        for(const section of sections) {
            const chapters = (section.chapters ?? []);
            if (chapters.length === 0) {
                return;
            }

            const linkService = strapi.service('api::link.link');
            const locale = ctx.request.query.locale || (await strapi.plugins.i18n.services.locales.getDefaultLocale());

            for (const chapter of chapters) {
                chapter.content = await linkService.replaceKeysWithUrls(chapter.content, locale);
            }
        }
    };
};
