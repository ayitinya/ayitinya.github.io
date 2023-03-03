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
    },
  },
  runtimeConfig: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID ?? "",
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN ?? "",
    public: {
      ENV: process.env.VERCEL_ENV || process.env.NODE_ENV || "development",
      G_TAG_ID: process.env.G_TAG_ID,
    },
  },
  nitro: {
    prerender: {
      routes: [],
    },
  },
});
