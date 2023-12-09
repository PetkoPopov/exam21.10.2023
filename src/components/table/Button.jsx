import { useEffect, useRef, useState } from "react"

export const Button=({e,reset})=>{
const [color,setColor]=useState('')
const resetColor = useRef('')
useEffect(()=>{
resetColor.current=e.color
setColor('')
},[reset])
return(
    <>
        <button onClick={()=>setColor(e.color)} style={{backgroundColor:color}}>
            {e.number}
        </button>
    </>
)
}