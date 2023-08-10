import React from 'react';
import  "./Card.css";

function CardFlatGen(image, title) {
  return (
    <div className="card">
      <img className="card_inside" src= {image} alt="Appartement cosy"></img>
           <p className='flat_name'>{title}</p>
    </div>
  );
};

function CardFlat()
{
  return (
CardFlatGen("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg","Appartement cosy")
);
};


export default CardFlat;