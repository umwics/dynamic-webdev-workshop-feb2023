<script setup>
    export let on = false

    let currSignal = on
    let signalClass = "off"

    $: if (on != currSignal){
        if(on) {signalClass = "on"}
        else {signalClass = "off"}
    }
</script>

<template>
    <div class="signal {signalClass}">
        {on}
    </div>
</template>

<style scoped>
    .signal{
        width: 2em;
        height: 2em;
        overflow: hidden;
        border-radius: 50%;
    }

    .off{
        color: var(--red);
        background: var(--red);
    }
    .on{
        color: mediumseagreen;
        background: mediumseagreen;
    }
</style>