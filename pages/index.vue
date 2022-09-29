<script setup lang="ts">
import Typewriter from 'typewriter-effect/dist/core';

const typewritterField = ref<HTMLHeadingElement | null>(null)
const about = ref<HTMLElement | null>(null)

onMounted(() => {
    const typewriter = new Typewriter(typewritterField.value, {
        loop: true,
        delay: 100,
        autoStart: true,
        strings: ['a web developer', 'an engineer', 'a student', 'a gamer', 'a reader', 'a writer', 'a thinker', 'a dreamer', 'a creator', 'a problem solver', 'a learner', 'a teacher', 'a friend', 'a brother', 'a son', 'a husband', 'a father', 'a human'],
    });
})

const scrollTo = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
    <div class="pb-20">

        <div>
            <nav class="flex flex-row justify-between">
                <span></span>
                <ul class="flex flex-row items-end">
                    <li class="pr-2" @click="scrollTo(about)">About Me</li>
                    <li class="pr-2">My Work</li>
                    <li class="pr-2">Contact Me</li>
                    <li class="pr-2">Resume</li>
                </ul>
            </nav>
        </div>

        <div class="h-screen flex flex-col justify-center items-center">
            <h1 class="text-5xl font-bold">Hello, I am Rudy Ayitinya, <span class="font-light"
                    ref="typewritterField"></span></h1>
            <span class="text-2xl">more</span>
        </div>


        <div class="flex justify-center items-center px-20">
            <section id="about-me" ref="about">
                <h2 class="text-3xl">About Me</h2>
                <div class="flex flex-row">
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
                    <div class="basis-full">
                        <img src="/images/my_image.jpg" alt="image of me" class="h-max-[250px]">
                    </div>
                </div>
            </section>
        </div>


        <div class="fixed bottom-0 left-0 flex flex-col pl-5 pb-5">
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
                <a href="mailto:aytinya@outlook.com" class="pb-3">
                    <font-awesome-icon icon="fa-regular fa-envelope" class="fa-xl" />
                </a>
                <template #fallback>
                    <a href="https://github.com/ayitinya" target="_blank" rel="noopener noreferrer"
                        class="pb-3">Github</a>
                    <a href="https://www.linkedin.com/in/ayitinya/" target="_blank" rel="noopener noreferrer"
                        class="pb-3">LinkedIn</a>
                    <a href="https://www.twitter.com/ayitinya" class="pb-3">Twitter</a>
                    <a href="mailto:aytinya@outlook.com" class="pb-3">Mail</a>
                </template>
            </ClientOnly>
        </div>
    </div>
</template>
