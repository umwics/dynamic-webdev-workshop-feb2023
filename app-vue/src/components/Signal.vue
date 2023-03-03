<script setup>
    import { computed } from "vue"
    const props = defineProps({ 
        on: {type: Boolean, required: false, default: false},
    })

    // Store ref for currSignal?
    // Reloads at (on != currSignal)
    const signalClass = computed(() => {
        if(on)
            return "on"
        return "off"
    })

</script>

<template>
    <div :class="'signal ' + signalClass">
        {{on}}
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