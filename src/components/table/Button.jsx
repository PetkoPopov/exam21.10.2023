import { useEffect, useRef, useState } from "react"
import setNumberClicks from "../game/calcClicks.js"
import { useNavigate } from "react-router-dom"
import { Tr } from "./Tr.jsx"
import setAllowClick from '../game/setAllowClick.js'

export const Button = ({ e, arr }) => {

    const [color, setColor] = useState('')
    const nav = useNavigate()

    // console.log(arr[0].keyIndex)
    // console.log(arr[2].trObj[1].keyIndex);
    // console.log(arr[3].trObj[2].keyIndex);

    const hide = (l) => {

        setTimeout(() => {
            nav(`/table/${l}`)
        }, 1500)
    }

    const btnHandler = () => {

        
        if (e.allowClick) {
            let hlp = setNumberClicks(arr)
            setColor(e.color)
            if (hlp % 2 == 0 && hlp != 0) {
                setAllowClick(arr , false)
                const l = arr.length
                hide(l)
            }//end if 
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