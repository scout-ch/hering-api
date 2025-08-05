/**
 * `set-links` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    return async (ctx, next) => {
        await next();

        const content = ctx.response.body.data.content;
        if (ctx.response.status === 200 && !!content) {

            const linkService = strapi.service('api::link.link');
            const locale = ctx.request.query.locale || (await strapi.plugins.i18n.services.locales.getDefaultLocale());

            ctx.response.body.data.content = await linkService.replaceKeysWithUrls(content, locale);
        }
    };
};
