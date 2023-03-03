<script setup>
    const props = defineProps({ 
        instructions: {type: String, required: false, default: ""}
    })
</script>

<template>
    <div id="guide">
        <div id="guideContent">
            <slot />
        </div>
        <div id="instructions">
            {{instructions}}
        </div>
    </div>
</template>