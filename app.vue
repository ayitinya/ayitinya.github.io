
<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden ">

    <Head>
      <Title>Rudy Ayitinya Sulley</Title>
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta name="description" content="Portfolio website of a Ghanaian Freelance full stack Web developer" />
      <Meta name="google-site-verification" content="nPvXYhF2XQvp-f7lxRKmf5lqdJx1xViOwbYkhVbmFjg" />
    </Head>
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Inconsolata:wght@300;400;500;600;700;900&display=swap');

body {
  font-family: 'Inconsolata', 'Courier Prime', monospace;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
  background: #e0e0e0;
  font-size: 1.125rem;
}

@media (prefers-color-scheme: dark) {
  body {
    background: #000000;
    color: #fff;
  }
}
</style>
