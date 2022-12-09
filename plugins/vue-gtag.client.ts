import VueGTag from 'vue-gtag'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueGTag, {
        config: {
            id: 'G-LTMV89EKNM',
            params: {
                linker: {
                    domains: ['ayitinya.me', 'blog.ayitinya.me'],
                }
            }
        },
    },
        nuxtApp.$router
    )
})