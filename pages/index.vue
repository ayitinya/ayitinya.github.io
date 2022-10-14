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
        console.log(response)
        formNotSent.value = false
    }).catch(error => {
        console.log(error)
    })
}

</script>

<template>
    <div>

        <div id="navbar" class="sticky top-0  z-50 transition-all ease-in-out duration-500" ref="navbar">
            <nav class="flex-row justify-between flex px-5">
                <span @click="scrollTo(hero)">
                    <img src="/images/logo.png" class="h-12" alt="">
                </span>
                <ul class="flex-row items-center hidden md:flex">
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(about)">
                        aboutMe()</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(work)">myWork()</li>
                    <li class="px-5 hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
                        @click="scrollTo(contact)">
                        contactMe()</li>
                    <li
                        class="transition-all ease-in-out duration-300 hover:scale-110 transition-all ease-in-out duration-500">
                        <a class="border border-black px-5 py-2 rounded-md hover:border-[#C7C7C7]"
                            href="/resume/resume.pdf" download="rudy_ayitinya_resume">resume()</a>
                    </li>
                </ul>
                <LazyClientOnly>
                    <span class="md:hidden flex items-center">
                        <font-awesome-icon icon="fa-solid fa-bars" @click="navClosed = false" />
                    </span>
                </LazyClientOnly>

                <div class="bg-[#e0e0e0] w-full h-screen fixed top-0 left-0 z-50 transition-all ease-in-out duration-500"
                    :class="{'hidden': navClosed}">
                    <LazyClientOnly>
                        <span class="flex justify-end py-5 pr-6">
                            <font-awesome-icon icon="fa-solid fa-xmark" @click="navClosed = true" />
                        </span>
                    </LazyClientOnly>
                    <ul class="flex flex-col justify-center items-center h-full">
                        <li class="py-5" @click="scrollTo(about)">About Me</li>
                        <li class="py-5" @click="scrollTo(work)">My Work</li>
                        <li class="py-5" @click="scrollTo(contact)">Contact Me</li>
                        <li class="py-5"><a class="border border-black px-5 py-2 rounded-md" href="/resume/resume.pdf"
                                download="rudy_ayitinya_resume">Resume</a></li>
                    </ul>
                </div>
            </nav>
        </div>

        <div class="min-h-screen flex-col justify-center items-center flex off-screen" ref="hero">
            <span class="md:hidden">Hello, I am</span>
            <h1 class="text-4xl text-center font-bold md:hidden">Rudy Ayitinya </h1>
            <h1 class="lg:text-5xl md:text-4xl text-xl font-bold hidden md:block">Hello, I am Rudy Ayitinya, </h1>
            <span class="font-light lg:text-4xl text-3xl" ref="typewritterField"></span>
            <button type="button" @click="scrollTo(about)"
                class="hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer border border-black px-3 rounded hover:shadow-lg my-3">More</button>
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

            <section id="work" class="min-h-screen flex flex-col justify-center off-screen" ref="work">
                <h2 class="text-3xl">myWork()</h2>
                <div>
                    <p>Section under development. Please do check later</p>
                </div>
            </section>

            <section class="min-h-screen flex flex-col justify-center off-screen" ref="contact">
                <h2 class="text-3xl text-center">Want to get in touch?</h2>
                <div>
                    <div>
                        I am currently open for opportunities. If you have any questions, feel free to reach out to me.
                    </div>
                    <form action="https://formspree.io/f/mjvzrgpj" method="post" @submit.prevent="submitForm">
                        <div class="flex flex-col">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name" class="rounded-md px-2 py-1" required>
                        </div>
                        <div class="flex flex-col">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class=" rounded-md px-2 py-1" required>
                        </div>
                        <div class="flex flex-col">
                            <label for="message">Message</label>
                            <textarea name="message" id="message" rows="3" class=" rounded-md " required></textarea>
                        </div>
                        <button type="submit"
                            class="border border-black px-3 py-1 my-3 rounded-md hover:shadow-lg">Send</button>
                    </form>
                    <div>
                        <p :class="{'hidden': formNotSent}">
                            Your message has been sent successfully. I will get back to you as soon as possible.
                        </p>
                    </div>
                    <div class="flex justify-center pt-5">
                        <LazyClientOnly>
                            <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="github">
                                <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="linkedin">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-xl" />

                            </a>
                            <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
                                <font-awesome-icon icon="fa-brands fa-twitter" class="fa-xl" />
                            </a>
                            <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                                rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500"
                                title="stackoverflow">
                                <font-awesome-icon icon="fa-brands fa-stack-overflow" class="fa-xl" />
                            </a>
                            <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                                rel="noopener noreferrer"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500" title="youtube">
                                <font-awesome-icon icon="fa-brands fa-youtube" class="fa-xl" />
                            </a>
                            <a href="mailto:aytinya@outlook.com"
                                class="px-3 hover:scale-110 transition-all ease-in-out duration-500"
                                title="ayitinya@outlook.com">
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
                <p class="text-center">
                    Made with
                    <font-awesome-icon icon="fa-solid fa-heart" /> and open-sourced on <a
                        href="https://github.com/ayitinya/ayitinya.github.io" target="_blank" rel="noopener noreferrer"
                        class="text-cyan-500">Github</a> by Ayitinya
                </p>
            </ClientOnly>
        </footer>

        <div class="fixed bottom-0 left-0 lg:flex flex-col pl-5 pb-5 flex items-center hidden transition-all ease-in-out duration-500"
            ref="socialLinks">
            <LazyClientOnly>
                <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="github">
                    <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                </a>
                <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="linkedin">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-xl" />
                </a>
                <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="twitter">
                    <font-awesome-icon icon="fa-brands fa-twitter" class="fa-xl" />
                </a>
                <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank" rel="noopener noreferrer"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="stackoverflow">
                    <font-awesome-icon icon="fa-brands fa-stack-overflow" class="fa-xl" />
                </a>
                <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                    rel="noopener noreferrer" class="pb-3 hover:scale-110 transition-all ease-in-out duration-500"
                    title="youtube">
                    <font-awesome-icon icon="fa-brands fa-youtube" class="fa-xl" />
                </a>
                <a href="mailto:aytinya@outlook.com"
                    class="pb-3 hover:scale-110 transition-all ease-in-out duration-500" title="ayitinya@outlook.com">
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
                    <a href="https://www.youtube.com/channel/UCXl1hGdGXXKDidPqK1Xcm1A" target="_blank"
                        rel="noopener noreferrer">Youtube</a>
                    <a href="mailto:aytinya@outlook.com" class="pb-3">Mail</a>
                </template>
            </LazyClientOnly>
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