import React from 'react';
import Title from '../Component/About/Title';
import ImageSection from '../Component/About/ImageSection';
import SkillData from '../Component/About/SkillData';
import Service from '../Component/About/Service';


const AboutPage = () => {
    return (
        <div className = "About">
        <Title title = {'About me'} span = {"About me"}/>
         <ImageSection/>  
         <Title title = {'Skill'} span = {'skill'}/>
         <SkillData/> 
        <Title title = {'Service'} span = {'Service'}/>
        <Service/>

        </div>
    )
}

export default AboutPage
