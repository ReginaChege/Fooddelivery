import React from "react";
import './style.css'

const Navbar=()=>{
    return(
        <nav className="nav">
            <span className="foodie">Foodie</span>
            <a href="home" className="home">Home</a>
            <a href="offer">Offer</a>
            <a href="sevice">Service</a>
            <a href="menu">Menu</a>
            <a href="about us">About Us</a>
            <a href="login">Login</a>
            <button>Sign up</button>
        </nav>
    )
}

export default Navbar;