import { Link, NavLink } from "react-router"
import "./home.css"
import close from "/close.png"

export default function Settings() {

    return (
        <>
      <Link to="/"><img className = "close" src={close}/></Link>
            <nav className="navigation" >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Profile</NavLink>
                <NavLink to="/about">Travel History</NavLink>
                <NavLink to="/about">Scooter settings</NavLink>
                <NavLink to="/about">Help</NavLink>
                <NavLink to="/about">Privacy Policy</NavLink>
                <NavLink to="/about">Terms & Conditions</NavLink>
            </nav>
        </>
    )
}