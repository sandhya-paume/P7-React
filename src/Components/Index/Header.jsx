import React from "react";
import logo from "../../Assets/kasa-logo.png";
import "../Style/Header.css";
import { Link } from "react-router-dom"

function Header() {
  const currentPath = window.location.pathname;

  // Divisez le chemin de la route en segments en utilisant le caractère '/'
  const pathSegments = currentPath.split('/');

  // Obtenez le premier segment, qui devrait être la première partie de l'URL
  const firstPartOfURL = pathSegments[1];

  console.log("Première partie de l'URL : " + firstPartOfURL);
  

  
  return(
    <nav className="header">

      <div className="header_logo">
          <img src={logo} alt="logo"/>
      </div>

        <div className="nav">
              <Link to={"/Accueil"} className={`${firstPartOfURL === "Accueil" ? "nav_home_underlined" : "nav_home"}`}>Accueil</Link>
              <Link to={"/A Propos"} className={`${firstPartOfURL === "A%20Propos" ? "nav_about_underlined" : "nav_about"}`}>A Propos</Link>
        </div>
    </nav>
  )
}

export default Header;
