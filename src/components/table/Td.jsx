import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"
import setAllowClick from "../game/setAllowClick"
export const Td = ({ btnObj, arr}) => {
    //    console.log(btnObj);//trObj
    useEffect(() => {
        console.log('test UseEffect () from Td  !');
        setAllowClick(arr, true)
        
    })

    return (
        <>
            <tr>

                {
                    btnObj.map((btn)=> {// {trObj:{}}
                        
                        return (
                            
                        <Button key={btn.keyIndex} e={btn} arr={arr} index={btn.keyIndex}/>
                            
                        )
                    })
                }
            </tr>
        </>

    )

}