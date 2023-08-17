import React from "react"
import Home from "./Home";

const Navbar = () => {
    return (
        <>
            <nav className="nav-header">
                <a className="nav-logo" href="">
                    <span className="nav-name1">IVAN</span><span className="nav-name2">VELUZ</span>
                </a>
                <ul>
                    <li className="nav-home"><a href="">Home</a></li>
                    <li className="nav-projects"><a href="">Projects</a></li>
                    <li className="nav-about"><a href="">About Me</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;