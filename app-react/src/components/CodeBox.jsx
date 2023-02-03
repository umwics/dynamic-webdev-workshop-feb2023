import { bgColor, headerClass } from "../stores"

export default function CodeBox() {

    let bodyCode, headerCode
    headerClass.subscribe(hClass => {
        headerCode = `<Header backgroundclassName="${hClass}" />`
    })
    bgColor.subscribe(bCol => {
        bodyCode = `document.body.styles="${bCol}"`
    })

    let styles = {
        backgroundColor: "slategray",
        color: "white",
        padding: "1.5em",
        display: "flex",
        justifyContent: "space-between"
    }

    return (
        <div id="codebox" styles={styles}>
            <code>{headerCode}</code>
            <code>{bodyCode}</code>
        </div>
    )
}