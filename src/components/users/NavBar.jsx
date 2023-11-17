import { NavbarHeader } from "./NavbarHeader"

export function NavBar() {
    return (
        <div>
            <NavbarHeader />
            <nav>
                <a href='/register'>Register</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    )
}