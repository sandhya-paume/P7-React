import React from 'react';
import Collapse from '../../../Components/Index/Collapse.jsx';


export default function ContainerText({description, equipments}) {
    return (
<div>       
    <div className="details">
        <Collapse title="Description"
         description={description} />
    <div className="Spacer"></div>
         <Collapse title="Equipements"
         description={equipments}
         equipments={1}/>
    </div>
</div> 
    )
}