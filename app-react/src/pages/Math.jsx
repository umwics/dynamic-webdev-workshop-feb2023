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
        else
            setWrong(wrong+1)
        answer.value = ""
        makeNewEquation()
    }

    function checkAnswerKP(event){
        if(event.key == "Enter")
            checkAnswer()
    }

    makeNewEquation()

    return (
        <div id="mathWorkspace" className="appPage">
            <Guide instructions="Try to reach a score of 5!">
                Variables that react to change (known as <b>states</b> or <b>refs</b>) are what makes dynamic apps efficient to work with!
            </Guide>
            <div id="problems">
                <div id="scores">
                    Score: {score}
                    Correct: {correct}
                    Wrong: {wrong}
                    <button onClick={reset}>Reset Score</button>
                </div>
                {currEq.oper1} + {currEq.oper2} = <input id="answer" onKeyDown={checkAnswerKP} onBlur={checkAnswer} />
            </div>
        </div>
    )
}