<script setup lang="ts">
const typewritter = ref<HTMLHeadingElement | null>(null)

onMounted(() => {
    const text = 'Website under construction'
    
    let i = 0
    const interval = setInterval(() => {
        typewritter.value.innerHTML += text[i]
        i++
        if (i === text.length) {
            clearInterval(interval)
        }
    }, 100)
})

</script>

<template>
    <div class="min-h-screen flex justify-center items-center">
        <div>
            <h1 class="text-5xl" ref="typewritter">
                
            </h1>
        </div>
        <div class="fixed bottom-0 left-0 flex flex-col pl-5 pb-5">
            <ClientOnly>
                <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer">
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </a>
                <a href="mailto:aytinya@outlook.com">
                    <font-awesome-icon icon="fa-regular fa-envelope" />
                </a>
                <template #fallback>
                    <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/ayitinya/" target="_blank"
                        rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://www.twitter.com/ayitinya">Twitter</a>
                    <a href="mailto:aytinya@outlook.com">Mail</a>
                </template>
            </ClientOnly>
        </div>
    </div>
</template>

<style scoped>

</style>
