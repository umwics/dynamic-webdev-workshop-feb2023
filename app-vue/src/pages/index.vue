<script setup>
    import eggImg from "../public/egg0.png"
    import { computed } from "vue"
    import { storeToRefs } from "pinia"
    import { useStore } from "../stores"
    const store = useStore()
    const { setHatchStage } = store
    const { q1Complete, q2Complete, q3Complete, q4Complete, hatchStage } = storeToRefs(store)

    // Calculate how close our egg is to hatching!
    function breakEgg(){
        let progress = 0
        if(q1Complete.value){ progress++ }
        if(q2Complete.value){ progress++ }
        if(q3Complete.value){ progress+=2 }
        if(q4Complete.value){ progress++ } // Skip 4th quest for now, out of time :P
        setHatchStage(progress)
    }

    const message = computed(() => {
        let mssg = ""
        switch(hatchStage.value) {
        case 0:
            mssg = "The egg didn't budge. Go on an adventure until you are strong enough to break the egg!"
            break;
        case 1:
            mssg = "A chink. Not too shabby. Go on more adventures!"
            break;
        case 2:
            mssg = "It cracked a good bit. You're getting there!"
            break;
        case 3:
            mssg = "Woah, so close! You've almost made the egg hatch"
            break;
        case 4:
            mssg = "You have freed the Trophy Chicken!"
            break;
        }
        return mssg
    })

</script>

<template>
    <div id="homePage" class="appPage">
        <div id="theEgg" @click="breakEgg" @keypress="breakEgg">
            <img :src="eggImg" :class="'egg' + hatchStage" :alt="'Egg is on hatch stage ' + hatchStage" :style="'height:100%;width:100%;'">
        </div>
        {{message}}
    </div>
</template>