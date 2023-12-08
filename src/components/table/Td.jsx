export const Td = (prop) => {

    return (
        <>
        {
            prop.col.map(e=>{
                return(
                    <td key={e.key}>{e}</td>    
                    )
                })
            }
            </>
        
    )

}