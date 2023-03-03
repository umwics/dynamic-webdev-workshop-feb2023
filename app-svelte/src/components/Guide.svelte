<script>
    export let instructions = ""
</script>

<div id="guide">
    <div id="guideContent">
        <slot />
    </div>
    <div id="instructions">
        {instructions}
    </div>
</div>