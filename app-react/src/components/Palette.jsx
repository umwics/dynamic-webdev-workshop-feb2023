//import { bgColor, headerClass, q2Complete } from "../stores"
import "../global.css"

export default function Palette({
    title = "",
    colors = [],
    patterns = []
    }){

    function update(){
        //if(title == "Header"){ headerClass.set(this.innerText) }
        //if(title == "Body"){ bgColor.set(this.innerText) }

        //if($headerClass != "pinkcrystal" && $bgColor != "whitesmoke"){ q2Complete.set(true) }
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
                    <button key={pattern} className={"swatch " + {pattern}} onClick={update}>
                        {pattern}
                    </button>
                ))}
            </div>
        </div>
    )
}