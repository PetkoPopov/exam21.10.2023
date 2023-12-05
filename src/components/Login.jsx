import NavBar from "./NavBar"

const Login = () => {
    function submitHandler() { }
    return (
        <div>
            <NavBar />

            <h4>LOGIN</h4>
            <form onSubmit={submitHandler}>
                Username:
                <input type="text" className="" name="userName" />
                Password
                <input type="password" className="" name="password" />
                <p>
                    <input type="submit" />
                </p>
            </form>
        </div>
    )
}
export default Login