<template>
    <header class="w-full fixed z-[2000] top-0">
        <nav class="font-inter font-medium text-sm bg-opacity-30 bg-gray-500 backdrop-blur-sm border-b border-gray-700">
            <div class="py-4 px-8 flex justify-between items-center container mx-auto">
                <a href="">
                    <div class="flex justify-start items-center text-white">
                        <span class="font-pacifico font-medium text-lg">My
                            Portfolio</span>
                    </div>
                </a>
                <div id="toggleTarget"
                    class="bg-gray-800 rounded-md lg:rounded-none py-4 px-5 absolute right-6 top-20 lg:bg-transparent lg:static lg:py-0 lg:px-0 hidden lg:block w-1/2 lg:w-auto">
                    <a href="#home-section"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Home</a>
                    <a href="#about-section"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">About</a>
                    <a href="#experience-section"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Experience</a>
                    <a href="#gallery-section"
                        class="text-gray-400 font-semibold ml-0 my-6 lg:my-0 lg:ml-8 hover:text-white block lg:inline">Gallery</a>
                    <a href="#gallery-section" class="font-semibold ml-0 my-6 lg:my-0 lg:ml-8 block lg:inline">
                        <button class="py-1.5 px-3 bg-gray-200 rounded-md hover:bg-gray-300 text-black">Socialinks</button>
                    </a>
                </div>
                <button id="nav-toggle" class="py-2 px-3 block lg:hidden" type="button"><i
                        class="fas fa-bars text-xl text-black dark:text-white"></i></button>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>