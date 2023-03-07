import Guide from "../components/Guide"
import { useRecoilState } from "recoil"
import { useState, useMemo, useEffect } from "react"
import { setQ1 } from "../stores"

export default function MathQuest() {

    const [q1, setQ1Complete] = useRecoilState(setQ1)

    // Calculate score
    let goal = 5
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    const score = useMemo(() => { return correct - wrong })

    useEffect(() => {
        if(score >= goal){
            console.log("Congratulations! You've reached your training goal")
            setQ1Complete(true)
        }
    })
    
    
    function reset(){ 
        setCorrect(0)
        setWrong(0)
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
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function checkAnswer(){
        let answer = document.getElementById("answer")
        if(parseInt(answer.value) == currEq.total)
            setCorrect(correct+1)
        else if(answer.value.length > 0)
            setWrong(wrong+1)
        else
            return
        answer.value = ""
        makeNewEquation()
    }

    function checkAnswerKP(event){
        if(event.key == "Enter")
            checkAnswer()
    }

    makeNewEquation()

    let lecture = `
        If a user does something, you may want another element or variable to react to that action. It may be generating a new input box or updating the game score.
        React handles this through declaring a <b>useRef</b> or <b>useState tuple</b>, where the left tuple is the value and the right tuple is the setter function to update its left part. A useRef or useState value is displayable as HTML by enclosing in brackets!
        <code>
            <br> const [correct, setCorrect] = useState(0)
            <br> const [wrong, setWrong] = useState(0)
            <br>
            <br> return (
            <br> &nbsp; &lt;p&gt; 
            <br> &nbsp;&nbsp; Number of correct: &#123;correct&#125;
            <br> &nbsp;&nbsp; Number of wrong: &#123;wrong&#125;
            <br> &nbsp; &lt;/p&gt;
            <br> )
        </code> 

        <br><br>
        In React, a variable can update (via a function callback) when other variables change by declaring a <b>useMemo</b>.
        For this modified Math game, we add up correct answers but there's a penalty of minus one for wrong answers. We elegantly compute and display the score this way.
        <code>
            <br> const score = useMemo(() => {
            <br> &nbsp;&nbsp; correct - wrong
            <br> })
            <br>
            <br> return (&lt;h2&gt; Total Score: &#123;score&#125; &lt;/h2&gt;)
        </code> 


        <br><br>
        Training gains you experience. What sure fire way can make an adventurer stronger than training better? 
        Drill the math. The Trophy chicken shall be proud.`

    return (
        <div id="mathWorkspace" className="appPage">
            <Guide instructions="<b>Try to reach a score of 5!</b>">
                {lecture}
            </Guide>
            <div id="problems">
                <div id="scores">
                    <div>
                        Score: {score}
                    </div>
                    <div>
                        Correct: {correct}
                        <br/> Wrong: {wrong}
                        <br/> <button onClick={reset}>Reset Score</button>
                    </div>
                </div>
                <div id="questionSet">
                    <div>{currEq.oper1} + {currEq.oper2} = </div>
                    <input id="answer" onKeyDown={checkAnswerKP} onBlur={checkAnswer} />
                </div>
            </div>
            
        </div>
    )
}