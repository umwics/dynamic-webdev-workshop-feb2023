<script>
    import { onMount } from "svelte"
    import { q3Complete } from "../stores"
    import Box from "../components/Box.svelte"
    import Guide from "../components/Guide.svelte"

    // Check if there's something inside the Box
    onMount(() => { 
		let box = document.getElementById("box")
        if(box.innerHTML.length > 0){
            console.log("There's something in the box!")
            q3Complete.set(true)
        } 
        else { 
            q3Complete.set(false)
        }
	})
</script>

<div id="unboxWorkspace" class="appPage">
    <Guide instructions="<b>Put something inside the Box.</b> <br><br>Hint: open and edit the code for this page at <code>src/pages/unbox.svelte</code>">
        <b>Slot</b> is an area defined inside a component where you can put in <i>basically, anything</i>.. &nbsp a text? an image? a form? another 3 Components? You can!

        <br><br>
        Slots allow you to insert elements into another element, while keeping full control of how the container element appears and scales.

        <br><br>
        This lecture paragraph is passed through a slot, rather than hardcoded into Guide's HTML then conditionally hidden.
        Slot decouples the content from the container, which makes managing information easier and more elegant.

        <br><br>
        We have prepared a box to the right of this Guide. This box has an empty slot. A wise being revealed that we must offer a gift to the Egg for the Trophy chicken to come out. 
        But the only problem: it has nothing in it. You must offer something, anything.
    </Guide>
    <Box>
        <!-- Put something inside the box. You can replace this comment with your own text or any component of your choice-->
        <!-- Wall Maria
        <Box> Wall Rose <Box>
                Wall Sheena
            </Box>
        </Box> -->
    </Box>
</div>