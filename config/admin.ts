export default ({ env }) => ({
    auth: {
        secret: env('STRAPI_ADMIN_JWT_SECRET'),
    },
    apiToken: {
        salt: env('STRAPI_API_TOKEN_SALT'),
        secrets: {
            encryptionKey: env('STRAPI_API_SECRET_ENCRYPTION_KEY')
        }
    },
    transfer: {
        token: {
            salt: env('STRAPI_TRANSFER_TOKEN_SALT'),
        },
    },
    flags: {
        nps: false,
        promoteEE: false,
    },
});