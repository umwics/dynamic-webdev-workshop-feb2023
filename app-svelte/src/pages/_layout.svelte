<!-- routify:options preload="proximity" -->
<script>
    import { onMount } from "svelte"
    import Header from "../components/Header.svelte"
    import Footer from "../components/Footer.svelte"
    import { bgColor, headerClass } from "../stores"

    // Style body and Header
    onMount(() => { 
        bgColor.subscribe(color => {
            document.body.style.background = color
        })
    })
</script>

<section id="layout">
    <Header backgroundClass={$headerClass} />
    <slot />
    <Footer />
</section>

<style>
    #layout{
        height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>