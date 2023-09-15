import React from 'react';
import { Link } from 'react-router-dom';
import "../Error_404/Error.css";

function Error() {
  return (

    <div className="container_error">
        <h1 className="error">404</h1>
        <h2 className="error_msg">Oups! La page que vous demandez n'existe pas.</h2>
        <Link to={"/Accueil"} className="return">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error;
