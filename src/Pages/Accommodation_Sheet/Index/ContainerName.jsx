import React from 'react';

export default function ContainerName({name, host_name, host_pic}) {
    return (

<div className="container_name">
    <div className="name">{name}</div>
    <div className="host_name">{host_name}</div>
    <div className="host_pic">
      <img className="img_host" src={host_pic} alt='host'/>
    </div>
</div>
    )
}