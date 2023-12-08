import { useState } from "react"

import '../table/table.css'
import { useNavigate } from "react-router-dom"

export const PlayGame = () => {
    const [number, setNum] = useState(0)
    const nav = useNavigate()
    function submitHandler(e) {
        e.preventDefault()
        setNum(0)
        nav(`/table/${number}`)
    }
    return (
        <>
            <p>PlayGame</p>

            <form>
                <input type="number" name="number" value={number} onChange={e => setNum(e.target.value)} />
                <input type="submit" onClick={submitHandler} />
            </form>
        </>
    )
}