import React, { useState } from 'react';
import "../../Accommodation_Sheet/Style/Carrousel.css"; 

const Carrousel = ({ images }) => {

  console.log("images : "+images);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carrousel-container">
      <button className="arrow-button prev-button" onClick={prevSlide}>
        &lt; Précédent
      </button>
      <img className="img_carrousel" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button className="arrow-button next-button" onClick={nextSlide}>
        Suivant &gt;
      </button>
    </div>
  );
};

export default Carrousel;