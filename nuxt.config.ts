// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
    ],

    css: ["@/assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_variables.scss" as *;',

                },
            },
        },
    },
})
