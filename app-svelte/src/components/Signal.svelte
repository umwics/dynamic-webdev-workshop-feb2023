<script>
    export let on = false

    let currSignal = on
    let signalClass = "off"

    $: if (on != currSignal){
        if(on) {signalClass = "on"}
        else {signalClass = "off"}
    }
</script>

<div class="signal {signalClass}">
    {on}
</div>