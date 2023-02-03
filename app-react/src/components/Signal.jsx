export default function Signal({on = false}) {

    let currSignal = on
    let signalClass = "off"

    $: if (on != currSignal){
        if(on) {signalClass = "on"}
        else {signalClass = "off"}
    }

    return (
        <div className="signal {signalClass}">
            {on}
        </div>
    )
}



{/* <style>
    .signal{
        width: 2em;
        height: 2em;
        overflow: hidden;
        border-radius: 50%;
    }

    .off{
        color: var(--red);
        background: var(--red);
    }
    .on{
        color: mediumseagreen;
        background: mediumseagreen;
    }
</style> */}