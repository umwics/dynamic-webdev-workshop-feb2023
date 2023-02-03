<script setup>
    import { bgColor, headerClass } from "../stores"
    
    let bodyCode, headerCode
    headerClass.subscribe(hClass => {
        headerCode = `<Header backgroundClass="${hClass}" />`
    })
    bgColor.subscribe(bCol => {
        bodyCode = `document.body.styles="${bCol}"`
    })
    
</script>

<template>
    <div id="codebox">
        <code>{headerCode}</code>
        <code>{bodyCode}</code>
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