import { useEffect, useRef, useState } from "react"
import setNumberClicks from "../game/calcClicks.js"
export const Button = ({ e, reset, arr }) => {

    const [color, setColor] = useState('')
    // const [clickCounter, setClickCounter] = useState(0)
    const [hideColor, setHideColor] = useState(0)
    const resetColor = useRef('')

    useEffect(() => {
        // if (reset) setClickCounter(0)
        resetColor.current = e.color
        setColor('')
    }, [reset, hideColor])
    // setNumberClicks(arr , clickCounter)

    function btnHandler() {
        // setClickCounter(() => clickCounter + 1)
        let hlp = setNumberClicks(arr)
        // console.log(hlp);
        setColor(e.color)

    }
    return (
        <>
            <td>
                <button onClick={btnHandler} style={{ backgroundColor: color }}>
                    {e.number}
                </button>
            </td>
        </>
    )
}