import React from "react";
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Card from "./components/CardFlat.jsx";

import "./App.css";

function App() {
  return (
    <div className="Main_container">
     
    
        <Navbar/>
        <Banner/>
        <Card/>
       
    </div>
  );
}

export default App