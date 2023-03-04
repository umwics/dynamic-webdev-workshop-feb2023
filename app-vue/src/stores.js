/*
 * stores.js
 *    Application level state management
 */

import { defineStore } from "pinia"
import { ref } from "vue"

export const useStore = defineStore('store', () => {

    // Integer: current stage of egg hatching. From fully unhatched at 0, to hatched at 3
    const hatchStage = ref(0)
    function setHatchStage(newStage){ hatchStage.value = newStage }

    // Boolean: Quest 1 (Math) complete
    const q1Complete = ref(false)
    function setQ1(bool){ q1Complete.value = bool }

    // Boolean: Quest 2 (Artist) complete
    const q2Complete = ref(false)
    function setQ2(bool){ q2Complete.value = bool }

    // Boolean: Quest 3 (Box) complete
    const q3Complete = ref(false)
    function setQ3(bool){ q3Complete.value = bool }

    // Boolean: Quest 4 complete
    const q4Complete = ref(false)
    function setQ4(bool){ q4Complete.value = bool }

    // Integer: Current number of correct math answers
    const correct = ref(0)
    function setCorrect(num){ correct.value = num }

    // Integer: Current number of wrong math answers
    const wrong = ref(0)
    function setWrong(num){ wrong.value = num }

    // String: Body color of page
    const bgColor = ref("whitesmoke")
    function setBgColor(color){ 
        bgColor.value = color
        document.body.style.background = color
    }

    // String: Header class
    const headerClass = ref("pinkcrystal")
    function setHeaderClass(hClass){ headerClass.value = hClass }


    // Export refs setter functions
    return {
        hatchStage, setHatchStage,
        q1Complete, setQ1,
        q2Complete, setQ2,
        q3Complete, setQ3,
        q4Complete, setQ4,
        correct, setCorrect,
        wrong, setWrong,
        bgColor, setBgColor,
        headerClass, setHeaderClass
    }
})