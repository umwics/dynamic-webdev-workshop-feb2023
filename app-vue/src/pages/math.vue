<script setup>
    import Guide from "../components/Guide.vue"
    import { ref, computed } from "vue"
    import { useStore } from "../stores"
    const store = useStore()
    const { setQ1 } = store

    // Calculate score
    let goal = 5
    const correct = ref(0)
    const wrong = ref(0)

    const score = computed(() => {
        let theScore = correct.value - wrong.value
        if(theScore >= goal){
            console.log("Congratulations! You've reached your training goal")
            setQ1(true)
        }
        return theScore
    })
    
    function reset(){ 
        correct.value = 0
        wrong.value = 0
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
            correct.value++
        else
            wrong.value++
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
            Variables that react to change (known as <b>states</b> or <b>refs</b>) are what makes dynamic apps efficient to work with!
        </Guide>
        <div id="problems">
            <div id="scores">
                Score: {{score}}
                Correct: {{correct}}
                Wrong: {{wrong}}
                <button @onClick="reset()">Reset Score</button>
            </div>
            {{currEq.oper1}} + {{currEq.oper2}} = <input id="answer" @keydown="checkAnswerKP" @blur="checkAnswer">
        </div>
    </div>
</template>