<!-- Box.svelte -->

<div id="box">
    <slot />
</div>

<style>
    #box{
        height: max-content;
        width: max-content;
        margin: 1.5em;
        padding: 1.1em;
        display: grid;
        justify-items: center;
        align-items: center;
    }
</style>