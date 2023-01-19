<script setup>
    const props = defineProps( { text: "Button" } )
</script>

<template>
    <button>{{props.text}}</button>
</template>