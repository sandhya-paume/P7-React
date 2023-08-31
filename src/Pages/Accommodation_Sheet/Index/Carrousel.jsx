import React, { useState } from 'react';
import "../../Accommodation_Sheet/Style/Carrousel.css"; 

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <button className="arrow-button prev-button" onClick={prevSlide}>
        &lt; Précédent
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="arrow-button next-button" onClick={nextSlide}>
        Suivant &gt;
      </button>
    </div>
  );
};

export default Carousel;
