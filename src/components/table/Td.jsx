import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"
export const Td = (prop) => {
    return (
        <>
            {
                prop.col.map(e => {
                    return (
                        <td>
                            <Button key={e.val} e={e} />
                        </td>
                    )
                })
            }
        </>

    )

}