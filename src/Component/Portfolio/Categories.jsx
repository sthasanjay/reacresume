import React from 'react';
import {NavLink} from 'react-router-dom';

const Categories = ({filter, categories}) => {
  return (
    <div  className = "button">
    {
     categories.map((cat, i)=>{
        return <button type = "button" className = "btn-port" onClick = {()=>filter(cat)} key= {i}>{cat}</button>
     })

     }
    </div>
  );
}

export default Categories;
