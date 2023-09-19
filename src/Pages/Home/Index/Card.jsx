import React from 'react';
import '../Style/Card.css';
import { Link } from 'react-router-dom';

export default function Card({id, title, cover}) {
  return (
    <Link to={`/accommodation/${id}`} className="thumb" >
          <div className="card">
              <img src={cover} alt={title} />
          </div>
          
          <div className="flat_title">
              <p className="flat_name">{title}</p> 
          </div>    
    </Link>
  )
}

