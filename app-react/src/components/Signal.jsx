import { useMemo } from "react"

export default function Signal({ on = false }) {

    const signalClass = useMemo(() => {
        if(on)
            return "on"
        return "off"
    })

    return (
        <div className={"signal " + signalClass}>
            {on}
        </div>
    )
}