import React, { useState } from 'react';
import '../../Components/Style/Collapse.css';


const Collapse = ({ title, description, equipments, about }) => { 
  const [isDescriptionCollapsed, setDescriptionCollapsed] = useState(true);  // Vérification du statut du composant collapsed(true/false)

// Flèches orientée haut/bas
  const arrowUp = "M14.7897 8.50206C15.4591 7.83265 16.5462 7.83265 17.2157 8.50206L27.4979 18.7843C28.1674 19.4538 28.1674 20.5409 27.4979 21.2103C26.8285 21.8797 25.7414 21.8797 25.072 21.2103L16 12.1383L6.92804 21.205C6.25862 21.8744 5.17148 21.8744 4.50206 21.205C3.83265 20.5355 3.83265 19.4484 4.50206 18.779L14.7843 8.49671L14.7897 8.50206Z";
  const arrowDown = "M14.7897 22.2103C15.4591 22.8797 16.5462 22.8797 17.2157 22.2103L27.4979 11.928C28.1674 11.2586 28.1674 10.1715 27.4979 9.50206C26.8285 8.83265 25.7414 8.83265 25.072 9.50206L16 18.574L6.92804 9.50742C6.25862 8.838 5.17148 8.838 4.50206 9.50742C3.83265 10.1768 3.83265 11.264 4.50206 11.9334L14.7843 22.2157L14.7897 22.2103Z";

// Fonction exécuter quand on appuie sur l'une des flèches
  const toggle = () => {
   
    setDescriptionCollapsed(!isDescriptionCollapsed);  // Appelle setDescriptionCollapsed pour la passer en false/true
    
    console.log(" desc "+ isDescriptionCollapsed + "  "); // Phase test

  };

  if (equipments===1) // Si "équipement = 1" alors on créer la liste des équipements (li)
  {
    description = description.map((desc, index) => (
      <li key={index}>{desc}</li>
  ))
  }


return ( // Contenu du composant Collapse en entier
  <div>
      <div className="headers">
        <div className={about === 1 ? "collapseabout" : "collapsedescription"} onClick={toggle}>
          <div className="collapse_title"> {title}</div> 
            <div>  
              <svg  className="collapse_arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clipPath="url(#clip0_193794_85)">
                  <path d={`${isDescriptionCollapsed? arrowDown : arrowUp}`} fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0_193794_85">
                    <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
                    </clipPath>
                </defs>
              </svg>
            </div>
        </div>
            <div className={`${about === 1 ? "aboutdescription" : "description"} ${isDescriptionCollapsed ? 'collapsed' : ''}`}> 
              {equipments === 1 ? <ul className="liste">{description}</ul> : description}
            </div>
      </div>
  </div>
  );
};


export default Collapse;
