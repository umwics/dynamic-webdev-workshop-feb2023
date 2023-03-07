import { useRecoilState } from "recoil"
import { setBgColor, setHeaderClass, setQ2 } from "../stores"

export default function Palette({
        title = "",
        colors = [],
        patterns = []
    }){

    const [headerClass, setHeader] = useRecoilState(setHeaderClass)
    const [bgColor, setBackground] = useRecoilState(setBgColor)
    const [q2, setQ2Complete] = useRecoilState(setQ2)

    function update(event){
        if(title == "Header"){ 
            setHeader(event.target.innerText)
            // Check event value as state update is delayed in React till next render
            if(event.target.innerText != "pinkcrystal" && bgColor != "lightgrey"){ setQ2Complete(true) }
        }
        if(title == "Body"){ 
            setBackground(event.target.innerText) 
            if(headerClass != "pinkcrystal" && event.target.innerText != "lightgrey"){ setQ2Complete(true) }
        }
    }
    
    return (
        <div className="palette">
            <h2> {title} Palette </h2>
            <div className="swatches">
                {colors.map((color) => (
                    <button key={color} className="swatch" style={{background:color}} onClick={update}>
                        {color}
                    </button>
                ))}
                {patterns.map((pattern) => (
                    <button key={pattern} className={"swatch " + pattern} onClick={update}>
                        {pattern}
                    </button>
                ))}
            </div>
        </div>
    )
}