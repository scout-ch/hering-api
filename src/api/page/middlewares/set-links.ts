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

        const pages = [];
        const data = ctx.response.body.data;

        // Support both single entry and multiple entries
        if (!Array.isArray(data) && !!data) {
            pages.push(data);
        } else {
            pages.push(...(data ?? []));
        }

        if (pages.length === 0) {
            return;
        }

        for (const page of pages) {
            const linkService = strapi.service('api::link.link');
            const locale = ctx.request.query.locale || (await strapi.plugins.i18n.services.locales.getDefaultLocale());

            page.content = await linkService.replaceKeysWithUrls(page.content, locale);
        }
    };
};
