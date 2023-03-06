import Guide from "../components/Guide"
import CodeBox from "../components/CodeBox"
import Palette from "../components/Palette"

export default function Artist() {
    return (
        <div id="artistWorkspace" className="appPage">
            <Guide instructions = "Change the header and background by passing a new prop">
                Lesson description
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