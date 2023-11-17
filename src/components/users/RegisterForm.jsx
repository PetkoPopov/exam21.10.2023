import { RegisterCss } from "./RegisterCss"
import "../../services/userService"
import "react"
import 'react-dom'
import { useState } from "react"
import { create } from "../../services/userService"

export const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handleSubmit")
    }
    function handleUsername(e) {
        setUsername(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handleFirstName(e) {
        setFirstName(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleRepeatPassword(e) {
        setRepeatPassword(e.target.value)
    }
    if (firstName != "" && username != "" && email != "" && password!="") {
        create({ firstName, username, email, password })
    }
    return (
        <div className="main">
            <RegisterCss />
            <div className="one">
                <div className="register">
                    <h3>Create your account</h3>
                    <form id="reg-form">
                        <div>
                            <label htmlFor="firstName">Name</label>
                            <input type="text" id="firstName" value={firstName} name="firstName" onChange={handleFirstName} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" value={email} onChange={handleEmail} name={email} />
                        </div>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" value={username} onChange={handleUsername} name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} onChange={handlePassword} name="password" />
                        </div>
                        <div>
                            <label htmlFor="password-again">Password Again</label>
                            <input type="password" value={repeatPassword} onChange={handleRepeatPassword} name="repeatPassword" />
                        </div>
                        <div>
                            <label></label>
                            <input type="submit" className="button" onClick={handleSubmit} />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}