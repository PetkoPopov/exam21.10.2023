import { useNavigate, useParams } from "react-router-dom"
import { Tr } from "./Tr"
import './table.css'
import { useState, useEffect } from "react"
import createTr from '../game/createTr.js'

export const Table = () => {
    const [reset, setReset] = useState(false)
    const [arr,setArr]=useState([])
    const number = useParams()

    var arrBtn = []
    useEffect(() => {
        arrBtn = createTr(number.number)
        setArr(arrBtn)
        setReset(false)
    })
    function handlerNewGame() { }
    function handlerTryAgain() { setReset(true) }

    // console.log(arr);
    return (
        <>
            <table>
                <Tr arr={arr} reset={reset}/>
            </table>
            <button type="buton" onClick={handlerNewGame}>NewGame</button>
            <button type="buton" onClick={handlerTryAgain}>TryAgain</button>

        </>
    )
}