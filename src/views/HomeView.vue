<template>
    <MainLayout>
        <section id="hero-section">
            <div class="container px-8 mx-auto">
                <div class="flex justify-center">
                    <div class="text-center">
                        <h1
                            class="text-[3.5rem] bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent font-extrabold p-2">
                            Welcome to My Portfolio Web</h1>
                        <p class="text-lg text-gray-400 mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Tempora
                            vero
                            eligendi
                            impedit<br> reiciendis
                            sunt, laboriosam reprehenderit similique enim facilis pariatur!</p>
                        <div class="flex justify-center gap-4 font-semibold mt-10">
                            <a href="">
                                <button class="px-3 py-3 bg-gray-200 rounded-md text-black hover:bg-gray-300"><i
                                        class="fab fa-github"></i>
                                    My
                                    GitHub</button>
                            </a>
                            <a href="">
                                <button
                                    class="px-3 py-3 border border-gray-200 rounded-md text-gray-200 hover:bg-gray-200 hover:text-black duration-500"><i
                                        class="fas fa-book"></i> Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="myself-section">
            <div class="container px-8 mx-auto mt-36 mb-20">
                <div class="flex">
                    <div class="w-full self-start">
                        <h4
                            class="bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent inline-block text-4xl font-extrabold mb-3">
                            let's connect
                            with
                            me</h4>
                        <p class="text-gray-400 pr-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam
                            nihil
                            id
                            quaerat explicabo
                            ratione cum, laborum fuga ut vero, ab perspiciatis magni architecto. Provident delectus
                            blanditiis
                            maxime laudantium nesciunt.</p>
                        <h6
                            class="bg-gradient-to-b from-gray-100 to-gray-300 bg-clip-text text-transparent inline-block font-bold mt-5 text-lg">
                            Follow
                            me on</h6>
                        <div class="flex gap-3">
                            <a href="" class="text-3xl">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="" class="text-3xl">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="" class="text-3xl">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="" class="text-3xl">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                    </div>
                    <div class="w-full self-center">
                        <img src="/public/code.png" alt=""
                            class="shadow-xl shadow-gray-500 rounded-lg cursor-pointer hover:-rotate-6 duration-200">
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
import MainLayout from '@/layout/MainLayout.vue';
</script>

<style lang="scss" scoped></style>