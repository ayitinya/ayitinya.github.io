import VueGTag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  if (config.ENV !== "production") return;

  nuxtApp.vueApp.use(
    VueGTag,
    {
      config: {
        id: config.G_TAG_ID,
        params: {
          linker: {
            domains: ["ayitinya.me", "blog.ayitinya.me"],
          },
        },
      },
    },
    nuxtApp.$router
  );
});
