// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
      ],
      head: {
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-LTMV89EKNM",
                async: true,
            },
            {
                src: "@/assets/js/gtag.js",
            }
        ]
    },
})
