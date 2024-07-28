import React from 'react';

const Project = ({image, projectDesc, projectName, projectLink}) => {
  return (
    <div className="project-container px-4 pt-4 rounded-3 position-relative">
        <figure>
            <img src={image} alt="Project image" className='w-100' />

            <a href={projectLink} target="_blank">
                <figcaption className='project-cap text-light rounded-5 px-3 py-2 w-100'>
                    <h2>{projectName}</h2>
                    <p>{projectDesc}</p>
                </figcaption>
            </a>

        </figure>
    </div>
  )
}

export default Project