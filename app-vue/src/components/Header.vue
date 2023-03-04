<script setup>
    import Signal from "./Signal.vue" 
    import eggImg from "../public/egg0.png"
    import { computed } from "vue"
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { q1Complete, q2Complete, q3Complete, hatchStage } = storeToRefs(store)

    const props = defineProps({ 
        backgroundClass: {type: String, required: false, default: "flowers"},
    })

    const sig1 = computed(() => {
        if(hatchStage.value == 4)
            return true
        return false
    })
    const sig2 = computed(() => {
        if(q1Complete.value)
            return true
        return false
    })
    const sig3 = computed(() => {
        if(q2Complete.value)
            return true
        return false
    })
    const sig4 = computed(() => {
        if(q3Complete.value)
            return true
        return false
    })

    function changeActive(){
        /*let activeNav = document.querySelector(".navActive")
        console.log(activeNav)
        activeNav.classList.remove("navActive")
        this.classList.add("navActive")*/
    }
</script>

<template>
    <div id="header" :class="'shadowBox ' + props.backgroundClass">
        <div class="titleSet">
            <div id="logo">
                <img :src="eggImg" :class="'egg' + hatchStage" :alt="'Egg is on hatch stage ' + hatchStage.value" :style="'height:100%;width:100%;'">
            </div>
            <h1 id="title">
                FreeTheEgg
            </h1>
        </div>


        <div id="navs">

            <router-link to="/">
                <div id="homeNav" class="navActive" @click="changeActive">
                    <Signal :on="sig1" />
                    EGG
                </div>
            </router-link>
            <router-link to="/math">
                <div id="mathNav" @click="changeActive">
                    <Signal :on="sig2" />
                    MATH
                </div>
            </router-link>
            <router-link to="/artist">
                <div id="artistNav" @click="changeActive">
                    <Signal :on="sig3" />
                    ARTIST
                </div>
            </router-link>
            <router-link to="/unbox">
                <div id="unboxNav" @click="changeActive">
                    <Signal :on="sig4" />
                    UNBOX
                </div>
            </router-link>

        </div>


        <div id="cityTag" class="city">
            Winnipeg Brrr it's cold today
        </div>
    </div>
</template>