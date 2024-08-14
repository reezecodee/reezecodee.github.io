<template>
    <header class="w-full fixed z-[2000] top-0">
        <nav :class="{ 'bg-opacity-30 bg-gray-500': navbarVisible }"
            class="font-inter font-medium text-sm backdrop-blur-sm border-b border-gray-700 duration-1000">
            <div class="py-4 px-4 md:px-8 flex justify-between items-center container mx-auto">
                <a href="">
                    <div class="flex justify-start items-center text-white">
                        <span class="font-pacifico font-medium text-lg">Reeze Dev</span>
                    </div>
                </a>
                <div id="toggleTarget" :class="isSidebarOpen ? 'block' : 'hidden'"
                    class="bg-gray-900 rounded-md md:rounded-none py-4 px-5 absolute right-6 top-20 md:bg-transparent md:static md:py-0 md:px-0 md:block w-1/2 md:w-auto">
                    <router-link to="/"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">Home</router-link>
                    <router-link to="/about-me"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">About
                        Me</router-link>
                    <router-link to="/my-skills"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">My
                        Skills</router-link>
                    <router-link to="/experience"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">Experience</router-link>
                    <router-link to="/my-projects"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">My
                        Projects</router-link>
                    <router-link to="/blogs"
                        class="text-gray-400 font-semibold ml-0 my-6 md:my-0 md:ml-8 hover:text-white block md:inline">Blogs</router-link>
                    <router-link to="" class="font-semibold ml-0 my-6 md:my-0 md:ml-8 block md:inline">
                        <button class="py-1.5 px-3 bg-gray-200 rounded-md hover:bg-gray-300 text-black">Socialinks</button>
                    </router-link>
                </div>
                <button id="nav-toggle" @click="toggleSidebar()" class="py-2 px-3 block md:hidden" type="button"><i
                        class="fas fa-bars text-xl text-black dark:text-white"></i></button>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const navbarVisible = ref(false);
const isSidebarOpen = ref(false);

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};


const handleScroll = () => {
    if (window.scrollY > 0 && !navbarVisible.value) {
        navbarVisible.value = true;
    } else if (window.scrollY === 0 && navbarVisible.value) {
        navbarVisible.value = false;
    }
};

</script>

<style scoped></style>