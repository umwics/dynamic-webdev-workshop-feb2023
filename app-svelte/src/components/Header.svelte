<script>
    import { onMount } from "svelte"
    import Signal from "./Signal.svelte" 
    import eggImg from "../public/egg0.png"
    import { hatchStage, q1Complete, q2Complete, q3Complete } from "../stores"

    export let backgroundClass = "flowers"
    let sig1, sig2, sig3, sig4
    onMount(() => { 
        q1Complete.subscribe(isComplete => { sig2 = isComplete })
        q2Complete.subscribe(isComplete => { sig3 = isComplete })
        q3Complete.subscribe(isComplete => { sig4 = isComplete })
        hatchStage.subscribe(stage => { sig1 = (stage == 4) })
    })
</script>

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
        <a id="homeNav" href="/">
            <Signal on={sig1} />
            EGG
        </a>
        <a id="mathNav" href="/math">
            <Signal on={sig2} />
            MATH
        </a>
        <a id="artistNav" href="/artist">
            <Signal on={sig3} />
            ARTIST
        </a>
        <a id="unboxNav" href="/unbox">
            <Signal on={sig4} />
            UNBOX
        </a>
    </div>
</div>