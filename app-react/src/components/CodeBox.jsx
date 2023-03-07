import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { setBgColor, setHeaderClass } from "../stores"

export default function CodeBox() {

    const headerClass = useRecoilValue(setHeaderClass)
    const bgColor = useRecoilValue(setBgColor)

    const headerCode = useMemo(() => { return `<Header backgroundClass="${headerClass}" />` })
    const bodyCode = useMemo(() => { return `document.body.style="${bgColor}"` })

    return (
        <div id="codebox">
            <h3> CODEBOX </h3>
            <div id="codeset">
                <code>{headerCode}</code>
                <code>{bodyCode}</code>
            </div>
        </div>
    )
}