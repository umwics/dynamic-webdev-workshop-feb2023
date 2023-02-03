<script setup>
    import Guide from "../components/Guide.vue"
    import CodeBox from "../components/CodeBox.vue
    import Palette from "../components/Palette.vue"
</script>

<template>
    <div id="artistWorkspace" class="appPage">
        <Guide instructions = "Change the header and background by passing a new prop">
            Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>
            Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>
            Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>Lesson description<br>
        </Guide>
        <div id="paletteView">
            <div id="palettes">
                <Palette title="Header" patterns={["pinkcrystal","slateleaves","goldswirls","flowers"]} />
                <Palette title="Body" colors={["lightcyan","beige","whitesmoke","lightgrey"]} />
            </div>
            <CodeBox />
        </div>
    </div>
</template>

<style scoped>
    #palettes{
        display: flex;
    }
</style>