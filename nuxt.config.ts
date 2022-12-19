// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/color-mode", "nuxt-icon", "@nuxt/image-edge"],
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    cloudinary: {
        baseURL: "https://res.cloudinary.com/dnha19v3n/image/upload/",
    }
  }
});
