import { useNavigate } from "react-router-dom"

export const Logout = () => {
const nav =useNavigate()
    return (
        <div>
            LOGOUT
            <button onClick={()=>{nav('/login')}}>login</button>
        </div>
    )
}
