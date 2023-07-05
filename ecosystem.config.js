module.exports = {
    apps: [
        {
            name: 'nuxt-adam',
            script: 'npm run start',
            exec_mode: 'fork',
            instances: '1',

            env: {
                NODE_ENV: "development",
                NITRO_PORT: 3000,
                NITRO_HOST: '127.0.0.1'
            },
            env_production: {
                NODE_ENV: "production",
                NITRO_PORT: 3000,
                NITRO_HOST: '127.0.0.1'
            }

        }
    ]
}

