<script setup>
    import Box from "../components/Box.vue"
    import Guide from "../components/Guide.vue"
    import { onMounted } from "vue"
    import { useStore } from "../stores"
    const store = useStore()
    const { setQ3 } = store

    // Check if there's something inside the Box
    onMounted(() => { 
		let box = document.getElementById("box")
        if(box.innerHTML.length > 0){
            console.log("There's something in the box!")
            setQ3(true)
        } 
        else { 
            setQ3(false) 
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