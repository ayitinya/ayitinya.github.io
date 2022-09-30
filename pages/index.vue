<script setup lang="ts">
import Typewriter from 'typewriter-effect/dist/core';

const typewritterField = ref<HTMLHeadingElement | null>(null)
const about = ref<HTMLElement | null>(null)
const work = ref<HTMLElement | null>(null)
const contact = ref<HTMLElement | null>(null)
const hero = ref<HTMLElement | null>(null)
const navbar = ref<HTMLElement | null>(null)
const socialLinks = ref<HTMLElement | null>(null)



onMounted(() => {
    const typewriter = new Typewriter(typewritterField.value, {
        loop: true,
        delay: 100,
        autoStart: true,
        strings: ['a web developer', 'an engineer', 'a student', 'a gamer', 'a reader', 'a writer', 'a thinker', 'a dreamer', 'a creator', 'a problem solver', 'a learner', 'a teacher', 'a friend', 'a brother', 'a son', 'a husband', 'a father', 'a human'],
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
}

</script>

<template>
    <div>

        <div id="navbar" class="sticky top-0 py-4 z-50" ref="navbar">
            <nav class="flex flex-row justify-between">
                <span></span>
                <ul class="flex flex-row items-end">
                    <li class="pr-2" @click="scrollTo(about)">About Me</li>
                    <li class="pr-2" @click="scrollTo(work)">My Work</li>
                    <li class="pr-2" @click="scrollTo(contact)">Contact Me</li>
                    <li class="pr-2"><a class="outline-black border border-solid border-black px-1"
                            href="/images/my_image.jpg" download="rudy_ayitinya_resume">Resume</a></li>
                </ul>
            </nav>
        </div>

        <div class="min-h-screen flex flex-col justify-center items-center" ref="hero">
            <h1 class="lg:text-5xl md:text-4xl text-xl font-bold">Hello, I am Rudy Ayitinya, </h1>
            <span class="font-light lg:text-4xl md:text-3xl" ref="typewritterField"></span>
            <span  @click="scrollTo(about)">More</span>
        </div>


        <div class="flex justify-center flex-col items-center md:px-20 px-5">
            <section id="about-me" class="min-h-screen flex flex-col justify-center" ref="about">
                <h2 class="text-3xl">About Me</h2>
                <div class="flex lg:flex-row flex-col">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur ea, nihil corrupti debitis
                        asperiores, aliquam aut alias placeat repudiandae quibusdam id numquam. Deleniti voluptatibus,
                        iure, tenetur quisquam, recusandae deserunt harum voluptatem repellat mollitia corrupti veniam
                        praesentium laborum animi ratione reprehenderit quae dolores voluptas repellendus beatae quos
                        facere? Commodi, dignissimos accusantium.
                        <br> <br>
                        adipisicing elit. Tenetur ea, nihil corrupti debitis
                        asperiores, aliquam aut alias placeat repudiandae quibusdam id numquam. Deleniti voluptatibus,
                        iure, tenetur quisquam, recusandae deserunt harum voluptatem repellat mollitia corrupti veniam
                        praesentium laborum animi ratione reprehenderit quae dolores voluptas repellendus beatae quos
                        facere? Commodi, dignissimos accusantium.
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
                                class="pr-3">
                                <font-awesome-icon icon="fa-brands fa-github" class="fa-xl" />
                            </a>
                            <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                                class="pr-3">
                                <font-awesome-icon icon="fa-brands fa-linkedin-in" class="fa-xl" />

                            </a>
                            <a href="https://www.twitter.com/ayitinya" target="_blank" rel="noopener noreferrer"
                                class="pr-3">
                                <font-awesome-icon icon="fa-brands fa-twitter" class="fa-xl" />
                            </a>
                            <a href="https://stackoverflow.com/users/13605694/ayitinya" target="_blank"
                                rel="noopener noreferrer" class="pr-3">
                                <font-awesome-icon icon="fa-brands fa-stack-overflow" class="fa-xl" />
                            </a>
                            <a href="mailto:aytinya@outlook.com" class="pr-3">
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


        <div class="fixed bottom-0 left-0 md:flex flex-col pl-5 pb-5 flex items-center hidden" ref="socialLinks">
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
    picture > img {
        filter: brightness(0.5)  grayscale(.7)  ;
        transition: filter 0.3s ease-in-out;
    }

    picture:hover > img {
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