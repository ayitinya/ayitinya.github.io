import VueGTag from 'vue-gtag'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VueGTag, {
        config: {
            id: 'G-LTMV89EKNM',
        },
        onReady() {
            console.log("loaded script")
        }
    },
        nuxtApp.$router
    )
})