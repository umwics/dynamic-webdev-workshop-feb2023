<script setup>
    import { computed } from "vue"
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { bgColor, headerClass } = storeToRefs(store)
    
    const headerCode = computed(() => {
        return `<Header backgroundClass="${headerClass}" />`
    })
    const bodyCode = computed(() => {
        return `document.body.styles="${bgColor}"`
    })
    
</script>

<template>
    <div id="codebox">
        <code>{{headerCode}}</code>
        <code>{{bodyCode}}</code>
    </div>
</template>

<style scoped>
    #codebox{
        background-color: slategray;
        color: white;
        padding: 1.5em;
        display: flex;
        justify-content: space-between;
    }
</style>