import React from 'react';
import "../../Components/Style/Footer.css";
import logofooter from "../../Assets/logo-footer.png";


function Footer() {
  return (

    <div className="footer">
        <div className="logo-footer">
          <img src={logofooter} alt="logo-footer"/>
        </div>
        <div className= "text-footer">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;