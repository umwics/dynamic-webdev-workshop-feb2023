import Signal from "./Signal" 
import eggImg from "../public/egg0.png"
import { Link } from 'react-router-dom'
import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { setHatchStage, setQ1, setQ2, setQ3 } from "../stores"

export default function Header({ backgroundClass = "flowers" }) {
    const q1Complete = useRecoilValue(setQ1)
    const q2Complete = useRecoilValue(setQ2)
    const q3Complete = useRecoilValue(setQ3)
    const hatchStage = useRecoilValue(setHatchStage)

    const sig1 = useMemo(() => { return hatchStage == 4 })
    const sig2 = useMemo(() => { return q1Complete })
    const sig3 = useMemo(() => { return q2Complete })
    const sig4 = useMemo(() => { return q3Complete })

    return (
        <div id="header" className={"shadowBox " + backgroundClass}>
            <div className="titleSet">
                <div id="logo">
                    <img src={eggImg} className={"egg" + hatchStage} alt={`Egg is on hatch stage ${hatchStage}`} style={{ height:"100%", width:"100%" }} />
                </div>
                <h1 id="title">
                    FreeTheEgg
                </h1>
            </div>
            <div id="navs">
                <Link to="/" id="homeNav">
                    <Signal on={sig1} />
                    EGG
                </Link>
                <Link to="/math" id="mathNav">
                    <Signal on={sig2} />
                    MATH
                </Link>
                <Link to="/artist" id="artistNav">
                    <Signal on={sig3} />
                    ARTIST
                </Link>
                <Link to="/unbox" id="unboxNav">
                    <Signal on={sig4} />
                    UNBOX
                </Link>
            </div>
        </div>
    )
}