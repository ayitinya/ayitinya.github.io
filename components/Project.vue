<script setup lang="ts">
withDefaults(
    defineProps<{
        title: string,
        description: string,
        image: string,
        imgAlt: string,
        website?: string | null,
        sourceCode?: string | null
    }>(),
    {
        website: null,
        sourceCode: null
    }
)
</script>

<template>
    <div class="flex flex-col border">
        <NuxtImg provider="cloudinary" quality="50"  :src="image" :alt="imgAlt" class="w-full max-h-60 object-cover hover:object-scale-down" />
        <div class="p-4 min-h-[200px] flex flex-col mt-auto">
            <h4 class="text-2xl font-bold">{{ title }}</h4>
            <p class="text-lg font-thin">
                {{ description }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-auto text-center">
                <NuxtLink v-if="website" :external="true" :to="website" target="_blank"
                    class="bg-black text-white rounded-lg border p-2">View Website</NuxtLink>
                <NuxtLink v-if="sourceCode" :external="true" :to="sourceCode" target="_blank"
                    class="border border-black rounded-lg p-2">View Source</NuxtLink>
            </div>
        </div>
    </div>
</template>