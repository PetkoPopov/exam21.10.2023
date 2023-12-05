import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, Navigate } from 'react-router-dom'
import Login from "./Login"
import {Button} from 'react-bootstrap'


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


            <button onClick={loginHandler} className='btn btn-success'>     Login</button>
            <button onClick={logoutHandler}>    Logout</button>
            <button onClick={registerHandler}>  Register</button>
            <button onClick={() => { nav('/') }}>Home</button>

        </div>
    )
}
export default NavBar