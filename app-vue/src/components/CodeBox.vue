<script setup>
    import { computed } from "vue"
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { bgColor, headerClass } = storeToRefs(store)
    
    const headerCode = computed(() => {
        return `<Header backgroundClass="${headerClass.value}" />`
    })
    const bodyCode = computed(() => {
        return `document.body.style="${bgColor.value}"`
    })
    
</script>

<template>
    <div id="codebox">
        <code>{{headerCode}}</code>
        <code>{{bodyCode}}</code>
    </div>
</template>