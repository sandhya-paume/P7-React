import React from 'react';
import "../../Pages/About/About.css";
import aboutBanner from "../../Assets/about_cover.png";
import Collapse from '../../Components/Index/Collapse.jsx';


function About() {
  return (
    <div className="about">
        <div className="about_banner">
            <img src= {aboutBanner} alt="about_banner" class="about_banner_img"/>
        </div>
            <div className="about_rules">                    
              <Collapse title="Fiabilité"
               about={1}
              description= "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>

              <Collapse title="Respect"
              about={1}
              description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>

              <Collapse title="Service"
              about={1}
              description="Nos équipes se tiennent à votre disposition pour vous fournir une éxpérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>

              <Collapse title="Sécurité"
              about={1}
              description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standars sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
    </div>
  );

  
}

export default About;