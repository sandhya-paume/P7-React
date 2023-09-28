import React, { useEffect }  from 'react';
import data from '../../../Data/data.json';
import '../../Accommodation_Sheet/Style/Accommodation.css';
import Location from "../../Accommodation_Sheet/Index/Location.jsx";
import ContainerTags from "../../Accommodation_Sheet/Index/ContainerTags.jsx";
import ContainerName from "../../Accommodation_Sheet/Index/ContainerName.jsx";
import ContainerText from "../../Accommodation_Sheet/Index/ContainerText.jsx";
import Slideshow from '../../Accommodation_Sheet/Index/Slideshow.jsx';
import { useNavigate, useParams } from 'react-router-dom';


function Accommodation() {
const { AccommodationId } = useParams();
 // Permet de trouver les données de l'hébergement spécifique en utilisant l'ID
    const desiredData = data.find(entry => entry.id === AccommodationId);

    const navigate = useNavigate(); 
  
    useEffect(() => {
        // Si les données ne sont pas trouvées, redirigez vers la page d'erreur
        if (!desiredData) {
          navigate('/Error');
        }
      }, [desiredData, navigate]);
    
      if (!desiredData) {
        // Si les données ne sont pas trouvées, ne rendez rien ici car nous avons déjà redirigé l'utilisateur
        return null;
      }

    const hostName = desiredData.host.name;
    const [firstName, lastName] = hostName.split(' ');

        return (
            <div className="accommodation">
                <div className="carrousel"><Slideshow images={desiredData.pictures} /></div>
                    <div className="contenu">
                        <ContainerName
                            name={desiredData.title}
                            first_name={firstName} 
                            last_name={lastName} 
                            host_pic={desiredData.host.picture}
                        />
                        <Location
                         location={desiredData.location}
                        />
                        <ContainerTags
                            tags={desiredData.tags}
                            rates={desiredData.rating}
                        />
                        <ContainerText
                            description={desiredData.description}
                            equipments={desiredData.equipments}
                        />
                    </div>
            </div>
     );
 }
 
 export default Accommodation;

 
 
 
 
 
 
    
 /*return (
    <div className="accommodation">

<div className="carrousel">slideshow</div>

        {data.map(data => {
                return (
                    <div >
                    
                    <ContainerName
                    name= {data.title}
                    host_name= {data.host.name}
                    host_pic= {data.host.picture}
                    />
                    <Location  
                    location={data.location}
                    />
                    <ContainerTags
                    tags={data.tags}
                    rates={data.rating}
                    />
            </div>
                )
            })}
    </div>
    )
}


export default Accommodation;*/