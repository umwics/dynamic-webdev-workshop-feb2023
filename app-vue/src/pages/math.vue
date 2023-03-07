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
        else if(answer.value.length > 0)
            wrong.value++
        else
            return
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
        <Guide instructions="<b>Try to reach a score of 5!</b>">
            If a user does something, you may want another element or variable to react to that action. It may be generating a new input box or updating the game score.
            Vue handles this through declaring a <b>ref</b>, which is displayable as HTML by enclosing in double brackets!
            <code>
                <br> &lt;script setup&gt;
                <br> &nbsp;&nbsp; const correct = ref(0)
                <br> &nbsp;&nbsp; const wrong = ref(0)
                <br> &lt;/script&gt;
                <br>
                <br> &lt;p&gt; 
                <br> &nbsp;&nbsp; Number of correct: &#123;&#123;correct&#125;&#125;
                <br> &nbsp;&nbsp; Number of wrong: &#123;&#123;wrong&#125;&#125;
                <br> &lt;/p&gt;
            </code> 

            <br><br>
            In Vue, a variable can update (via a function callback) when other variables change by declaring a <b>computed</b>. 
            For this modified Math game, we add up correct answers but there's a penalty of minus one for wrong answers. We elegantly compute and display the score this way.
            <br><sub>Note: If using a ref in JS code, append .value</sub>
            <code>
                <br> &lt;script&gt;
                <br> &nbsp;&nbsp; const score = computed(() => {
                <br> &nbsp;&nbsp;&nbsp;&nbsp; correct.value - wrong.value
                <br> &nbsp;&nbsp; })
                <br> &lt;/script&gt;
                <br>
                <br> &lt;h2&gt; 
                <br> &nbsp;&nbsp; Total Score: &#123;&#123;score&#125;&#125;
                <br> &lt;/h2&gt;
            </code> 


            <br><br>
            Training gains you experience. What sure fire way can make an adventurer stronger than training better? 
            Drill the math. The Trophy chicken shall be proud.
        </Guide>
        <div id="problems">
            <div id="scores">
                <div>
                    Score: {{score}}
                </div>
                <div>
                    Correct: {{correct}}
                    <br> Wrong: {{wrong}}
                    <br> <button @onClick="reset()">Reset Score</button>
                </div>
            </div>
            <div id="questionSet">
                <div>{{currEq.oper1}} + {{currEq.oper2}} = </div>
                <input id="answer" @keydown="checkAnswerKP" @blur="checkAnswer">
            </div>
        </div>
    </div>
</template>