import React from "react";
import logo from "../assets/kasa-logo.png";
import "./Navbar.css";

function Navbar() {
  return(
    <nav className="navbar">
        <div className="navbar_logo">
            <img src={logo} alt="logo"/>
        </div>
        <div>Accueil</div>
        <div>A propos</div>
    </nav>
  )
}

export default Navbar;
