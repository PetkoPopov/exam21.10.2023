import { Td } from './Td'

export const Tr = (prop) => {
    
    return (
        <>
            {
                prop.arr.map((e) => {
                    return (
                        <tr>
                            <Td col={e} reset={prop.reset}/>
                        </tr>
                    )
                })
            }
        </>
    )
}