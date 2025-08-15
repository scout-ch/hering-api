export default ({ env }) => ({
    'users-permissions': {
        config: {
            jwtSecret: env('STRAPI_JWT_SECRET'),
            jwt: {
                expiresIn: '7d',
            },
        }
    },
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                credentials: {
                    accessKeyId: env('OPENSTACK_SWIFT_ACCESS_KEY_ID'),
                    secretAccessKey: env('OPENSTACK_SWIFT_ACCESS_SECRET'),
                },
                baseUrl: `${env('OPENSTACK_SWIFT_ENDPOINT')}/object/v1/${env('OPENSTACK_SWIFT_PUBLIC_AUTH_KEY')}/${env('OPENSTACK_SWIFT_BUCKET')}`,
                region: env('OPENSTACK_SWIFT_REGION'),
                endpoint: env('OPENSTACK_SWIFT_ENDPOINT'),
                forcePathStyle: true,
                params: {
                    Bucket: env('OPENSTACK_SWIFT_BUCKET'),
                },
            },
        },
    }
});