import ignoredRoutes from './routes.ignore'

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {
        enabled: true
    },

    css: ['~/assets/css/main.css'],

    ignore: process.env.APP_ENV === 'production' ? ignoredRoutes : [],

    components: [
        {
            path: '~/components',
            pathPrefix: false
        }
    ],

    modules: [
        '@nuxtjs/tailwindcss',
        '@primevue/nuxt-module'
    ],

    primevue: {
        options: {
            theme: 'none'
        }
    }
})
