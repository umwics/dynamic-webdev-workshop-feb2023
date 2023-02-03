export default function Guide( { instructions = "" } ) {
    return (
        <div id="guide">
        <div id="guideContent">
            <slot />
        </div>
        <div id="instructions">
            {instructions}
        </div>
    </div>
    )
}


// <style>
//     #guide{
//         height: 80%;
//         width: 20vw;
//         color: var(--red);
//         background-color: rgba(255,255,255,0.8);
//         border-radius: 1em;
//         padding: 1.5em;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//     }

//     #guideContent{
//         height: 90%;
//         overflow-y: scroll;
//     }

//     #instructions{
//         margin: 0.5em 0 3em 0;
//     }

//     .done
// </style>