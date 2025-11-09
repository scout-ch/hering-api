export default {
    routes: [
        {
            method: 'GET',
            path: '/pages/key/:key',
            handler: 'page.findByKey',
            config: {
                middlewares: [
                    'api::page.set-links'
                ],
                auth: false
            }
        }
    ]
}