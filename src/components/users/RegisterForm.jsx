
import { RegisterCss } from "./RegisterCss"

export const RegisterForm = () => {
    return (


        <div className="main">
            <RegisterCss />
            <div className="one">
                <div className="register">
                    <h3>Create your account</h3>
                    <form id="reg-form">
                        <div>
                            <label for="name">Name</label>
                            <input type="text" id="name" spellcheck="false" placeholder="Shridhar Deshmukh" />
                        </div>
                        <div>
                            <label for="email">Email</label>
                            <input type="text" id="email" spellcheck="false" placeholder="shridhardeshmukh@xyz.com" />
                        </div>
                        <div>
                            <label for="username">Username</label>
                            <input type="text" id="username" spellcheck="false" placeholder="shree33" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div>
                            <label for="password-again">Password Again</label>
                            <input type="password" id="password-again" />
                        </div>
                        <div>
                            <label></label>
                            <input type="submit" id="create-account" className="button" />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    )
}