<script setup lang="ts">
import TypewriterEffect from "vue-typewriter-effect";

useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "Rudy Ayitinya Sulley",
  meta: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "description",
      content:
        "Portfolio website of a Ghanaian Freelance full stack Web developer",
    },
    {
      name: "google-site-verification",
      content: "nPvXYhF2XQvp-f7lxRKmf5lqdJx1xViOwbYkhVbmFjg",
    },
  ],
});

const projects = [
  {
    title: "Apartment Rental Site",
    description: "A site that allows users to rent apartments in Ghana.",
    image:
      "v1672400510/portfolio/Screen_Shot_2022-12-30_at_11.41.50_rpa4zg.png",
    imgAlt: "Apartment Rental Site",
    website: "https://apartment-rental-site.vercel.app/",
    sourceCode: "https://github.com/ayitinya/apartment-rental-site",
  },
  {
    title: "School Management System",
    description:
      "A school management system that allows schools to manage their students, teachers, and courses.",
    image:
      "v1672400610/portfolio/Screen_Shot_2022-12-30_at_11.43.25_rvskru.png",
    imgAlt: "School Management System",
    website: "https://school-management-system-nu.vercel.app",
    sourceCode: "https://github.com/ayitinya/school-management-system",
  },
  {
    title: "School Website",
    description:
      "A school website that allows schools to showcase their school to the world.",
    image:
      "v1672399883/portfolio/Screen_Shot_2022-12-30_at_11.31.19_osl2oa.png",
    imgAlt: "School website",
    website: "https://lfsc-website.vercel.app/",
    sourceCode: "https://github.com/ayitinya/school-landing-page",
  },
  {
    title: "Study Abroad Site",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image:
      "v1672400714/portfolio/Screen_Shot_2022-12-30_at_11.45.20_t4edam.png",
    imgAlt: "Study Abroad Site",
    website: "https://educational-org-site.vercel.app/",
    sourceCode: "https://github.com/ayitinya/educational-org-site",
  },
  {
    title: "Blog Site",
    description:
      "A blog site where users can create and read blog posts. Add a post if you check out the site.",
    image:
      "v1672400818/portfolio/Screen_Shot_2022-12-30_at_11.46.56_l8kpnt.png",
    imgAlt: "Blog Site",
    website: "https://blog-ayitinya.vercel.app/",
    sourceCode: "https://github.com/ayitinya/blog-site/tree/main",
  },
];

const notableProjects = [
  {
    title: "Vue Typewriter Effect",
    description: "A Vue 3 component wrapper of typewriter-effect.",
    website: "https://ayitinya.github.io/vue-typewriter-effect/",
    sourceCode: "https://github.com/ayitinya/vue-typewriter-effect/",
  },
  {
    title: "Commmerce Telegram Bot",
    description: `A bot built that provides a medium to make purchases on telegram. 
    Has an admin interface to update items and manage orders.\nBuilt with python`,
    sourceCode: "https://github.com/ayitinya/commerce-telegram-bot",
  },
];

const navClosed = ref(true);

