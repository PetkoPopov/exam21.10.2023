import { useEffect, useRef, useState } from 'react'
import { Td } from './Td'

export const Tr = ({ arr, reset }) => {

    // console.log(arr);
    return (
        <>
             {

                arr.map((e) => {//{keyIndex:1,trObj:{}}
                    // console.log(e.trObj);
                    return (
                        
                             <Td reset={reset} key={e.keyIndex} btnObj={e.trObj} arr={arr}/>
                        
                    )
                })
            }
        </>
    )
}