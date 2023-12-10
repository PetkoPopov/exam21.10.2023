import { useEffect, useRef, useState } from 'react'
import { Td } from './Td'

export const Tr = ({ arr }) => {
    useEffect(()=>{
        console.log('test UseEffect () from Tr Component !');
    })
   
    return (
        <>
            {

                arr.map((e) => {//{keyIndex:1,trObj:{}}
                    // console.log(e.trObj);
                    return (

                        <Td key={e.keyIndex} btnObj={e.trObj} arr={arr} />

                    )
                })
            }
        </>
    )
}