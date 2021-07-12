import React from 'react';

const ServiceSection = (props) => {
  return (
    
    <div className = "ServiceSection">
    <div className = "service">
      <div className = "service-content">
        <img src = {props.imgsrc} alt = "" style = {{width:"25%"}}/>
        <h5 className = "s-title">{props.title}</h5>
        <p>{props.context}</p>
      </div>
    </div>
      
    </div>
   
 
  );
}

export default ServiceSection;

