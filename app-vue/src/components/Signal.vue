<script setup>
    import { computed } from "vue"
    const props = defineProps({ 
        on: {type: Boolean, required: false, default: false},
    })

    // Store ref for currSignal?
    // Reloads at (on != currSignal)
    const signalClass = computed(() => {
        if(props.on)
            return "on"
        return "off"
    })

</script>

<template>
    <div :class="'signal ' + signalClass">
        {{on}}
    </div>
</template>