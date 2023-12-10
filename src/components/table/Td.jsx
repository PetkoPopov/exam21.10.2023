import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"
export const Td = ({ btnObj, reset ,arr}) => {
    //    console.log(btnObj);//trObj

    return (
        <>
            <tr>

                {
                    btnObj.map((btn)=> {// {trObj:{}}
                        
                        return (
                            
                                <Button key={btn.keyIndex} e={btn} reset={reset} arr={arr}/>
                            
                        )
                    })
                }
            </tr>
        </>

    )

}