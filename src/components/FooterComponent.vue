<template>
    <footer>
        <div class="container mx-auto px-8 py-4 border-t border-gray-700 mt-10 md:mt-20">
            <div class="flex flex-wrap gap-10 md:gap-24">
                <div>
                    <div class="flex items-center gap-4">
                        <img src="https://avatars.githubusercontent.com/u/159593076?v=4" alt="" srcset=""
                            class="rounded-full w-24 duration-300 cursor-pointer border-2 border-transparent hover:border-gray-200 p-1">
                        <span class="text-gray-200 font-semibold">
                            <p>Reeze Dev</p>
                            <p class="text-xs font-thin">Web Developer: Backend Dev</p>
                        </span>
                    </div>
                    <div class="mt-5">
                        <p class="text-sm">Otto Iskandardinata st, Tasikmalaya, Indonesia.</p>
                    </div>
                </div>
                <div>
                    <h6 class="text-xl font-semibold mb-3">Social Media</h6>
                    <ul class="text-sm text-gray-400 group">
                        <li class="mb-2">
                            <a href="https://github.com/reezecodee" class="hover:text-white" target="_blank">GitHub <i
                                    class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="https://instagram.com" class="hover:text-white" target="_blank">Instagram <i
                                    class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="https://linkedin.com" class="hover:text-white" target="_blank">LinkedIn <i
                                    class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="https://www.facebook.com/profile.php?id=61556834524837" class="hover:text-white"
                                target="_blank">Facebook <i class="far fa-share-square"></i></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 class="text-xl font-semibold mb-3">Links</h6>
                    <ul class="text-sm text-gray-400 group">
                        <li class="mb-2">
                            <RouterLink to="/" class="hover:text-white">Home</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/about-me" class="hover:text-white">About Me</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/my-skills" class="hover:text-white">My Skills</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/experience" class="hover:text-white">Experience</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/my-projects" class="hover:text-white">My Projects</RouterLink>
                        </li>
                        <li class="mb-2">
                            <RouterLink to="/blogs" class="hover:text-white">Blogs</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 class="text-xl font-semibold mb-3">My Work</h6>
                    <ul class="text-sm text-gray-400 group">
                        <li class="mb-2">
                            <a href="" class="hover:text-white" target="_blank">Medium <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="https://unsplash.com/@lorem__" class="hover:text-white" target="_blank">Unsplash <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="https://unsplash.com/@lorem__" class="hover:text-white" target="_blank">Dev.to <i class="far fa-share-square"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="container mx-auto font-semibold text-center py-6 text-xs text-gray-200 border-t border-gray-700 leading-5">
            &copy; Copyright {{ new Date().getFullYear() }} by Reeze Dev <br class="block md:hidden"> Made with <a
                href="https://vuejs.org/" class="text-[#00DC82]">Vue.js</a> and <a href="https://tailwindcss.com/"
                class="text-[#0EA5E9]">TailwindCSS</a>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped></style>