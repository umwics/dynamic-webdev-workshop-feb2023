import Signal from "./Signal" 
import eggImg from "../public/egg0.png"
//import { hatchStage, q1Complete, q2Complete, q3Complete } from "../stores"

export default function Header({ backgroundClass = "flowers" }) {
    let hatchStage = 0
    let sig1, sig2, sig3, sig4
    /*onMount(() => { 
        q1Complete.subscribe(isComplete => { sig2 = isComplete })
        q2Complete.subscribe(isComplete => { sig3 = isComplete })
        q3Complete.subscribe(isComplete => { sig4 = isComplete })
        hatchStage.subscribe(stage => { sig1 = (stage == 4) })
    })*/

    function changeActive(){
        document.querySelector(".navActive").classList.remove("navActive")
        this.classList.add("navActive")
    }
    return (
        <div id="header" className={"shadowBox {backgroundClass}"}>
            <div className="titleSet">
                <div id="logo">
                    <img src={eggImg} className={"egg" + hatchStage} alt={`Egg is on hatch stage ${hatchStage}`} style={{ height:"100%", width:"100%" }} />
                </div>
                <h1 id="title">
                    FreeTheEgg
                </h1>
            </div>
            <div id="navs">
                <a id="homeNav" className="navActive" href="/" onClick={changeActive}>
                    <Signal on={sig1} />
                    EGG
                </a>
                <a id="mathNav" href="/math" onClick={changeActive}>
                    <Signal on={sig2} />
                    MATH
                </a>
                <a id="artistNav" href="/artist" onClick={changeActive}>
                    <Signal on={sig3} />
                    ARTIST
                </a>
                <a id="unboxNav" href="/unbox" onClick={changeActive}>
                    <Signal on={sig4} />
                    UNBOX
                </a>
            </div>
            <div id="cityTag" className="city">
                Winnipeg Brrr it's cold today
            </div>
        </div>
    )
}