import React from 'react';
import Collapse from '../../../Components/Index/Collapse.jsx';


export default function ContainerText({description, equipments}) {
    return (
<div>       
    <div className="details">
        <div className="CollapseBox">
        <Collapse title="Description"
         description={description} />
    
         <div className="Spacer">&nbsp;</div>
         <Collapse title="Equipements"
         description={equipments}
         equipments={1}/>
    </div></div>
</div> 
    )
}