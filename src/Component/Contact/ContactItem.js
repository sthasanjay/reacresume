import React from 'react'

const ContactItem = ({icon,text1,text2,title}) => {
    return (
        <div className = "contactItem">
         <div className = "contact">
             <img src = {icon} alt = ""/>
             <div className = "right-Item">
                 <h6>{title}</h6>
                 <p>{text1}</p>
                 <p>{text2}</p>
             </div>
         </div>
            
        </div>
    )
}

export default ContactItem
