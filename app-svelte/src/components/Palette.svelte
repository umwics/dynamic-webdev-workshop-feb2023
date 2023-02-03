<!-- Displays a palette -->
<script>
    import { bgColor, headerClass, q2Complete } from "../stores"
    export let title = ""
    export let colors = []
    export let patterns = []

    function update(){
        if(title == "Header"){ headerClass.set(this.innerText) }
        if(title == "Body"){ bgColor.set(this.innerText) }

        if($headerClass != "pinkcrystal" && $bgColor != "whitesmoke"){ q2Complete.set(true) }
    }
</script>

<div class="palette">
    <h2> {title} Palette </h2>
    <div class="swatches">
        {#each colors as color}
            <button class="swatch" style="background:{color};" on:click={update}>
                {color}
            </button>
        {/each}
        {#each patterns as pattern}
            <button class="swatch {pattern}" on:click={update}>
                {pattern}
            </button>
        {/each}
    </div>
</div>

<style>
    .palette{
        background: #F6B4C4;
        padding: 2em;
        margin: 2em;
        max-width: 15vw;
    }

    .swatches{
        display: flex;
        flex-wrap: wrap;
    }

    .swatch{
        height: 7em;
        width: 7em;
        margin: 0.5em;
        font-size: 60%;
        text-align: center;
    }

    .swatch:hover{
        cursor: pointer;
    }
</style>