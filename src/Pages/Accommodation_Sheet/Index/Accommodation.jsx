import React from 'react';
import data from '../../../Data/data.json';
import '../../Accommodation_Sheet/Style/Accommodation.css';
import Location from "../../Accommodation_Sheet/Index/Location.jsx";
import ContainerTags from "../../Accommodation_Sheet/Index/ContainerTags.jsx";
import ContainerName from "../../Accommodation_Sheet/Index/ContainerName.jsx";
import ContainerText from "../../Accommodation_Sheet/Index/ContainerText.jsx";
import { useParams } from 'react-router-dom';


function Accommodation() {

    const { AccommodationId } = useParams();

     const desiredData = data.find(entry => entry.id === AccommodationId);
           
     return (
         <div className="accommodation">
             <div className="carrousel">slideshow</div>
             <div>
                 <ContainerName
                     name={desiredData.title}
                     host_name={desiredData.host.name}
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