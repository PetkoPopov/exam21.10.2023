import NavBar from "./NavBar"

export const Register = () => {
    function submitHandler() { }
    return (
        <div>
            <NavBar />
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" name="username" />
                Email:
                <input type="text" name="email" />
                Password:
                <input type="password" name="password" />
                RepeatPassword:
                <input type="repeatPassword" name="repeatPassword" />
                <p>
                    <input type="submit" />
                </p>

            </form>
        </div>
    )
}