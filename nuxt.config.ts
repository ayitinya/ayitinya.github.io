// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-icon'
    ],
    css: [
        '~/assets/css/tailwind.css',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
}
)
