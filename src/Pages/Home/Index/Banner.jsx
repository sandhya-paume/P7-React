import React from 'react';
import "../Style/Banner.css";
import myBanner from "../../../Assets/home_cover.png";

 function Banner() {
  return (
    <div className="banner">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src= {myBanner} alt="banner" class="banner_img"/>
    </div>
  )
}

export default Banner;
