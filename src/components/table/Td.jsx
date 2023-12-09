import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"
export const Td = (prop) => {
    return (
        <>
            {
                prop.col.map(e => {
                    return (
                        <td>
                            {/* {prop.reset && <Button  key={e.val} e={e}/>} */}
                            <Button key={e.val} e={e} reset={prop.reset}/>
                        </td>
                    )
                })
            }
        </>

    )

}