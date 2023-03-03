<script setup>
    import Header from "../components/Header.vue"
    import Footer from "../components/Footer.vue"
    //import { bgColor, headerClass } from "../stores"
    //bgColor.subscribe(color => { document.body.style.background = color })
</script>

<section id="layout">
    <Header backgroundClass="flowers" />
    <slot />
    <Footer />
</section>

<style scoped>
    #layout{
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>