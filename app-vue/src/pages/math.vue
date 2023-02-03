<script setup>
    import Guide from "../components/Guide.vue"
    import { q1Complete } from "../stores"

    // Calculate score
    let goal = 5
    let correct = 0
    let wrong = 0
    
    $: score = correct - wrong
    
    $: if(score >= goal){
        console.log("Congratulations! You've reached your training goal")
        q1Complete.set(true)
    }
    
    function reset(){ 
        correct = 0
        wrong = 0
    }

    // Generate math equations
    let currEq = {}
    function makeNewEquation(){
        let newEq = {
            // Gets a range of whole numbers: Math.random() * (max - min) + min;
            oper1: getRandomInt(10,90),
            oper2: getRandomInt(0,10)
        }
        newEq.total = newEq.oper1 + newEq.oper2
        currEq = newEq
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function checkAnswer(){
        let answer = document.getElementById("answer")
        if(parseInt(answer.value) == currEq.total)
            correct++
        else
            wrong++
        answer.value = ""
        makeNewEquation()
    }

    function checkAnswerKP(event){
        if(event.key == "Enter")
            checkAnswer()
		event.stopImmediatePropagation()
    }

    makeNewEquation()

</script>

<template>
    <div id="mathWorkspace" class="appPage">
        <Guide instructions="Try to reach a score of 5!">
            Lesson description. Reactive states or Refs are ilot
        </Guide>
        <div id="problems">
            <div id="scores">
                Score: {score}
                Correct: {correct}
                Wrong: {wrong}
                <button on:click={reset}>Reset Score</button>
            </div>
            {currEq.oper1} + {currEq.oper2} = <input id="answer" on:keydown={checkAnswerKP} on:blur={checkAnswer}>
        </div>
    </div>
</template>

<style scoped>
    #mathWorkspace{
        background: beige;
    }

    #problems, #scores{
        display: flex;
        flex-direction: column;
    }
</style>