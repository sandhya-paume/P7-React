import React from "react";
import logo from "../../Assets/kasa-logo.png";
import "../Style/Header.css";
import { Link } from "react-router-dom"

function Header() {
  return(
    <nav className="header">

      <div className="header_logo">
          <img src={logo} alt="logo"/>
      </div>

        <div className="nav">
              <Link to={"/Accueil"} className="nav_home">Accueil</Link>
              <Link to={"/A Propos"} className="nav_about">A Propos</Link>
        </div>
    </nav>
  )
}

export default Header;
