<template>
    <footer>
        <div class="container mx-auto px-8 py-4 border-t border-gray-700">
            <div class="flex flex-wrap gap-24">
                <div>
                    <div class="flex items-center gap-4">
                        <img src="https://avatars.githubusercontent.com/u/159593076?v=4" alt="" srcset=""
                            class="rounded-full w-20">
                        <span class="text-gray-200 font-semibold">
                            <p>Neil Breen</p>
                            <p class="text-xs font-thin">Junior Web Developer</p>
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
                            <a href="" class="hover:text-white">GitHub <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Instagram <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">LinkedIn <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Facebook <i class="far fa-share-square"></i></a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 class="text-xl font-semibold mb-3">Resources</h6>
                    <ul class="text-sm text-gray-400 group">
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Home</a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">About Me</a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">My Skills</a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Experience</a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">My Projects</a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 class="text-xl font-semibold mb-3">My Work</h6>
                    <ul class="text-sm text-gray-400 group">
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Medium <i class="far fa-share-square"></i></a>
                        </li>
                        <li class="mb-2">
                            <a href="" class="hover:text-white">Unsplash <i class="far fa-share-square"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container mx-auto text-center py-6 text-xs text-gray-200 border-t border-gray-700">
            &copy;{{ new Date().getFullYear() }} Copyright by Neil Breen | Made with <a href="https://vuejs.org/"
                class="hover:text-[#00DC82]">Vue.js</a> and <a href="https://tailwindcss.com/"
                class="hover:text-[#0EA5E9]">TailwindCSS</a>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped></style>