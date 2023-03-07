import { useRecoilValue, useRecoilState } from "recoil"
import { useMemo } from "react"
import eggImg from "../public/egg0.png"
import { setHatchStage, setQ1, setQ2, setQ3, setQ4 } from "../stores"

export default function Index() {

    // useRecoilState enables reading and writing to a store
    // useRecoilValue is good enough if you only need to read from a store
    const q1Complete = useRecoilValue(setQ1)
    const q2Complete = useRecoilValue(setQ2)
    const q3Complete = useRecoilValue(setQ3)
    const q4Complete = useRecoilValue(setQ4)
    const [hatchStage, setStage] = useRecoilState(setHatchStage)

    // Calculate how close our egg is to hatching!
    function breakEgg(){
        let progress = 0
        if(q1Complete){ progress++ }
        if(q2Complete){ progress++ }
        if(q3Complete){ progress+=2 }
        if(q4Complete){ progress++ } // Skip 4th quest for now, out of time :P
        setStage(progress)
    }

    const message = useMemo(() => {
        let mssg = ""
        switch(hatchStage) {
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

    return (
        <div id="homePage" className="appPage">
            <div id="incubator">
                <div id="theEgg" onClick={breakEgg} onKeyDown={breakEgg}>
                    <img src={eggImg} className={"egg" + hatchStage} alt={"Egg is on hatch stage " + hatchStage} style={{height: "100%", width:"100%"}} />
                </div>
                <h2> {message} </h2>
            </div>
        </div>
    )
}