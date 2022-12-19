<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'Rudy Ayitinya Sulley',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'Portfolio website of a Ghanaian Freelance full stack Web developer',
    },
    {
      name: 'google-site-verification',
      content: 'nPvXYhF2XQvp-f7lxRKmf5lqdJx1xViOwbYkhVbmFjg',
    },
  ]
})

const projects = [
  {
    title: 'Apartment Rental Site',
    description: 'A site that allows users to rent apartments in Ghana.',
    image: 'v1671458421/portfolio/apr_yghk5y.jpg',
    imgAlt: 'Apartment Rental Site',
    website: 'https://apartment-rental-site.netlify.app/',
    sourceCode: 'https://github.com/ayitinya/apartment-rental-site',
  },
  {
    title: 'School Management System',
    description: 'A school management system that allows schools to manage their students, teachers, and courses.',
    image: 'v1671458421/portfolio/sms_vlwpat.png',
    imgAlt: 'School Management System',
    website: 'https://school-management-system-nu.vercel.app',
    sourceCode: 'https://github.com/ayitinya/school-management-system',
  },
  {
    title: 'Study Abroad Site',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    image: 'v1671458903/portfolio/Screen_Shot_2022-12-19_at_14.08.07_pynnak.png',
    imgAlt: 'Study Abroad Site',
    website: 'https://educational-org-site.vercel.app/',
    sourceCode: 'https://github.com/ayitinya/educational-org-site',
  },
  {
    title: 'Personal Blog',
    description: 'My personal blog where I write about my experiences as a developer.',
    image: 'v1671459117/portfolio/Screen_Shot_2022-12-19_at_14.11.56_arekyj.png',
    imgAlt: 'Personal Blog',
    website: 'https://blog.ayitinya.me',
    sourceCode: '',
  }
]

const navClosed = ref(true)

const formNotSent = ref(true)
const submitForm = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement)
  fetch("https://formspree.io/f/mjvzrgpj", {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    formNotSent.value = false
  })
}
</script>

