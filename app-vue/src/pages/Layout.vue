<script setup>
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { headerClass } = storeToRefs(store)
</script>

<template>
    <section id="layout">
        <Header :backgroundClass="headerClass" />
            <router-view></router-view>
        <Footer />
    </section>
</template>