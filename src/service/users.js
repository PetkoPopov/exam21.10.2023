import { Navigate } from "react-router-dom"
export const register = async ( /*{username, email, password, repeatPassword }*/ userData) => {
    // const { username, email, password, repeatPassword } = userData;
    // console.log( username, email, password, repeatPassword );
    const user = await fetch('http://localhost:3030/data/users/register', {

        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    const res = await user.json()
    return res
}

export const login = async (userData) => {

    const token = localStorage.getItem('accessToken');

     await fetch('http://localhost:3030/data/users/login', {
        method:"POST",
        body:JSON.stringify(userData),
        'X-Authorization': token
        }).then(u=>console.log(u.email))       
}

