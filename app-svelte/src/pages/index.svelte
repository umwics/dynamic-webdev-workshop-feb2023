<script>
    import { hatchStage, q1Complete, q2Complete, q3Complete, q4Complete } from "../stores"
    import eggImg from "../public/egg0.png"

    // Calculate how close our egg is to hatching!
    function breakEgg(){
        let progress = 0
        if($q1Complete){ progress++ }
        if($q2Complete){ progress++ }
        if($q3Complete){ progress+=2 }
        if($q4Complete){ progress++ } // Skip 4th quest for now, out of time :P
        hatchStage.set(progress)
    }

    // "Reactfully" change the message being displayed based on how the egg appears
    let message = ""
    $: switch($hatchStage) {
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
    }

</script>

<div id="homePage" class="appPage">
    <div id="incubator">
        <div id="theEgg" on:click={breakEgg} on:keypress={breakEgg}>
            <img src={eggImg} class={"egg" + $hatchStage} alt="Egg is on hatch stage {$hatchStage}" style="height:100%;width:100%;">
        </div>
        <h2> {message} </h2>
    </div>
</div>