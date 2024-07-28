import React from 'react';
import { LiaHtml5 } from "react-icons/lia";
import { IoLogoJavascript } from "react-icons/io";

const Skill = ({SkillIcon: Icon , SkillTitle, SkillDesc, skillMeasure}) => {
  return (
    <div style={{backgroundColor: "#508C9B"}} className='h-100 rounded-5 px-4 pt-3 pb-1'>
      <Icon size={80} />
      <h3 className='mt-3'>{SkillTitle}</h3>
      <p className='fw-bolder fs-4 text-info border border-1 border-light rounded-2 px-4 py-2 my-3'>Proficiency: {skillMeasure}</p>
      <p className='text-body-tertiary'>{SkillDesc}</p>
    </div>
  )
}

export default Skill