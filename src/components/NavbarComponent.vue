<template>
    <header class="w-full fixed z-[2000] top-0">
        <nav :class="{ 'bg-opacity-30 bg-gray-500': navbarVisible }"
            class="font-inter font-medium text-sm backdrop-blur-sm border-b border-gray-700 duration-1000">
            <div class="py-4 px-8 flex justify-between items-center container mx-auto">
                <a href="">
                    <div class="flex justify-start items-center text-white">
                        <span class="font-pacifico font-medium text-lg">Neil Breen</span>
                    </div>
                </a>
                <div id="toggleTarget"
                    class="bg-gray-800 rounded-md lg:rounded-none py-4 px-5 absolute right-6 top-20 lg:bg-transparent lg:static lg:py-0 lg:px-0 hidden lg:block w-1/2 lg:w-auto">
                    <router-link to="/"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Home</router-link>
                    <router-link to="/about-me"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">About
                        Me</router-link>
                    <router-link to="/my-skills"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">My
                        Skills</router-link>
                    <router-link to="/experience"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Experience</router-link>
                    <router-link to="/my-projects"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">My
                        Projects</router-link>
                    <router-link to="/blogs"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Blogs</router-link>
                    <router-link to="" class="font-semibold ml-0 my-6 lg:my-0 lg:ml-8 block lg:inline">
                        <button class="py-1.5 px-3 bg-gray-200 rounded-md hover:bg-gray-300 text-black">Socialinks</button>
                    </router-link>
                </div>
                <button id="nav-toggle" class="py-2 px-3 block lg:hidden" type="button"><i
                        class="fas fa-bars text-xl text-black dark:text-white"></i></button>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navbarVisible = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    if (window.scrollY > 0 && !navbarVisible.value) {
        navbarVisible.value = true;
    } else if (window.scrollY === 0 && navbarVisible.value) {
        navbarVisible.value = false;
    }
};
</script>

<style scoped></style>