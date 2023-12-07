import { login as userLogin } from "../service/users"
import NavBar from "./NavBar"
import { useEffect, useState } from "react"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email,setEmail] =useState('')
    const [allUsers, setAllUsers] = useState([])
    useEffect(
        () => {
            fetch('http://localhost:3030/data/users')
                .then(res => res.json())
                .then(data => setAllUsers(data))
                .catch(() => { })
        }, []
    )

    const submitHandler = async (event) => {
        event.preventDefault()
        userLogin({ username,email, password })
    }

    function usernameHandler(e) { setUsername(e.target.value) }
    function passwordHandler(e) { setPassword(e.target.value) }
    const emailHandler=(e)=>     {setEmail(e.target.value)}
    return (
        <div>
            <NavBar />

            <h4>LOGIN</h4>
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" name="userName" value={username} onChange={usernameHandler} />
                Email
                <input type="text" name="email" value={email} onChange={emailHandler} />
                Password
                <input type="password"  name="password" value={password} onChange={passwordHandler} />
                <p>
                    <input type="submit" />
                </p>
            </form>
        </div>
    )
}
export default Login