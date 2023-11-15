import { UserDetails } from "./UserDetails"
export const Home=()=>{
    return(
<div>
Welcome {<UserDetails />}
            <button >Register </button>
            <button >Login</button>
            <button >Logout </button>
</div>

    )
}