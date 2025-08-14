export default ({ env }) => {
    return {
        connection: {
            client: 'postgres',
            connection: {
                connectionString: env('DATABASE_URL'),
                host: env('DATABASE_HOST', 'localhost'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME', 'strapi'),
                user: env('DATABASE_USERNAME', 'strapi'),
                password: env('DATABASE_PASSWORD', 'strapi'),
                schema: env('DATABASE_SCHEMA', 'public'),
                timezone: 'Europe/Zurich'
            },
            pool: { min: env.int('DATABASE_POOL_MIN', 0), max: env.int('DATABASE_POOL_MAX', 10) },
            acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
    };
};
