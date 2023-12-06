export const register = async ( /*{username, email, password, repeatPassword }*/ userData) => {
    // const { username, email, password, repeatPassword } = userData;
    // console.log( username, email, password, repeatPassword );
    const user = await fetch('http://localhost:3030/jsonstore/users',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(userData)
    })
    const res = await user.json()
    return res
}

export const login=async (userData)=>{

    const user = fetch('http://localhost:3030/jsonstore/users')
      .then(res=>res.json())
      .then(data=>data)
      
    // console.log(Object.);
    return user
}
