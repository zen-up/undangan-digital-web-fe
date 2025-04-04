// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    modules: ['@nuxt/eslint'],

    devServer: {
        port: Number.parseInt(import.meta.env.NUXT_DEVELOPMENT_PORT ?? '8000', 10),
    },

    vite: {
        define: {
            'import.meta.env.NUXT_MAIL_KEY': JSON.stringify(import.meta.env.NUXT_PUBLIC_MAIL_KEY),
            'import.meta.env.NUXT_EMAIL_URL': JSON.stringify(import.meta.env.NUXT_PUBLIC_EMAIL_URL),
            'import.meta.env.API_BASE_PATH': JSON.stringify(import.meta.env.NUXT_PUBLIC_API_BASE_PATH),
            'import.meta.env.SITE_URL': JSON.stringify(import.meta.env.NUXT_PUBLIC_SITE_URL),
            'import.meta.env.FIREBASE_API_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_API_ID),
            'import.meta.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.FIREBASE_PROJECT_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID),
            'import.meta.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.FIREBASE_APP_ID': JSON.stringify(import.meta.env.NUXT_PUBLIC_FIREBASE_APP_ID),
        },
    },

    imports: {
        dirs: [
            'composables/**',
            'models/**',
            'types/**',
            'services/**',
            'endpoints/**',
            'builders/**',
            'constants/**',
        ],
    },

    nitro: {
        compressPublicAssets: true,
    },

    components: [
        {
            path: '~/components',
            pathPrefix: false,
            extensions: ['vue'],
        },
    ],

    typescript: {
        typeCheck: true,
    },

    eslint: {
        config: {
            standalone: false,
        },
    },
});
