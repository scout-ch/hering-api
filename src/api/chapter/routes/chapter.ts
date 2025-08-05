/**
 * chapter router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::chapter.chapter', {
    config: {
        findOne: {
            middlewares: [
                'api::chapter.set-links'
            ]
        },
    }
});
