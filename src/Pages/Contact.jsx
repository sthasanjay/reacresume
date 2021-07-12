import React from 'react'
import ContactItem from '../Component/Contact/ContactItem'
import phone from '../img/contact.svg';
import email from '../img/emailme.svg';

import location from '../img/location.svg';
import Title from '../Component/About/Title';
const Contact = () => {
    return (
        <div>
        <div className = "title">
        <Title title ={'Contact'} span = {'Contact'}/>
        </div>
        <div className = "contactPage">
            <div className = "map-sec">
            <iframe src="https://www.google.com/maps/d/embed?mid=1YeV-CBqH1wi1X9q1UyoHyl-5ais" width="540" height="427"></iframe>
            </div>
            <div className = "contact-sec">
            <ContactItem icon = {phone} text1 = {"+977-9845782586"} text2 = {"+057-521233"} title = {"phone"}/>
         <ContactItem icon = {email} text1= {"+977-9845782586"} text2 = {"+057-521233"} title = {"email"}/>
         <ContactItem icon = {location} text1 = {"+977-9845782586"} text2 = {"+057-521233"} title = {"location"}/>
            </div>
        </div>

        </div>
    )
}

export default Contact
