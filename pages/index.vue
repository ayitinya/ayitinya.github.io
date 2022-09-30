<script setup lang="ts">
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
            if (entry.isIntersecting) {
                navbar.value?.classList.remove('bg-[#e0e0e0]')
                navbar.value?.classList.remove('opacity-96')
                // navbar.value?.classList.remove('text-white')
                navbar.value?.classList.remove('drop-shadow-lg')
                navbar.value?.classList.add('bg-transparent')
            } else {
                navbar.value?.classList.remove('bg-transparent')
                navbar.value?.classList.add('bg-[#e0e0e0]')
                navbar.value?.classList.add('opacity-96')
                // navbar.value?.classList.add('text-white')
                navbar.value?.classList.add('drop-shadow-lg')
            }
        })
    }, observerOptions)


    navObserver.observe(hero.value)

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                socialLinks.value?.classList.remove('opacity-100')
                socialLinks.value?.classList.remove('pointer-events-auto')
                socialLinks.value?.classList.add('opacity-0')
                socialLinks.value?.classList.add('pointer-events-none')
            } else {
                socialLinks.value?.classList.remove('opacity-0')
                socialLinks.value?.classList.remove('pointer-events-none')
                socialLinks.value?.classList.add('opacity-100')
                socialLinks.value?.classList.add('pointer-events-auto')
            }
        })
    }, observerOptions)

    contactObserver.observe(contact.value)
})


const scrollTo = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: 'smooth' });
    if (!navClosed.value) {
        navClosed.value = true
    }
}

</script>

<template>
    <div>

        <div id="navbar" class="sticky top-0 py-4 z-50 transition-all ease-in-out duration-500" ref="navbar">
            <nav class="flex-row justify-between flex pr-5">
                <span></span>
                <ul class="flex-row items-end hidden md:flex">
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(about)">
                        About Me</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(work)">My
                        Work</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(contact)">
                        Contact Me</li>
                    <li
                        class="transition-all ease-in-out duration-300 hover:scale-110 transition-all ease-in-out duration-500">
                        <a class="border border-black px-5 py-2 rounded-md hover:border-[#C7C7C7]"
                            href="/images/my_image.jpg" download="rudy_ayitinya_resume">Resume</a>
                    </li>
                </ul>
                <ClientOnly>
                    <span class="md:hidden">
                        <font-awesome-icon icon="fa-solid fa-bars" @click="navClosed = false" />
                    </span>
                </ClientOnly>

                <div class="bg-[#e0e0e0] w-full h-screen fixed top-0 left-0 z-50 transition-all ease-in-out duration-500"
                    :class="{'hidden': navClosed}">
                    <div class="flex justify-end py-5 pr-6">
                        <font-awesome-icon icon="fa-solid fa-xmark" @click="navClosed = true" />
                    </div>
                    <ul class="flex flex-col justify-center items-center h-full">
                        <li class="py-5" @click="scrollTo(about)">About Me</li>
                        <li class="py-5" @click="scrollTo(work)">My Work</li>
                        <li class="py-5" @click="scrollTo(contact)">Contact Me</li>
                        <li class="py-5">Resume</li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="min-h-screen flex-col justify-center items-center flex" ref="hero">
            <span class="md:hidden">Hello, I am</span>
            <h1 class="text-4xl text-center font-bold md:hidden">Rudy Ayitinya </h1>
            <h1 class="lg:text-5xl md:text-4xl text-xl font-bold hidden md:block">Hello, I am Rudy Ayitinya, </h1>
            <span class="font-light lg:text-4xl text-3xl" ref="typewritterField"></span>
            <span @click="scrollTo(about)"
                class="hover:scale-110 transition-all ease-in-out duration-500   cursor-pointer">More</span>
        </div>


        <div class="flex justify-center flex-col items-center md:px-20 px-5">
            <section id="about-me" class="min-h-screen flex flex-col justify-center max-w-[900px]" ref="about">
                <h2 class="text-3xl">About Me</h2>
                <div class="flex lg:flex-row flex-col">
                    <div class="md:pr-3">
                        I am an Electrical/Electronics Engineering undergraduate student at the Kwame Nkrumah University
                        of Science and Technology, Kumasi. I am a self-taught full-stack web developer and I am
                        passionate about
                        building web applications. I am also a gamer and a tech enthusiast. I am currently looking for
                        an internship or a job as a web developer.
                        <br> <br>
                        I am proficient in the following technologies:
                        <ul class="list-none columns-2">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>NodeJS</li>
                            <li>VueJS</li>
                            <li>NuxtJs</li>
                            <li>Bootstrap</li>
                            <li>TailwindCSS</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                    <div class="basis-full lg:pt-0 pt-5 flex justify-center">
                        <picture id="profile" class="h-fit relative">
                            <img src="/images/my_image.jpg" alt="image of me" class="lg:max-h-[250px] max-h-[200px]">
                        </picture>
                    </div>
                </div>
            </section>

            <section id="work" class="min-h-screen flex flex-col justify-center " ref="work">
                <h2 class="text-3xl">My Work</h2>
                <div>
                    <p>Section under development. Please do check later</p>
                </div>
            </section>

            <section class="min-h-screen flex flex-col justify-center " ref="contact">
                <h2 class="text-3xl text-center">Want to get in touch?</h2>
                <div>
                    <div>
                        I am currently open for opportunities. If you have any questions, feel free to reach out to me.
                    </div>
                    <div class="flex justify-center pt-5">
                        <ClientOnly>
                            <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3">
                                <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                                class="px-3">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-xl" />

                            </a>
                            <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3">
                                <font-awesome-icon icon="fa-brands fa-twitter" class="fa-xl" />
                            </a>
                            <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                                rel="noopener noreferrer" class="pr-3">
                                <font-awesome-icon icon="fa-brands fa-stack-overflow" class="fa-xl" />
                            </a>
                            <a href="mailto:aytinya@outlook.com" class="px-3">
                                <font-awesome-icon icon="fa-regular fa-envelope" class="fa-xl" />
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
                                <a href="mailto:aytinya@outlook.com" class="pr-3">Mail</a>
                            </template>
                        </ClientOnly>
                    </div>
                </div>
            </section>
        </div>


        <div class="fixed bottom-0 left-0 lg:flex flex-col pl-5 pb-5 flex items-center hidden" ref="socialLinks">
            <ClientOnly>
                <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer" class="pb-3">
                    <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                </a>
                <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer" class="pb-3">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-xl" />
                </a>
                <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer" class="pb-3">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="fa-xl" />
                </a>
                <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3">
                    <font-awesome-icon icon="fa-brands fa-stack-overflow" class="fa-xl" />
                </a>
                <a href="mailto:aytinya@outlook.com" class="pb-3">
                    <font-awesome-icon icon="fa-regular fa-envelope" class="fa-xl" />
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
                    <a href="mailto:aytinya@outlook.com" class="pb-3">Mail</a>
                </template>
            </ClientOnly>
            <div id="line" class="h-32 border-r border-black"></div>
        </div>
    </div>
</template>

<style scoped>
picture>img {
    filter: brightness(0.5) grayscale(.7);
    transition: filter 0.3s ease-in-out;
}

picture:hover>img {
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
    border: 1px solid black;
    z-index: -99;
    transition: all 0.5s ease-in-out;
}

picture:hover::after {
    top: 15%;
    left: 15%;
}
</style>