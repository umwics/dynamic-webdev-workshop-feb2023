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

    function update(event){
        if(props.title == "Header"){ setHeaderClass(event.target.innerText) }
        if(props.title == "Body"){ setBgColor(event.target.innerText) }

        if(headerClass.value != "pinkcrystal" && bgColor.value != "lightgrey"){ setQ2(true) }
    }
</script>

<template>
    <div class="palette">
        <h2> {{title}} Palette </h2>
        <div class="swatches">
            <button v-for="color in colors" class="swatch" :style="`background:${color};`" @click="update($event)">
                {{color}}
            </button>
            <button v-for="pattern in patterns" :class="'swatch ' + pattern" @click="update($event)">
                {{pattern}}
            </button>
        </div>
    </div>
</template>