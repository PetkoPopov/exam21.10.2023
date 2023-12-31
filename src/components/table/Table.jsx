import { useNavigate, useParams } from "react-router-dom"
import { Tr } from "./Tr"
import './table.css'
import { useState, useEffect } from "react"
import createTr from '../game/createTr.js'
import { v4 } from 'uuid'
import shuffleArr from "../game/shuffleArr.js"
export const Table = () => {
    const [reset, setReset] = useState(false)
    const [arr, setArr] = useState([])
    const number = useParams()

    var arrBtn = []
    useEffect(() => {
        console.log('useEffect() from TAbLE !');
        let arrShuffle= shuffleArr(Math.floor(number.number*number.number)/2)
        arrBtn = createTr(number.number,arrShuffle)
        
        setArr(arrBtn)
        setReset(false)
    }, [reset])
    function handlerNewGame() { }
    function handlerTryAgain() { setReset(true) }

    // console.log(arr);
    return (
        <>
            <table>
                <thead>
                    <Tr arr={arr} reset={reset} key={v4()} />
                </thead>
            </table>
            <button type="buton" onClick={handlerNewGame}>NewGame</button>
            <button type="buton" onClick={handlerTryAgain}>TryAgain</button>

        </>
    )
}