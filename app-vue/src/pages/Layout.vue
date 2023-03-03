<script setup>
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
    
    //bgColor.subscribe(color => { document.body.style.background = color })
</script>

<template>
    <section id="layout">
        <Header backgroundClass="flowers" />
            <router-view></router-view>
        <Footer />
    </section>
</template>