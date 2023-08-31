import React from 'react';
import "../../Pages/About/About.css";
import aboutBanner from "../../Assets/about_cover.png";





function About() {
  return (
    <div className="about_banner">
        <h1>A Propos</h1>
        <img src= {aboutBanner} alt="about_banner" class="about_banner_img"/>
    </div>
  );
}

export default About;