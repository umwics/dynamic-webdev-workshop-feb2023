<script setup>
    import { computed } from "vue"
    const props = defineProps({ 
        on: {type: Boolean, required: false, default: false},
    })

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