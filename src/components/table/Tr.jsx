import {Td} from './Td'
import createTr from '../game/createTr.js'

export const Tr = (prop) => {

    const arr = createTr(prop.num);
    return (
<>
        {
            arr.map((e) => {
                return (
                    <tr>
                        <Td col={e} />
                    </tr>
                )
            })
        }
        </>
    )

}