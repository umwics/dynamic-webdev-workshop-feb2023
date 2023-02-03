<script>
    import Guide from "../components/Guide.svelte"
    import CodeBox from "../components/CodeBox.svelte"
    import Palette from "../components/Palette.svelte"
</script>

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

<style>
    /* #artistWorkspace{
        
    } */

    #palettes{
        display: flex;
    }
</style>