const formNotSent = ref(true);
const submitForm = async (event: Event) => {
  const formData = new FormData(event.target as HTMLFormElement);
  fetch("https://formspree.io/f/mjvzrgpj", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    formNotSent.value = false;
  });
};
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 drop-shadow-sm backdrop-blur-lg">
    <nav
      class="flex flex-row container mx-auto px-4 py-3 items-center justify-between"
    >
      <span>
        <img src="~assets/images/logo.png" class="h-12" />
      </span>
      <ul class="hidden sm:flex flex-row justify-between gap-8">
        <li class="">
          <a href="#projects" class="">Work</a>
        </li>
        <li class="">
          <a href="#contact" class="">Contact</a>
        </li>
        <li class="">
          <a href="https://blog.ayitinya.me" class="">Blog</a>
        </li>
      </ul>
      <a
        href="docs/resume.pdf"
        download="rudy-ayitinya-resume"
        class="hidden sm:inline-block border border-black bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
      >
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
      class="bg-white/90 drop-shadow-sm backdrop-blur-lg w-screen absolute left-0 z-50 transition-all ease-in-out duration-500 py-4"
      :class="{ hidden: navClosed }"
    >
      <ul class="flex flex-col items-center gap-8">
        <li class="">
          <a hreflang="#projects" class="">Work</a>
        </li>
        <li class="">
          <a href="#contact" class="">Contact</a>
        </li>
        <li class="">
          <a href="https://blog.ayitinya.me" class="">Blog</a>
        </li>
        <li>
          <a
            href="docs/resume.pdf"
            download="rudy-ayitinya-resume"
            class="border border-black bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Download Resume
          </a>
        </li>
      </ul>
    </div>
  </header>

  <main class="container px-4 mx-auto min-h-screen my-8">
    <section class="min-h-[60vh] portrait:min-h-fit relative">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="">
          <span class="">Hey there 👋, I am</span>
          <h1 class="text-7xl font-bold">Rudy Ayitinya</h1>
          <TypewriterEffect
            class="text-2xl md:text-4xl font-bold"
            :strings="[
              'a web developer',
              'an engineer',
              'a student',
              'a gamer',
              'a creator',
              'a learner',
              'a teacher',
              'a friend',
              'a human',
            ]"
            element="h2"
          />
          <p class="text-lg">Have a project in mind? Let's work together.</p>
          <div class="flex flex-row gap-4 mt-8 justify-center md:justify-start">
            <a
              href="#projects"
              class="p-3 bg-black border border-black text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              My Projects
            </a>
            <a
              href="#contact"
              class="p-3 border border-black rounded-lg hover:bg-black hover:border-white hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
          <div class="flex items-center justify-center md:justify-start py-8">
            <a
              href="https://github.com/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="github"
            >
              <Icon name="fa6-brands:github-alt" size="1.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayitinya/"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="linkedin"
            >
              <Icon name="fa6-brands:linkedin" size="1.5rem" />
            </a>
            <a
              href="https://www.twitter.com/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="twitter"
            >
              <Icon name="fa6-brands:twitter" size="1.5rem" />
            </a>
            <a
              href="https://stackoverflow.com/users/13605694/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="stackoverflow"
            >
              <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="youtube"
            >
              <Icon name="fa6-brands:youtube" size="1.5rem" />
            </a>
            <a
              href="mailto:aytinya@outlook.com"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="ayitinya@outlook.com"
            >
              <Icon name="fa6-solid:envelope" size="1.5rem" />
            </a>
          </div>
        </div>
        <div class="flex-shrink-0">
          <NuxtImg
            provider="cloudinary"
            src="v1671458422/portfolio/um_rnvwni.png"
            quality="50"
            class="h-96 w-96"
            alt=""
          />
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-4 text-center my-16 border rounded-lg py-4"
      >
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
          <p>☕ Drank</p>
        </div>
      </div>
    </section>

    <section class="my-40 portrait:my-16">
      <h2 class="text-2xl font-thin">Technologies</h2>
      <h3 class="text-3xl font-bold">Frameworks, Tools and Languages</h3>
      <div class="grid md:grid-cols-5 grid-cols-3 items-center">
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:javascript" size="4.5rem" />
          <span>Javascript</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:typescript" size="4.5rem" />
          <span>Typescript</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:python" size="4.5rem" />
          <span>Python</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:kotlin" size="4.5rem" />
          <span>Kotlin</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:vuedotjs" size="4.5rem" />
          <span>Vue Js</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:react" size="4.5rem" />
          <span>React Js</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:nuxtdotjs" size="4.5rem" />
          <span>Nuxt Js</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:django" size="4.5rem" />
          <span>Django</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:amazonaws" size="4.5rem" />
          <span>AWS</span>
        </div>
        <div class="p-4 flex flex-col items-center">
          <Icon name="simple-icons:firebase" size="4.5rem" />
          <span>Firebase</span>
        </div>
      </div>
    </section>

    <section class="my-40 portrait:my-16" id="projects">
      <h2 class="text-2xl font-thin">Work</h2>
      <h3 class="text-3xl font-bold">Projects I Have Worked On</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <Project
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :img-alt="project.imgAlt"
          :source-code="project.sourceCode"
          :website="project.website"
        />
      </div>

      <h3 class="text-3xl font-bold">Other Notable Projects</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
        <NotableProject
          v-for="(project, index) in notableProjects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :source-code="project.sourceCode"
          :website="project.website"
        />
      </div>
    </section>

    <section class="my-40 portrait:my-16" id="contact">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div class="flex flex-col">
          <h2 class="text-2xl font-thin">Contact</h2>
          <h3 class="text-3xl font-bold">Get In Touch</h3>
          <p class="my-4">
            I am currently looking for a new opportunity. My inbox is always
            open. Whether you have a question or just want to say hi, I'll get
            back to you as soon as I can!
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
              <a
                href="https://www.google.com/maps/place/Accra/@5.5913754,-0.2497694,12z/data=!3m1!4b1!4m5!3m4!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.6037168!4d-0.1869644"
                class="text-xl font-bold"
              >
                Accra, Ghana
              </a>
            </div>
          </div>

          <div class="flex flex-row gap-4 my-4">
            <a
              href="https://github.com/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500"
              title="github"
            >
              <Icon name="fa6-brands:github-alt" size="1.5rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayitinya/"
              target="_blank"
              rel="noopener noreferrer"
              class="pr-3 hover:scale-110 transition-all ease-in-out duration-500"
              title="linkedin"
            >
              <Icon name="fa6-brands:linkedin" size="1.5rem" />
            </a>
            <a
              href="https://www.twitter.com/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500"
              title="twitter"
            >
              <Icon name="fa6-brands:twitter" size="1.5rem" />
            </a>
            <a
              href="https://stackoverflow.com/users/13605694/ayitinya"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500"
              title="stackoverflow"
            >
              <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:scale-110 transition-all ease-in-out duration-500"
              title="youtube"
            >
              <Icon name="fa6-brands:youtube" size="1.5rem" />
            </a>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mjvzrgpj"
          method="post"
          @submit.prevent="submitForm"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col gap-4">
              <label for="name" class="text-xl font-bold">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                class="border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your name"
                required
              />
            </div>
            <div class="flex flex-col gap-4">
              <label for="email" class="text-xl font-bold">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                class="border-2 border-gray-300 p-2 rounded-md"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div class="flex flex-col gap-4 mt-4">
            <label for="message" class="text-xl font-bold">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              class="border-2 border-gray-300 p-2 rounded-md"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="bg-black border border-black text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Send
          </button>

          <div v-if="!formNotSent">
            <p>
              Your message has been sent successfully. I will get back to you as
              soon as possible.
            </p>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer class="container mx-auto">
    <LazySpotify />
    <p class="text-center pb-2">
      Made with
      <Icon name="fa6-solid:heart" size="1.5rem" />
      and open-sourced on
      <a
        href="https://github.com/ayitinya/ayitinya.github.io"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-500"
        >Github</a
      >
      by Ayitinya
    </p>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Inconsolata:wght@300;400;500;600;700;900&display=swap");

body {
  font-family: "Inconsolata", "Courier Prime", monospace;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow-x: hidden;
  font-size: 1.125rem;
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      circle at 15% 65%,
      rgba(253, 24, 158, 0.2),
      hsla(0, 0%, 100%, 0) 15%
    ),
    radial-gradient(
      circle at 85% 25%,
      rgba(0, 112, 243, 0.2),
      hsla(0, 0%, 100%, 0) 15%
    );
  z-index: -1;
  opacity: 0.5;
}

@media (prefers-color-scheme: dark) {
}

/* cyan-500 */
</style>
