import { useEffect, useRef, useState } from "react"
import setNumberClicks from "../game/calcClicks.js"
import { useNavigate } from "react-router-dom"
import { Tr } from "./Tr.jsx"

export const Button = ({ e, arr }) => {

    const [color, setColor] = useState('')
    const nav = useNavigate()
    
    // console.log(arr[0].keyIndex)
    // console.log(arr[2].trObj[1].keyIndex);
    // console.log(arr[3].trObj[2].keyIndex);
    function btnHandler() {

        let hlp = setNumberClicks(arr)
        setColor(e.color)
        // console.log(arr[0].keyIndex);
        if (hlp % 3 == 0 && hlp != 0) {
            console.log(`form button handler ${hlp}`);
            let l = arr.length
            nav(`/table/${l}`)
            // return (<>{ <Tr arr={arr} key={1} /> }</> )


        }

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