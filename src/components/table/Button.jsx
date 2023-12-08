import { useState } from "react"

export const Button=({e})=>{
const [color,setColor]=useState('')
return(
    <>
        <button onClick={()=>setColor(e.color)} style={{backgroundColor:color}}>
            {e.number}
        </button>
    </>
)
}