
<template>
  <div class="min-h-screen flex flex-col">

    <Head>
      <Title>Ayitinya</Title>
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="theme-color" content="#ffffff" />
      <Meta name="description" content="My portfolio website" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-LTMV89EKNM" async></Script>
      <Script src="/js/gtag.js"></Script>
    </Head>

    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Inconsolata:wght@300;400;500;600;700;900&display=swap');

body {
  font-family: 'Inconsolata', 'Courier Prime', monospace;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
}
</style>
