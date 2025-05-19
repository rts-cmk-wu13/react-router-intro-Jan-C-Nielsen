import { Link, NavLink } from "react-router"
import "./navigation.css"

export default function About() {

    return (
        <>
            <nav className="navigation" >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <h1>About</h1>
            <Link to="/">Back to home</Link>

        </>
    )
}