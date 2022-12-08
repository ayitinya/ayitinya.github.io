<script setup lang="ts">
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core';

const typewritterField = ref<HTMLHeadingElement | null>(null)
const about = ref<HTMLElement | null>(null)
const work = ref<HTMLElement | null>(null)
const contact = ref<HTMLElement | null>(null)
const hero = ref<HTMLElement | null>(null)
const navbar = ref<HTMLElement | null>(null)
const socialLinks = ref<HTMLElement | null>(null)

const navClosed = ref(true)

onMounted(() => {
    const typewriter = new Typewriter(typewritterField.value, {
        loop: true,
        delay: 100,
        autoStart: true,
        deleteSpeed: 25,
        strings: ['a web developer', 'an engineer', 'a student', 'a gamer', 'a creator', 'a learner', 'a teacher', 'a friend', 'a human'],
    });

    const observerOptions = {
        threshold: 0.6
    }

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (navbar.value)
                if (entry.isIntersecting) {
                    navbar.value.classList.remove('dark:bg-[#000000]')
                    navbar.value.classList.remove('opacity-96')
                    navbar.value.classList.remove('drop-shadow-lg')
                    navbar.value.classList.add('bg-transparent')
                } else {
                    navbar.value.classList.remove('bg-transparent')
                    navbar.value.classList.add('dark:bg-[#000000]')
                    navbar.value.classList.add('opacity-96')
                    navbar.value.classList.add('drop-shadow-lg')
                }
        })
    }, observerOptions)

    if (hero.value)
        navObserver.observe(hero.value)

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (socialLinks.value)
                if (entry.isIntersecting) {
                    socialLinks.value.classList.remove('opacity-100')
                    socialLinks.value.classList.remove('pointer-events-auto')
                    socialLinks.value.classList.add('opacity-0')
                    socialLinks.value.classList.add('pointer-events-none')
                } else {
                    socialLinks.value.classList.remove('opacity-0')
                    socialLinks.value.classList.remove('pointer-events-none')
                    socialLinks.value.classList.add('opacity-100')
                    socialLinks.value.classList.add('pointer-events-auto')
                }
        })
    }, observerOptions)

    if (contact.value)
        contactObserver.observe(contact.value)

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on-screen')
            }
        })
    }, {
        threshold: 0.1
    })

    const sections = [about.value, work.value, contact.value, hero.value]
    sections.forEach(section => {
        if (section)
            scrollObserver.observe(section)
    })
})


