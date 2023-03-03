<script setup>
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { setHeaderClass, setBgColor, setQ2 } = store
    const { bgColor, headerClass } = storeToRefs(store)

    const props = defineProps({ 
        title: {type: String, required: false, default: ""},
        colors: {type: Array, required: false, default: []},
        patterns: {type: Array, required: false, default: []}
    })

    function update(){
        if(title == "Header"){ setHeaderClass(this.innerText) }
        if(title == "Body"){ setBgColor(this.innerText) }

        if(headerClass != "pinkcrystal" && bgColor != "whitesmoke"){ setQ2(true) }
    }
</script>

<template>
    <div class="palette">
        <h2> {title} Palette </h2>
        <div class="swatches">
            <button v-for="color in colors" :style="`background:${color};`" @click="update">
                {{color}}
            </button>
            <button v-for="pattern in patterns" :class="'swatch ' + pattern" @click="update">
                {{pattern}}
            </button>
        </div>
    </div>
</template>

<style scoped>
    .palette{
        background: #F6B4C4;
        padding: 2em;
        margin: 2em;
        max-width: 15vw;
    }

    .swatches{
        display: flex;
        flex-wrap: wrap;
    }

    .swatch{
        height: 7em;
        width: 7em;
        margin: 0.5em;
        font-size: 60%;
        text-align: center;
    }

    .swatch:hover{
        cursor: pointer;
    }
</style>