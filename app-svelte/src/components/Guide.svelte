<script>
    export let instructions = ""
</script>

<div id="guide">
    <div id="guideContent">
        <slot />
    </div>
    <h2> PAGE QUEST </h2>
    <div id="instructions">
        {@html instructions}
    </div>
</div>