import React, { useState } from 'react';
import "../../Accommodation_Sheet/Style/Slideshow.css"; 

const Slideshow = ({ images }) => { //La fonction du composant "Carrousel" qui prend pour seul argument "images"
  const [currentIndex, setCurrentIndex] = useState(0); // L'état "currentIndex" est utilisé pour suivre l'indice de l'image actuellement affichée dans le carrousel. Il est initialisé à 0, ce qui signifie que la première image sera affichée au démarrage du carrousel.

  const prevSlide = () => { // La fonction "précédente" permet de diminuer l'indice de "currentIndex" pour voir les images précédentes
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => { // La fonction "suivante" permet d'augmenter l'indice de "currentIndex" pour voir les images suivantes
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="carrousel-container">
      <button className="arrow-button prev-button" onClick={prevSlide}>
      <svg className="arrows" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 80" fill="none">
        <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
      </svg> 
      </button>

        <img className="img_carrousel" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />

          <div className="pagination">{currentIndex +1}/{images.length}</div> 

      <button className="arrow-button next-button" onClick={nextSlide}>
      <svg xmlns="http://www.w3.org/2000/svg" className="arrows" viewBox="0 0 48 80" fill="none">
        <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
      </svg>
      </button>
    </div>
  );
};

export default Slideshow;
