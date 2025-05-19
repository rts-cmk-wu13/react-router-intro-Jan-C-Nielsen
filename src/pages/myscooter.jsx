import { Link, NavLink } from "react-router"
import "./navigation.css"
import profile_and_hamburger from "/profile_and_hamburger.png"
export default function myscooter(){

    return(
        <>
        
         <Link to="/settings"><img src={profile_and_hamburger}/></Link>

        </>
    )
}
