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
        <h2> PAGE QUEST </h2>
        <div v-html="instructions" id="instructions"/>
    </div>
</template>