import { useEffect, useRef, useState } from "react"
import setNumberClicks from "../game/calcClicks.js"
import { useNavigate } from "react-router-dom"
import { Tr } from "./Tr.jsx"
import setAllowClick from '../game/setAllowClick.js'
import setBtnClicked from "../game/setBtnClickedTrue.js"
import checkMatch from '../game/checkMatch.js'
import setAllButtonstoFalse from "../game/setAllButtonsToFalse.js"
export const Button = ({ e, arr, index }) => {

    const [color, setColor] = useState('')
    const nav = useNavigate()


    const btnHandler = () => {
        if (e.allowClick && !e.isClicked) {
            let countClicks = setNumberClicks(arr)
            setBtnClicked( arr , index , true )
            // console.log(arr);
            setColor(e.color)
            if (countClicks % 2 == 0 && countClicks != 0) {
                setAllowClick(arr, false)
                checkMatch(arr, e)
                setAllButtonstoFalse(arr)
                
                           const tmo = setTimeout(
                    () => {
                        clearTimeout(tmo)
                        const l = arr.length
                        nav(`/table/${l}`)
                    }, 2500
                )
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

