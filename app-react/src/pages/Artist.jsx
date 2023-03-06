import Guide from "../components/Guide"
import CodeBox from "../components/CodeBox"
import Palette from "../components/Palette"

export default function Artist() {
    return (
        <div id="artistWorkspace" className="appPage">
            <Guide instructions = "Change the header and background by passing a new prop">
            Our app is made of components, building pieces of our site known by a name. On any page or layout, you can import components and use them indefinitely. The bar on top is called a Header. That bar below is a Footer. The where this text is right now is a Guide. You can change how our website looks by playing with a Palette. You can observe what's the code behind-the-scenes that run behind the scenes in real time in real time with the CodeBox!
            </Guide>
            <div id="paletteView">
                <div id="palettes" style={{ display: "flex" }}>
                    <Palette title="Header" patterns={["pinkcrystal","slateleaves","goldswirls","flowers"]} />
                    <Palette title="Body" colors={["lightcyan","beige","whitesmoke","lightgrey"]} />
                </div>
                <CodeBox />
            </div>
        </div>
    )
}