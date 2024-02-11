<template>
    <Navbar></Navbar>
    <div class="mt-36">
        <slot></slot>
    </div>
    <Footer></Footer>
</template>

<script setup>
import Navbar from '@/components/NavbarComponent.vue';
import Footer from '@/components/FooterComponent.vue';
</script>

<style lang="scss" scoped></style>