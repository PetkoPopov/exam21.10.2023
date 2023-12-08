import { useNavigate, useParams } from "react-router-dom"
import { Tr } from "./Tr"
import './table.css'

export const Table = () => {
    const nav = useNavigate()
    function clickHandler() {
      nav(`/table/${n.number}`)
    }
    const n = useParams()
    
    return (
        <>
            <table>
                <Tr num={n.number} />
            </table>
            <button type="buton" onClick={clickHandler}>NewGame</button>
        </>
    )
}