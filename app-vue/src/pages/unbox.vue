<script setup>
    import { q3Complete } from "../stores"
    import Box from "../components/Box.vue"
    import Guide from "../components/Box.vue"

    // Check if there's something inside the Box
    onMount(() => { 
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
	})
</script>

<template>
    <div id="unboxWorkspace" class="appPage">
        <Guide instructions="Put anything inside the box (hint: you must edit the code for this page)">
            Lesson description
        </Guide>
        <Box>
            <!-- Put something inside -->
        </Box>
    </div>
</template>

<style scoped>
    #unboxWorkspace{
        height: 100%;
        width: 100%;
    }
</style>