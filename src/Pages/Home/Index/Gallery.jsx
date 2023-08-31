import React from 'react';
import data from '../../../Data/data.json';
import '../Style/Gallery.css';
import Card from "../../Home/Index/Card.jsx";

function Gallery() {
    
  return (
    <div className="gallery">
      {data.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </div>
    )
}


export default Gallery;