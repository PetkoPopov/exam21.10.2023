import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import Login from "./Login"


const NavBar = () => {
    const nav = useNavigate()
    function loginHandler() {
        nav('/login')
    }

    function logoutHandler() {
        nav('/logout')
    }

    function registerHandler() {
        nav('/register')
    }
    return (
        <div style={{ background: "darkolivegreen", position: "absolute", top: "0px" }}>


            <button onClick={loginHandler}>Login</button>

            <button onClick={logoutHandler}>Logout</button>
            <button onClick={registerHandler}>register</button>
            <button onClick={()=>{nav('/')}}>home</button>

        </div>
    )
}
export default NavBar