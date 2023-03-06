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
    
    return (
        <div id="unboxWorkspace" className="appPage">
            <Guide instructions="Put anything inside the box (hint: you must edit the code for this page)">
                You can put something inside something an easy way while maintain how they both look!
            </Guide>
            <Box>
                {/* Put something inside */}
            </Box>
        </div>
    )
}
