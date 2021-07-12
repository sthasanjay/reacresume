import React from 'react';
import ServiceSection from './ServiceSection';
import ServiceData from './ServiceData';

const Service = () => {
    const sData = (value)=>{
        return(
        <ServiceSection
            imgsrc = {value.imgsrc}
            title = {value.title}
            context = {value.context}
        />
        )
    }
  return (<>
  <div className = "service-container">
    {ServiceData.map(sData)}
    </div>
    </>
  );

 
}

export default Service;
