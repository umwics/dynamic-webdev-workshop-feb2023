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
    <Guide instructions="Put anything inside the box (hint: you must edit the code for this page)">
        You can put something inside something an easy way while maintain how they both look!
    </Guide>
    <Box>
        <!-- Put something inside -->
    </Box>
</div>