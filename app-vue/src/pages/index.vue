<!-- 
    index.svelte
        Default homepage route '/'
-->

<script setup>
    //import { hatchStage, q1Complete, q2Complete, q3Complete, q4Complete } from "../stores"
    import eggImg from "../public/egg0.png"

    // Calculate how close our egg is to hatching!
    function breakEgg(){
        /*let progress = 0
        if($q1Complete){ progress++ }
        if($q2Complete){ progress++ }
        if($q3Complete){ progress+=2 }
        if($q4Complete){ progress++ } // Skip 4th quest for now, out of time :P
        hatchStage.set(progress)*/
    }

    let message = ""
    /*$: switch($hatchStage) {
        case 0:
            message = "The egg didn't budge. Go on an adventure until you are strong enough to break the egg!"
            break;
        case 1:
            message = "A chink. Not too shabby. Go on more adventures!"
            break;
        case 2:
            message = "It cracked a good bit. You're getting there!"
            break;
        case 3:
            message = "Woah, so close! You've almost made the egg hatch"
            break;
        case 4:
            message = "You have freed the Trophy Chicken!"
            break;
    }*/

</script>

<template>
    <div id="homePage" class="appPage">
        <div id="theEgg" onClick={breakEgg} onKeypress={breakEgg}>
            <img src={eggImg} class="egg0" alt="Egg is on hatch stage 0" style="height:100%;width:100%;">
        </div>
        {message}
    </div>
</template>

<style scoped>
    #homePage{
        padding: 6vh 0 6vh 0;
        grid-template-columns: 30% 50%;
        grid-column-gap: 10%;
    }

    #theEgg{
        height: 8em;
        width: max-content;
        cursor: pointer;
    }
</style>