/**
 * page controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
    async findByKey(ctx) {
        const { key } = ctx.params;

        if (!key) {
            return ctx.badRequest('Key parameter is required');
        }

        const locale = ctx.request.query.locale || (await strapi.plugins.i18n.services.locales.getDefaultLocale());
        const page = await strapi.documents('api::page.page').findFirst({
            filters: { key: { $eq: key } },
            locale: locale
        });
        if (!page) {
            return ctx.notFound(`Page with key '${key}' not found`);
        }

        const sanitizedEntity = await this.sanitizeOutput(page, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));