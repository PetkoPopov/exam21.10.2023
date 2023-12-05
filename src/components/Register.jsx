import { useState } from "react"

import NavBar from "./NavBar"
import { register as userRegister} from '../service/register'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    function submitHandler(e) {
        e.preventDefault()
        // console.log(username , email ,password ,repeatPassword);
    userRegister({ username, email, password, repeatPassword })
    }
    function usernameHandler(e) {
        setUsername(e.target.value)
    }
    function emailHandler(e) {
        setEmail(e.target.value)
    }
    function passwordHandler(e) {
        setPassword(e.target.value)
    }
    function repeatPasswordHandler(e) {
        setRepeatPassword(e.target.value)
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" name="username" onChange={usernameHandler} />
                Email:
                <input type="text" name="email" onChange={emailHandler} />
                Password:
                <input type="password" name="password" onChange={passwordHandler} />
                RepeatPassword:
                <input type="repeatPassword" name="repeatPassword" onChange={repeatPasswordHandler} />
                <p>
                    <input type="submit" />
                </p>

            </form>
        </div>
    )
}