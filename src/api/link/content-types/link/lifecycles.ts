export default {
    async afterCreate(event) {
        // If publishedAt is set the document is published.
        // Therefore, update the cache.
        if (event.result.publishedAt) {
            const linkService = strapi.service('api::link.link');
            await linkService.updateCache(event.result);
        }
    },
    afterDelete(event) {
        // Remove the document from the cache in any delete case.
        const linkService = strapi.service('api::link.link');
        linkService.removeCache(event.result);
    },
}