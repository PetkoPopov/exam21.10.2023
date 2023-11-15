export const create=async(data)=>{

    const response = await fetch(`url`,{
    method:'post',
    headers:{'content/type':'aplycation/json'},
    body:JSON.stringify(data)
})

const result = await response.json()
return response
}

