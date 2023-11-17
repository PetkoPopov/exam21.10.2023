import { RegisterCss } from "./RegisterCss"

export const LoginForm = () => {
    return (

        <div class="main">
            <RegisterCss />
            <div className="one">
                <div className="register">
                    <form id="reg-form">

                        <div>
                            <label for="username">Username</label>
                            <input type="text" id="username" spellcheck="false" placeholder="shree33" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div>
                            <label >LogIn</label>
                            <input type="submit" id="login" className="button" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}