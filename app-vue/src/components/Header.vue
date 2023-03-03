<script>
    //import Signal from "./Signal.vue" 
    import eggImg from "../public/egg0.png"
    import Home from "../pages/Index.vue"
    /*import Artist from "../pages/Artist.vue"
    import Math from "../pages/Math.vue"
    import Unbox from "../pages/Unbox.vue"*/
    

    const routes = {
        '/': Home
    }

    export default {
    data() {
        return {
        currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
        return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
            })
    }
    }
    /*import { hatchStage, q1Complete, q2Complete, q3Complete } from "../stores"

    export let backgroundClass = "flowers"
    let sig1, sig2, sig3, sig4
    q1Complete.subscribe(isComplete => { sig2 = isComplete })
    q2Complete.subscribe(isComplete => { sig3 = isComplete })
    q3Complete.subscribe(isComplete => { sig4 = isComplete })
    hatchStage.subscribe(stage => { sig1 = (stage == 4) })*/

    function changeActive(){
        document.querySelector(".navActive").classList.remove("navActive")
        this.classList.add("navActive")
    }
</script>

<!-- <template>
    <div id="header" class="shadowBox {backgroundClass}">
        <div class="titleSet">
            <div id="logo">
                <img src={eggImg} class={"egg" + $hatchStage} alt="Egg is on hatch stage {$hatchStage}" style="height:100%;width:100%;">
            </div>
            <h1 id="title">
                FreeTheEgg
            </h1>
        </div>
        <div id="navs">
            <a id="homeNav" class="navActive" href="/" on:click={changeActive}>
                <Signal on={sig1} />
                EGG
            </a>
            <a id="mathNav" href="/math" on:click={changeActive}>
                <Signal on={sig2} />
                MATH
            </a>
            <a id="artistNav" href="/artist" on:click={changeActive}>
                <Signal on={sig3} />
                ARTIST
            </a>
            <a id="unboxNav" href="/unbox" on:click={changeActive}>
                <Signal on={sig4} />
                UNBOX
            </a>
        </div>
        <div id="cityTag" class="city">
            Winnipeg Brrr it's cold today
        </div>
    </div>
</template> -->

<template>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
</template>

<style scoped>
    #header{
        height: 11vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .titleSet{
        display: flex;
        align-items: center;
    }

    #logo{
        height: 3.5em;
        width: max-content;
        padding-left: 1vw;
    }

    #title{
        padding-left: 1vw;
        color: var(--red);
        display: flex;
        flex-direction: column;
    }

    #navs{
        align-self: flex-end;
        width: 50vw;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-column-gap: 3%;
        font-weight: 800;
    }

    .navActive{
        text-decoration: underline;
    }
</style>