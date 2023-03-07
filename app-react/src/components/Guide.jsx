export default function Guide({ instructions = "", children }) {
    return (
        <div id="guide">
        <div dangerouslySetInnerHTML={{__html:children}} id="guideContent" />
        <h2> PAGE QUEST </h2>
        <div dangerouslySetInnerHTML={{__html:instructions}} id="instructions"/>
    </div>
    )
}