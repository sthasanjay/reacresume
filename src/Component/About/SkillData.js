import React from 'react';
import SkillSection from './SkillSection';
const SkillData = () => {
  return (
    <div className = "skill-container">
       <SkillSection skill = {"Javascript"} progress={"60%"} width= {"60%"}/>
       <SkillSection skill = {"Typescript"} progress={"20%"} width= {"20%"}/>
       <SkillSection skill = {"ReactJs"} progress={"40%"} width= {"40%"}/>
       <SkillSection skill = {"Node Js"} progress={"50%"} width= {"50%"}/>
       <SkillSection skill = {"Python"} progress={"10%"} width= {"10%"}/>
       <SkillSection skill = {"Web Design"} progress={"80%"} width= {"80%"}/>
       <SkillSection skill = {"Web Design"} progress={"80%"} width= {"80%"}/>
       <SkillSection skill = {"UI/UX Design"} progress={"70%"} width= {"70%"}/>
    </div>
  );
}

export default SkillData;