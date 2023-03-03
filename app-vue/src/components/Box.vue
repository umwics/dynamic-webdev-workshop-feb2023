<template>
    <div id="box" class="shiny">
        <slot />
    </div>
</template>

<style scoped>
    #box{
        height: max-content;
        width: max-content;
        margin: 1.5em;
        padding: 1.1em;
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .shiny{
        color: var(--black);
        background: var(--smoothsilver);
        border: 2px solid var(--sage);
        box-shadow: 0 0 0 4px #D9D9D9;
        border-radius: 0.5em;
    }
</style>