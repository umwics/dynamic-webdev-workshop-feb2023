//import { bgColor, headerClass } from "../stores"

export default function CodeBox() {

    let bodyCode, headerCode
    /*headerClass.subscribe(hClass => {
        headerCode = `<Header backgroundclassName="${hClass}" />`
    })
    bgColor.subscribe(bCol => {
        bodyCode = `document.body.styles="${bCol}"`
    })*/

    return (
        <div id="codebox">
            <code>{headerCode}</code>
            <code>{bodyCode}</code>
        </div>
    )
}