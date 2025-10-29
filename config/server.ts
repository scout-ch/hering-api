export default ({ env }) => ({
    host: env('STRAPI_HOST', '0.0.0.0'),
    port: env.int('STRAPI_PORT', 1337),
    url: env('STRAPI_URL'),
    app: {
        keys: env.array('STRAPI_APP_KEYS'),
    },
    proxy: {
        koa: true
    }
});
