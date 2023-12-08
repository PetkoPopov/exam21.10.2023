import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NavBar from "../NavBar"
import { register as userRegister } from '../../service/users'



export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const nav = useNavigate()
    function submitHandler(e) {

        e.preventDefault()
        // console.log(username , email ,password ,repeatPassword);

         userRegister({ username, email, password, repeatPassword })
        setUsername('');setEmail('');setPassword('');setRepeatPassword('')
        nav('/login') 
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
    const blur = () => {
        return
        [
            { max: 5, msg: "max 5 simbols" },
            { min: 2, msg: "min 2 simbols" }
        ]
    }

    return (
        <div>
            <NavBar />
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" name="username" onChange={usernameHandler} value={username} />
                Email:
                <input type="text" name="email" onChange={emailHandler} value={email} />
                Password:
                <input type="password" name="password" onChange={passwordHandler} 
                value={password} minLength={3} maxLength={10} />
                RepeatPassword:
                <input type="repeatPassword" name="repeatPassword" onChange={repeatPasswordHandler} value={repeatPassword} />
                <p>
                    <input type="submit" />
                </p>

            </form>
        </div>
    )
}