import React from 'react'
import Skill from './Skill'
import { LiaHtml5 } from "react-icons/lia";
import { GrCss3 } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

const SkillsContainer = () => {
    const skills = [
        {
            id: 1,
            SkillIcon: LiaHtml5,
            SkillName: "HTML",
            SkillMeasure: "92%",
            SkillDesc: "Proficient in creating well-structured, semantic web pages and applications using HTML5 standards. Experienced in developing responsive layouts and integrating with CSS and JavaScript for dynamic content.",
        },
        {
            id: 2,
            SkillIcon: GrCss3,
            SkillName: "CSS",
            SkillMeasure: "84%",
            SkillDesc: "Skilled in designing responsive and visually appealing layouts. Proficient in using modern CSS3 features such as Flexbox and Grid. Experienced in writing modular and reusable CSS",
        },
        {
            id: 3,
            SkillIcon: IoLogoJavascript,
            SkillName: "JAVASCRIPT",
            SkillMeasure: "72%",
            SkillDesc: "Experienced in writing clean, efficient, and maintainable code in vanilla JavaScript and ES6+. Proficient in manipulating the DOM, handling events, and integrating with APIs. Familiar with modern JavaScript frameworks and libraries.",
        },
        {
            id: 4,
            SkillIcon: RiBootstrapLine,
            SkillName: "BOOTSTRAP",
            SkillMeasure: "70%",
            SkillDesc: "Proficient in using Bootstrap to quickly develop responsive and mobile-first web pages. Experienced in customizing Bootstrap components and utilizing its grid system for complex layouts.",
        },
        {
            id: 5,
            SkillIcon: SiTailwindcss,
            SkillName: "TAILWIND CSS",
            SkillMeasure: "70%",
            SkillDesc: "Skilled in using Tailwind CSS to rapidly create custom designs without leaving the HTML. Experienced in utility-first CSS and creating responsive, reusable UI components with Tailwind.",
        },
        {
            id: 6,
            SkillIcon: FaReact,
            SkillName: "REACT",
            SkillMeasure: "70%",
            SkillDesc: "Proficient in building dynamic and interactive web applications using React. Experienced in managing state with hooks and context, handling side effects, and using React Router for navigation. Familiar with component-based architecture and best practices.",
        },
        {
            id: 7,
            SkillIcon: FaVuejs,
            SkillName: "VUE",
            SkillMeasure: "65%",
            SkillDesc: "Experienced in developing single-page applications using Vue.js. Proficient in using Vue Router for navigation, Vuex for state management, and building reusable components. Familiar with Vue CLI for project setup and configuration.",
        },
        {
            id: 8,
            SkillIcon: FaGithub,
            SkillName: "GITHUB",
            SkillMeasure: "70%",
            SkillDesc: "Proficient in using GitHub for version control and collaboration. Experienced in creating and managing repositories, branching, merging, and handling pull requests. Familiar with Git workflows and best practices for code management.",
        },
        {
            id: 9,
            SkillIcon: FaFigma,
            SkillName: "FIGMA",
            SkillMeasure: "86%",
            SkillDesc: "Proficient in using Figma for designing and prototyping user interfaces. Experienced in creating interactive prototypes, collaborating on design projects, and translating designs into functional web interfaces."
        }
    ]


  return (
    <div className='row g-3 px-5 pt-4 pb-5'>
        {
            skills.map(item => (
                <div className='col-lg-4 col-md-6 col-12'>
                    <Skill key={item.id} skillMeasure={item.SkillMeasure} SkillIcon={item.SkillIcon} SkillTitle={item.SkillName} SkillDesc={item.SkillDesc} />
                </div>
            ))
        }
    </div>
  )
}

export default SkillsContainer