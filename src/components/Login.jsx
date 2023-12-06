import { login as userLogin } from "../service/users"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [allUsers, setAllUsers] = useState([])
    useEffect(
        () => {
            fetch('http://localhost:3030/jsonstore/users')
                .then(res => res.json())
                .then(data => setAllUsers(data))
        
            }, []
    )

    const  submitHandler= async(event)=> {
        event.preventDefault()
        const ourUser = await userLogin({ username, password })
        console.log(ourUser);
    }

    function usernameHandler(e) { setUsername(e.target.value) }
    function passwordHandler(e) { setPassword(e.target.value) }

    return (
        <div>
            <NavBar />

            <h4>LOGIN</h4>
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" className="" name="userName" value={username} onChange={usernameHandler} />
                Password
                <input type="password" className="" name="password" value={password} onChange={passwordHandler} />
                <p>
                    <input type="submit" />
                </p>
            </form>
        </div>
    )
}
export default Login