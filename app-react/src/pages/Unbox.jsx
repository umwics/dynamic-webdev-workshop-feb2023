import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { setQ3 } from "../stores"
import Box from "../components/Box"
import Guide from "../components/Guide"

export default function Unbox() {

    const [q3, setQ3Complete] = useRecoilState(setQ3)

    // Check if there's something inside the Box
    useEffect(() => {
        let box = document.getElementById("box")
        if(box.innerHTML.length > 0){
            console.log("There's something in the box!")
            setQ3Complete(true)
        } 
        else
            setQ3Complete(false)
    })

    let lecture = `
        <b>Slot</b> is an area defined inside a component where you can put in <i>basically, anything</i>.. &nbsp a text? an image? a form? another 3 Components? You can!

        <br><br>
        React doesn't define slots directly. Rather, you can access all elements nested within component tags by declaring a <b>children</b> prop. You can take those children and render them anywhere inside the component as wished.

        <br><br>
        This lecture paragraph is passed through a slot, rather than hardcoded into Guide's HTML then conditionally hidden.
        Slot decouples the content from the container, which makes managing information easier and more elegant.

        <br><br>
        We have prepared a box to the right of this Guide. This box has an empty slot. A wise being revealed that we must offer a gift to the Egg for the Trophy chicken to come out. 
        But the only problem: it has nothing in it. You must offer something, anything.`
    
    return (
        <div id="unboxWorkspace" className="appPage">
            <Guide instructions="Put anything inside the box (hint: you must edit the code for this page)">
                {lecture}
            </Guide>
            <Box>
                {/* Put something inside the box. You can replace this comment with your own text or any component of your choice */}
                {/* Wall Maria
                <Box> Wall Rose <Box>
                        Wall Sheena
                    </Box>
                </Box> */}
            </Box>
        </div>
    )
}
