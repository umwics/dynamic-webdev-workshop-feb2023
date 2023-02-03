<script>
    import Header from "./components/Header.svelte"
    import Footer from "./components/Footer.svelte"
    import "./global.css"
</script>

<div id="page">
	<Header />
	<slot />
    <Footer />
</div>

<style>
    #page{
        display: grid;
        grid-template-rows: auto 1fr auto;
    }
</style>
