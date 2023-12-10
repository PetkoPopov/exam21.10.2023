import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"
export const Td = ({ btnObj, arr}) => {
    //    console.log(btnObj);//trObj
    useEffect(() => {
        console.log('test UseEffect () from Td  !');
    })

    return (
        <>
            <tr>

                {
                    btnObj.map((btn)=> {// {trObj:{}}
                        
                        return (
                            
                                <Button key={btn.keyIndex} e={btn} arr={arr}/>
                            
                        )
                    })
                }
            </tr>
        </>

    )

}