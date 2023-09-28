import React, { useState } from 'react';
import "../../Accommodation_Sheet/Style/Slideshow.css"; 

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  // Permet de vérifier s'il n'y a qu'une seule image dans le carrousel
  const isSingleImage = images.length === 1;

  return (
    <div className="carrousel-container">
      {/* Condition pour afficher ou masquer les flèches */}
      {!isSingleImage && (
        <button className="arrow-button prev-button" onClick={prevSlide}>
          <svg className="arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" fill="none">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </svg> 
        </button>
      )}

      <img className="img_carrousel" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />

      {/* Condition pour afficher ou masquer le compteur */}
      {!isSingleImage && (
        <div className="pagination">{currentIndex + 1}/{images.length}</div>
      )}

      {/* Condition pour afficher ou masquer les flèches */}
      {!isSingleImage && (
        <button className="arrow-button next-button" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" className="arrows" viewBox="0 0 48 80" fill="none">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Slideshow;

