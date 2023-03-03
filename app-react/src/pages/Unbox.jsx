import { useEffect } from "react"
//import { q3Complete } from "../stores"
import Box from "../components/Box"
import Guide from "../components/Guide"

export default function Unbox() {
    // Check if there's something inside the Box
    /*onMount(() => { 
		let box = document.getElementById("box")
        if(box.innerHTML.length > 0){
            console.log("There's something in the box!")
            q3Complete.set(true)
            done = true
        } 
        else { 
            q3Complete.set(false)
            done = false 
        }
	})*/
    
    return (
        <div id="unboxWorkspace" className="appPage">
            <Guide instructions="Put anything inside the box (hint: you must edit the code for this page)">
                Lesson description
            </Guide>
            <Box>
                {/* Put something inside */}
            </Box>
        </div>
    )
}
