<script setup lang="ts">
const { data } = useFetch("/api/spotify/now_playing");
</script>

<template>
  <div v-if="data">
    <div v-if="data.item" class="flex flex-row items-center gap-4">
      <Icon name="logos:spotify" size="4rem" class="ml-auto" />
      <NuxtLink
        class="mr-auto hover:underline"
        :external="true"
        :to="data.item.external_urls.spotify"
        >{{ data.item.name }} - {{ data.item.artists[0].name }}</NuxtLink
      >
    </div>
  </div>
  <div v-else class="flex flex-row items-center gap-4">
    <Icon name="logos:spotify" size="4rem" class="ml-auto" />
    <span class="mr-auto">Nothing playing right now</span>
  </div>
</template>
