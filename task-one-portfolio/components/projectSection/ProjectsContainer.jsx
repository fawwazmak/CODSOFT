import React from 'react'
import Project from './Project';
import project1 from "/timbu.png";
import project2 from "/dervac.png";
import project3 from "/countries.png";
import project4 from "/skillup.png";
import project5 from "/goals.png";
import project6 from "/clock.png";

const ProjectsContainer = () => {
    const projects = [
        {
            id: 1,
            projectImg: project1,
            projectInfo: "An elegant online store built with modern web technologies.",
            projectName: "Elegant store",
            projectLink: "https://hng-timbu-cloud-shop.vercel.app/",
        },
        {
            id: 2,
            projectImg: project2,
            projectInfo: "A hub for Dervac fellows to collaborate and access resources.",
            projectName: "Dervac Hub",
            projectLink: "https://hub.dervac.com/fellow",
        },
        {
            id: 3,
            projectImg: project3,
            projectInfo: "A web application providing information about countries.",
            projectName: "Countries Info",
            projectLink: "https://countries-phi-two.vercel.app/",
        },
        {
            id: 4,
            projectImg: project4,
            projectInfo: "A SkillUp page for Innkeeper, offering various skill development resources.",
            projectName: "Innkeeper SkillUp Page",
            projectLink: "https://innkeeper-skillup.vercel.app/",
        },
        {
            id: 5,
            projectImg: project5,
            projectInfo: "A personal project showcasing frontend development goals and achievements.",
            projectName: "My Frontend Goal",
            projectLink: "https://fawwazmak.github.io/HNG-FrontEnd-Goal/",
        },
        {
            id: 6,
            projectImg: project6,
            projectInfo: "A JavaScript and CSS-based clock displaying real-time updates.",
            projectName: "Get Real time",
            projectLink: "https://fawwazmak.github.io/The-CSS-JS-Clock/",
        },
    ];
    
  return (
    <div className='row mt-4 px-5 pb-5'>
        {
            projects.map(item => (
                <div className="col-md-6 col-12">
                    <Project image={item.projectImg} projectLink={item.projectLink} projectName={item.projectName} projectDesc={item.projectInfo} key={item.id} />
                </div>
            ))
        }
    </div>
  )
}

export default ProjectsContainer