<template>
  <header class=" sticky top-0 z-50 bg-white/90 drop-shadow-sm backdrop-blur-lg">
    <nav class="flex flex-row container mx-auto px-4 py-3 items-center justify-between">
      <span>
        <img src="~assets/images/logo.png" class="h-12" />
      </span>
      <ul class="hidden sm:flex flex-row justify-between gap-8">
        <li class="">
          <NuxtLink to="#projects" class="">Work</NuxtLink>
        </li>
        <li class="">
          <NuxtLink to="#contact" class="">Contact</NuxtLink>
        </li>
        <li class="">
          <NuxtLink :external="true" to="https://blog.ayitinya.me" class="">Blog</NuxtLink>
        </li>
      </ul>
      <a href="docs/resume.pdf" download="rudy-ayitinya-resume"
        class="hidden sm:inline-block border border-black bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black">
        Download Resume
      </a>
      <span v-if="navClosed" class="sm:hidden" @click="navClosed = false">
        <Icon name="fa6-solid:bars" size="1.5rem" />
      </span>
      <span v-else @click="navClosed = true">
        <Icon name="material-symbols:close" size="1.5rem" />
      </span>
    </nav>
    <div
      class="bg-white/90 drop-shadow-sm backdrop-blur-lg w-screen absolute  left-0 z-50 transition-all ease-in-out duration-500 py-4"
      :class="{ 'hidden': navClosed }">
      <ul class="flex flex-col items-center gap-8">
        <li class="">
          <NuxtLink to="#projects" class="">Work</NuxtLink>
        </li>
        <li class="">
          <NuxtLink to="#contact" class="">Contact</NuxtLink>
        </li>
        <li class="">
          <NuxtLink :external="true" to="https://blog.ayitinya.me" class="">Blog</NuxtLink>
        </li>
        <li>
          <a href="docs/resume.pdf" download="rudy-ayitinya-resume"
            class="border border-black bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black">
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  </header>

  <main class="container px-4 mx-auto min-h-screen my-8">

    <section class="min-h-[60vh] portrait:min-h-fit relative">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 ">
        <div class="">
          <span class="">Hey there 👋, I am</span>
          <h1 class="text-7xl font-bold">Rudy Ayitinya</h1>
          <h2 class="text-2xl md:text-4xl font-bold">A Full Stack Developer</h2>
          <p class="text-lg">
            Have a project in mind? Let's work together.
          </p>
          <div class="flex flex-row gap-4 mt-8 justify-center md:justify-start">
            <NuxtLink to="#projects" class="p-3 bg-black text-white rounded-lg">
              My Projects
            </NuxtLink>
            <NuxtLink to="#contact" class="p-3 border border-black rounded-lg">
              Contact Me
            </NuxtLink>
          </div>
          <div class="flex items-center justify-center md:justify-start py-8">
            <NuxtLink :external="true" to="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500" title="github">
              <Icon name="fa6-brands:github-alt" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.linkedin.com/in/ayitinya/" target="_blank"
              rel="noopener noreferrer" class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="linkedin">
              <Icon name="fa6-brands:linkedin" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
              <Icon name="fa6-brands:twitter" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
              rel="noopener noreferrer" class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="stackoverflow">
              <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
              rel="noopener noreferrer" class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="youtube">
              <Icon name="fa6-brands:youtube" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="mailto:aytinya@outlook.com"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500" title="ayitinya@outlook.com">
              <Icon name="fa6-solid:envelope" size="1.5rem" />
            </NuxtLink>
          </div>
        </div>
        <div class="flex-shrink-0">
          <NuxtImg provider="cloudinary" src="v1671458422/portfolio/um_rnvwni.png" quality="50" class="h-96 w-96"
            alt="" />
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 text-center my-16 border rounded-lg py-4">
        <div>
          <span class="text-5xl font-bold">2+</span>
          <p>Years Experience</p>
        </div>
        <div>
          <span class="text-5xl font-bold">5</span>
          <p>Projects Completed</p>
        </div>
        <div>
          <span class="text-5xl font-bold">108+</span>
          <p>
            ☕ Drank
          </p>
        </div>
      </div>

    </section>

    <section class="my-60 portrait:my-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 class="text-3xl font-bold text-center underline my-2">Languages</h2>
        <div class="flex flex-row flex-wrap gap-4 justify-center">
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:javascript" size="2rem" />
            <span>JavaScript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:typescript" size="2rem" />
            <span>TypeScript</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:python" size="2rem" />
            <span>Python</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:kotlin" size="2rem" />
            <span>Kotlin</span>
          </div>

          <div class="flex flex-col items-center">
            <Icon name="simple-icons:postgresql" size="2rem" />
            <span>Postgres</span>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-center underline my-2">Frameworks</h2>
        <div class="flex flex-row flex-wrap gap-4 justify-center">
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:vuedotjs" size="2rem" />
            <span>VueJS</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:nuxtdotjs" size="2rem" />
            <span>Nuxt</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:react" size="2rem" />
            <span>React</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:flask" size="2rem" />
            <span>Flask</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:django" size="2rem" />
            <span>Django</span>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-3xl font-bold text-center underline my-2">Dev Tools</h2>
        <div class="flex flex-row flex-wrap gap-4 justify-center">
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:git" size="2rem" />
            <span>Git</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:visualstudiocode" size="2rem" />
            <span>VS Code</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:amazonaws" size="2rem" />
            <span>AWS</span>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="simple-icons:firebase" size="2rem" />
            <span>Firebase</span>
          </div>

        </div>
      </div>
    </section>


    <section class="my-60 portrait:my-16" id="projects">
      <h2 class="text-2xl font-thin">Work</h2>
      <h3 class="text-3xl font-bold">Projects I Have Worked On</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <Project v-for="project, index in projects" :key="index" :title="project.title"
          :description="project.description" :image="project.image" :img-alt="project.imgAlt"
          :source-code="project.sourceCode" :website="project.website" />
      </div>
    </section>

    <section class="my-60 portrait:my-16" id="contact">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div class="flex flex-col">
          <h2 class="text-2xl font-thin">Contact</h2>
          <h3 class="text-3xl font-bold">Get In Touch</h3>
          <p class="my-4">
            I am currently looking for a new opportunity. My inbox is always open. Whether you have a question or just
            want to say hi, I'll get back to you as soon as I can!
          </p>
          <div class="flex flex-col gap-4">

            <div class="flex flex-row gap-4 items-center">
              <Icon name="fa6-solid:envelope" size="2rem" />
              <a href="mailto:contact@ayitinya.me" class="text-xl font-bold">
                contact@ayitinya.me
              </a>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <Icon name="mdi:phone" size="2rem" />
              <a href="tel:+233-205-836-458" class="text-xl font-bold">
                +233-205-836-458
              </a>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <Icon name="mdi:map-marker" size="2rem" />
              <a href="https://goo.gl/maps/6Z5Z9Z9Z9Z9Z9Z9Z9" class="text-xl font-bold">
                Accra, Ghana
              </a>
            </div>
          </div>

          <div class="flex flex-row gap-4 my-4">
            <NuxtLink :external="true" to="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500" title="github">
              <Icon name="fa6-brands:github-alt" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.linkedin.com/in/ayitinya/" target="_blank"
              rel="noopener noreferrer" class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="linkedin">
              <Icon name="fa6-brands:linkedin" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
              <Icon name="fa6-brands:twitter" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
              rel="noopener noreferrer" class="hover:scale-110 transition-all ease-in-out duration-500"
              title="stackoverflow">
              <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
            </NuxtLink>
            <NuxtLink :external="true" to="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
              rel="noopener noreferrer" class="hover:scale-110 transition-all ease-in-out duration-500" title="youtube">
              <Icon name="fa6-brands:youtube" size="1.5rem" />
            </NuxtLink>
          </div>

        </div>

        <form action="https://formspree.io/f/mjvzrgpj" method="post" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col gap-4">
              <label for="name" class="text-xl font-bold">Name</label>
              <input type="text" name="name" id="name" class="border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your name" required />
            </div>
            <div class="flex flex-col gap-4">
              <label for="email" class="text-xl font-bold">Email</label>
              <input type="email" name="email" id="email" class="border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your email" required />
            </div>
          </div>

          <div class="flex flex-col gap-4 mt-4">
            <label for="message" class="text-xl font-bold">Message</label>
            <textarea name="message" id="message" cols="30" rows="6" class="border-2 border-gray-300 p-2 rounded-md"
              placeholder="Your message" required></textarea>
          </div>

          <button type="submit" class="bg-black text-white font-bold py-2 px-4 rounded-md mt-4">
            Send
          </button>

          <div v-if="!formNotSent">
            <p>
              Your message has been sent successfully. I will get back to you as soon as possible.
            </p>
          </div>
        </form>
      </div>

    </section>
  </main>

  <footer class="container mx-auto">
    <p class="text-center py-2">
      Made with
      <Icon name="fa6-solid:heart" size="1.5rem" />
      and open-sourced on <a href="https://github.com/ayitinya/ayitinya.github.io" target="_blank"
        rel="noopener noreferrer" class="text-cyan-500">Github</a> by Ayitinya
    </p>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Inconsolata:wght@300;400;500;600;700;900&display=swap');

body {
  font-family: 'Inconsolata', 'Courier Prime', monospace;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 1.125rem;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 15% 65%, rgba(253, 24, 158, .2), hsla(0, 0%, 100%, 0) 15%), radial-gradient(circle at 85% 25%, rgba(0, 112, 243, .2), hsla(0, 0%, 100%, 0) 15%);
  z-index: -1;
  opacity: 0.5;
}

@media (prefers-color-scheme: dark) {}

/* cyan-500 */
</style>