const scrollTo = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: 'smooth' });
    if (!navClosed.value) {
        navClosed.value = true
    }
}

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
    <div>

        <div id="navbar" class="sticky top-0  z-50 transition-all ease-in-out duration-500 dark:text-white"
            ref="navbar">
            <nav class="flex-row justify-between flex px-5">
                <span @click="scrollTo(hero!)">
                    <img src="~/assets/images/logo.png" class="h-12 dark:invert" alt="">
                </span>
                <ul class="flex-row items-center hidden md:flex">
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(about!)">
                        aboutMe()</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(work!)">myWork()</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer">
                        <NuxtLink to="https://blog.ayitinya.me" :external="true">blog()</NuxtLink>
                    </li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(contact!)">
                        contactMe()</li>
                    <li class="hover:scale-110 transition-all ease-in-out duration-500">
                        <a class="border border-[#b1b1b1F] px-5 py-2 rounded-md hover:border-[#C7C7C7]"
                            href="/docs/resume.pdf" download="rudy_ayitinya_resume">resume()</a>
                    </li>
                </ul>
                <LazyClientOnly>
                    <span class="md:hidden flex items-center">
                        <Icon @click="navClosed = false" name="mdi-light:hamburger" />
                    </span>
                </LazyClientOnly>

                <div class="dark:bg-black dark:text-white w-full h-screen fixed top-0 left-0 z-50 transition-all ease-in-out duration-500"
                    :class="{ 'hidden': navClosed }">
                    <LazyClientOnly>
                        <span class="flex justify-end py-5 pr-6">
                            <Icon @click="navClosed = true" name="material-symbols:close" />
                        </span>
                    </LazyClientOnly>
                    <ul class="flex flex-col justify-center items-center h-full">
                        <li class="py-5" @click="scrollTo(about!)">aboutMe()</li>
                        <li class="py-5" @click="scrollTo(work!)">myWork()</li>
                        <li class="py-5">
                            <NuxtLink to="https://blog.ayitinya.me" :external="true">blog()</NuxtLink>
                        </li>
                        <li class="py-5" @click="scrollTo(contact!)">contactMe()</li>
                        <li class="py-5"><a class="border border-[#b1b1b1] px-5 py-2 rounded-md"
                                href="/resume/resume.pdf" download="rudy_ayitinya_resume">resume()</a></li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="min-h-screen flex-col justify-center items-center flex off-screen" ref="hero">
            <span class="md:hidden">Hello, I am</span>
            <h1 class="text-4xl text-center font-bold md:hidden">Rudy Ayitinya </h1>
            <h1 class="lg:text-5xl md:text-4xl text-xl font-bold hidden md:block">Hello, I am Rudy Ayitinya, </h1>
            <span class="font-light lg:text-4xl text-3xl" ref="typewritterField"></span>
            <button type="button" @click="scrollTo(about!)"
                class="hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer border border-[#b1b1b1] px-3 rounded hover:shadow-lg my-3">more()</button>
        </div>


        <div class="flex justify-center flex-col items-center md:px-20 px-5">
            <section id="about-me" class="min-h-screen flex flex-col justify-center max-w-[900px] off-screen"
                ref="about">
                <h2 class="text-3xl">aboutMe()</h2>
                <div class="flex lg:flex-row flex-col">
                    <div class="md:pr-3">
                        I am, Rudy Ayitinya Sulley, an Electrical/Electronics Engineering undergraduate student at the
                        Kwame Nkrumah University
                        of Science and Technology, Kumasi. I am a self-taught full-stack web developer and I am
                        passionate about
                        building web applications. I am also a gamer and a tech enthusiast. I am currently looking for
                        an internship or a job as a web developer.
                        <br> <br>
                        I am proficient in the following technologies:
                        <ul class="list-inside list-disc columns-2">
                            <li>HTML and CSS</li>
                            <li>JavaScript</li>
                            <li>Typescript</li>
                            <li>Python</li>
                            <li>NodeJS</li>
                            <li>VueJS</li>
                            <li>NuxtJs</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Git and GitHub</li>
                            <li>Linux</li>
                            <li>Kotlin</li>
                            <li>KMM</li>
                        </ul>
                    </div>
                    <div class="basis-full lg:pt-0 pt-5 flex justify-center">
                        <picture id="profile" class="h-fit relative">
                            <img src="~/assets/images/my_image.jpg" alt="image of me"
                                class="lg:max-h-[250px] max-h-[200px]">
                        </picture>
                    </div>
                </div>
            </section>

            <section id="work" class="min-h-screen w-full off-screen max-w-[900px]" ref="work">
                <h2 class="text-3xl">myWork()</h2>
                <div>
                    <div class="relative my-16">
                        <figure class="">
                            <img src="~/assets/images/apr.jpg" alt="" srcset="" class="max-h-[350px] w-full sm:w-auto object-cover hover:object-contain transition-all duration-1000">
                        </figure>
                        <div
                            class="sm:absolute sm:top-0 h-full sm:h-auto sm:right-0 sm:w-4/5 sm:mt-4 p-5 dark:bg-black/75 bg-white/90 border dark:border-gray-800/60 sm:border-none flex flex-col">
                            <h3 class="text-xl font-semibold my-3">Apartment Rental Site</h3>
                            <p>
                                A SSR website for viewing apartments and houses available for rent. Built with Nuxt,
                                Django and
                                TailwindCSS.
                            </p>
                            <div class="mt-auto">
                                <div>
                                    <span class="mr-2">Nuxt</span>
                                    <span class="mr-2">Django</span>
                                    <span class="mr-2">TailwindCSS</span>
                                </div>
                                <div>
                                    <NuxtLink to="" :external="true" class="mr-2">
                                        <Icon name="fa6-brands:github" size="1.5rem" />
                                    </NuxtLink>
                                    <NuxtLink to="apartment-rental-site.vercel.app" :external="true" class="mr-2">
                                        <Icon name="line-md:external-link-rounded" size="1.5rem" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative my-16">
                        <figure class="">
                            <img src="~/assets/images/sms.png" alt="" srcset="" class="max-h-[350px] w-full sm:w-auto object-cover hover:object-contain transition-all duration-1000">
                        </figure>
                        <div
                            class="sm:absolute sm:top-0 h-full sm:h-auto sm:right-0 sm:w-4/5 sm:mt-4 p-5 dark:bg-black/75 bg-white/90 border dark:border-gray-800/60 sm:border-none flex flex-col">
                            <h3 class="text-xl font-semibold my-3">School Management System</h3>
                            <p>
                                A platform for schools to track, manage and record academic performance of students,
                                while keeping data and financial information about them.
                                Built with VueJS and Django.
                            </p>
                            <div class="mt-auto">
                                <div>
                                    <div>
                                        <span class="mr-2">Vue</span>
                                        <span class="mr-2">Django</span>
                                        <span class="mr-2">Bootstrap</span>
                                        <span class="mr-2">PWA</span>
                                    </div>
                                </div>
                                <div>
                                    <NuxtLink to="" :external="true" class="mr-2">
                                        <Icon name="fa6-brands:github" size="1.5rem" />
                                    </NuxtLink>
                                    <NuxtLink to="https://school-management-system-nu.vercel.app" :external="true"
                                        class="mr-2">
                                        <Icon name="line-md:external-link-rounded" size="1.5rem" />
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-16">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="p-5 border dark:border-gray-800/60 flex flex-col">
                                <h3 class="text-xl font-semibold my-3">Portfolio Website</h3>
                                <p>
                                    Of course, my portfolio website is a project too
                                </p>
                                <div class="mt-auto">
                                    <div>
                                        <span class="mr-2">Nuxt</span>
                                        <span class="mr-2">TailwindCSS</span>
                                    </div>
                                    <div>
                                        <NuxtLink to="" :external="true" class="mr-2">
                                            <Icon name="fa6-brands:github" size="1.5rem" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5 border dark:border-gray-800/60 flex flex-col">
                                <h3 class="text-xl font-semibold my-3">Personal Blog</h3>
                                <p>
                                    A SSR website built with Nuxt, Nuxt Content and TailwindCSS. I write about topics I
                                    wish I knew before I started web development.
                                </p>
                                <div class="mt-auto">
                                    <div>
                                    <span class="mr-2">Nuxt Content</span>
                                    <span class="mr-2">TailwindCSS</span>
                                </div>
                                    <div>
                                        <NuxtLink to="https://blog.ayitinya.me" :external="true" class="mr-2">
                                            <Icon name="line-md:external-link-rounded" size="1.5rem" />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="min-h-screen flex flex-col justify-center off-screen" ref="contact">
                <h2 class="text-3xl text-center">Want to get in touch?</h2>
                <div>
                    <div>
                        I am currently open for opportunities. If you have any questions, feel free to reach out to me.
                    </div>
                    <form action="https://formspree.io/f/mjvzrgpj" method="post" @submit.prevent="submitForm">
                        <div class="md:flex gap-4">
                            <div class="flex flex-col my-5 md:w-1/2">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name"
                                    class="px-2 py-1 focus-visible:outline-none border-b bg-transparent"
                                    placeholder="Your Name" required>
                            </div>
                            <div class="flex flex-col my-5 md:w-1/2">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email"
                                    class="px-2 py-1 focus-visible:outline-none border-b bg-transparent"
                                    placeholder="example@provider.com" required>
                            </div>

                        </div>
                        <div class="flex flex-col my-5">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="2"
                                class="px-2 py-1 focus-visible:outline-none border-b bg-transparent"
                                placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit"
                            class="border border-[#b1b1b1] px-3 py-1 my-3 rounded-md hover:shadow-lg">Send</button>
                    </form>
                    <div v-if="!formNotSent">
                        <p>
                            Your message has been sent successfully. I will get back to you as soon as possible.
                        </p>
                    </div>
                    <div class="flex justify-center pt-5">
                        <LazyClientOnly>
                            <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="github">
                                <Icon name="fa6-brands:github-alt" size="1.5rem" />
                            </a>
                            <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="linkedin">
                                <Icon name="fa6-brands:linkedin" size="1.5rem" />
                            </a>
                            <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
                                <Icon name="fa6-brands:twitter" size="1.5rem" />
                            </a>
                            <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                                rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500"
                                title="stackoverflow">
                                <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                                rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="youtube">
                                <Icon name="fa6-brands:youtube" size="1.5rem" />
                            </a>
                            <a href="mailto:aytinya@outlook.com"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500"
                                title="ayitinya@outlook.com">
                                <Icon name="fa6-solid:envelope" size="1.5rem" />
                            </a>
                            <template #fallback>
                                <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                    class="pb-3">Github</a>
                                <a href="https://www.linkedin.com/in/ayitinya/" target="_blank"
                                    rel="noopener noreferrer" class="pb-3">LinkedIn</a>
                                <a href="https://www.twitter.com/ayitinya" class="pb-3">Twitter</a>
                                <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                                    rel="noopener noreferrer" class="pr-3">
                                    Stackoverflow
                                </a>
                                <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                                    rel="noopener noreferrer">Youtube</a>
                                <a href="mailto:aytinya@outlook.com" class="pr-3">Mail</a>
                            </template>
                        </LazyClientOnly>
                    </div>
                </div>
            </section>
        </div>

        <footer>
            <ClientOnly>
                <p class="text-center py-2">
                    Made with
                    <Icon name="fa6-solid:heart" size="1.5rem" />
                    and open-sourced on <a href="https://github.com/ayitinya/ayitinya.github.io" target="_blank"
                        rel="noopener noreferrer" class="text-cyan-500">Github</a> by Ayitinya
                </p>
            </ClientOnly>
        </footer>

        <div class="fixed bottom-0 left-0 lg:flex flex-col pl-5 pb-5 items-center hidden transition-all ease-in-out duration-500"
            ref="socialLinks">
            <LazyClientOnly>
                <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="github">
                    <Icon name="fa6-brands:github-alt" size="1.5rem" />
                </a>
                <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="linkedin">
                    <Icon name="fa6-brands:linkedin" size="1.5rem" />
                </a>
                <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
                    <Icon name="fa6-brands:twitter" size="1.5rem" />
                </a>
                <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="stackoverflow">
                    <Icon name="fa6-brands:stack-overflow" size="1.5rem" />
                </a>
                <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                    rel="noopener noreferrer" class="pb-3 hover:scale-110 transition-all ease-in-out duration-500"
                    title="youtube">
                    <Icon name="fa6-brands:youtube" size="1.5rem" />
                </a>
                <a href="mailto:aytinya@outlook.com"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="ayitinya@outlook.com">
                    <Icon name="fa6-solid:envelope" size="1.5rem" />
                </a>
                <template #fallback>
                    <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                        class="pb-3">Github</a>
                    <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                        class="pb-3">LinkedIn</a>
                    <a href="https://www.twitter.com/ayitinya" class="pb-3">Twitter</a>
                    <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                        rel="noopener noreferrer" class="pr-3">
                        Stackoverflow
                    </a>
                    <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                        rel="noopener noreferrer">Youtube</a>
                    <a href="mailto:aytinya@outlook.com" class="pb-3">Mail</a>
                </template>
            </LazyClientOnly>
            <div id="line" class="h-32 border-r border-[#b1b1b1]"></div>
        </div>
    </div>
</template>

<style scoped>
img {
    filter: brightness(0.5) grayscale(.7);
    transition: filter 0.3s ease-in-out;
}

picture:hover>img,
img:hover {
    filter: brightness(1) grayscale(0);
}

picture::after {
    content: "";
    position: absolute;
    display: block;
    top: 10%;
    left: 10%;
    width: 100%;
    height: 100%;
    border: 1px solid #b1b1b1;
    z-index: -99;
    transition: all 0.5s ease-in-out;
}

picture:hover::after {
    top: 15%;
    left: 15%;
}

.off-screen {
    transform: translateX(-70%);
    opacity: 0;
    transition: all 1s ease-in-out;
    transition-delay: 200ms;
}

.on-screen {
    transform: translateX(0);
    opacity: 1;
}
</style>