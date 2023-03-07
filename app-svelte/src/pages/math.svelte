<script>
    import Guide from "../components/Guide.svelte"
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

<div id="mathWorkspace" class="appPage">
    <Guide instructions="<b>Try to reach a score of 5!</b>">
        If a user does something, you may want another element or variable to react to that action. It may be generating a new input box or updating the game score.
        Svelte handles this the simplest way - through <b>declaring a Javascript constant or variable</b> inside a <code>&lt;script&gt;</code> tag and then render it as HTML enclosing that in brackets!
        <code>
            <br> &lt;script&gt;
            <br> &nbsp;&nbsp; let correct = 0
            <br> &nbsp;&nbsp; let wrong = 0
            <br> &lt;/script&gt;
            <br>
            <br> &lt;p&gt; 
            <br> &nbsp;&nbsp; Number of correct: &#123;correct&#125;
            <br> &nbsp;&nbsp; Number of wrong: &#123;wrong&#125;
            <br> &lt;/p&gt;
        </code> 

        <br><br>
        In Svelte, you can have a variable update or a condition launch automatically when other variables change through a <code>$</code> prefix. 
        For this modified Math game, we add up correct answers but there's a penalty of minus one for wrong answers. We elegantly compute and display the score this way.
        <code>
            <br> &lt;script&gt;
            <br> &nbsp;&nbsp; $: score = correct - wrong
            <br> &lt;/script&gt;
            <br>
            <br> &lt;h2&gt; 
            <br> &nbsp;&nbsp; Total Score: &#123;score&#125;
            <br> &lt;/h2&gt;
        </code> 


        <br><br>
        Training gains you experience. What sure fire way can make an adventurer stronger than training better? 
        Drill the math. The Trophy chicken shall be proud.
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