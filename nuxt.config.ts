// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-icon"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
        ENV: process.env.VERCEL_ENV || process.env.NODE_ENV || "development",
        G_TAG_ID: process.env.G_TAG_ID,
    }
  }
});
