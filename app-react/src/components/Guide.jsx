export default function Guide({ instructions = "", children }) {
    return (
        <div id="guide">
        <div id="guideContent">
            {children}
        </div>
        <div id="instructions">
            {instructions}
        </div>
    </div>
    )
}