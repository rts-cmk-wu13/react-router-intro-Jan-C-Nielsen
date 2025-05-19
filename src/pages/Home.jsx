import { Link, NavLink } from "react-router"
import "./home.css"
import logo from "/logo.png"
import illustration from "/illustration.svg"
import arrow from "/get_started.png"

export default function Home() {

    return (
        <>
            <div className="home">
                <img src = {logo}/>
                <h1>Your scooter in 
                one app</h1>
                <img src = {illustration}/>
                <p>Everything you need to know about your scooter is available here in your app</p>
                <Link to="/myscooter"><img className="arrow" src={arrow}/></Link>
            </div>
        </>
    )
}