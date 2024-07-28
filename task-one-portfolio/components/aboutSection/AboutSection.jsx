import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineGithub } from "react-icons/ai";
import { GoDownload } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import heroImage from "/heroImage.png";

const AboutSection = () => {
  return (
    <div className='d-flex flex-column flex-md-row align-items-center justify-content-between px-5 gap-5 py-5 about-me'>
        <div className='about-left'>
            <h2>I am Fawwaz</h2>
            <h1 className='identity'>Web Designer</h1>
           <div className='d-none d-md-block'>
                <p>I'm focused on building user-friendly application. I am passionate about simplifying code and writing semantic markUps</p>

                <div className='d-flex gap-3'>
                    <a href="https://docs.google.com/document/d/1zsdmpfxcSLxCwu8qh9M1lQfNebeNzI_32LNJaual628/edit?usp=sharing" target='__blank'>
                        <div className='rounded-pill px-4 py-2 d-flex align-items-center gap-2 cv-button'>Download CV <GoDownload /></div>
                    </a>
                    
                    <a href="https://web.facebook.com/makinde.fawwaz/" target='__blank'>
                        <div className='social-link rounded-circle d-flex align-itmes-center justify-content-center p-3'><FaFacebookF /></div>
                    </a>

                    <a href="https://www.linkedin.com/in/fawwaz-makinde-56b776288/" target='__blank'>
                        <div className='social-link rounded-circle d-flex align-itmes-center justify-content-center p-3'><FaLinkedinIn /></div>
                    </a>

                    <a href="https://github.com/fawwazmak" target='__blank'>
                        <div className='social-link rounded-circle d-flex align-itmes-center justify-content-center p-3'><AiOutlineGithub /></div>
                    </a>

                    <a href='https://wa.me/+2349049463346?Hello' target='__blank'>
                    <div className='social-link rounded-circle d-flex align-itmes-center justify-content-center p-3'><FaWhatsapp /></div>
                    </a>
                </div>
           </div>
        </div>


        <div className='bg-dark border-primary border border-2 rounded-5 hero-image'>
            <img src={heroImage} alt="hero image" />
        </div>

        <div className='d-md-none'>
            <p>I'm focused on building user-friendly application. I am passionate about simplifying code and writing semantic markUps</p>

            <div className='d-flex flex-column align-items-between justify-content-center gap-3'>
                <a href="https://docs.google.com/document/d/1zsdmpfxcSLxCwu8qh9M1lQfNebeNzI_32LNJaual628/edit?usp=sharing" target='__blank'>
                    <div className='rounded-pill px-4 py-2 d-flex align-items-center justify-content-center gap-2 cv-button'>Download CV <GoDownload /></div>
                </a>

                <a href="https://web.facebook.com/makinde.fawwaz/" target='__blank'>
                    <div className='social-link rounded-md-circle rounded-pill d-flex align-items-center justify-content-center p-3'><FaFacebookF /></div>
                </a>

                <a href="https://www.linkedin.com/in/fawwaz-makinde-56b776288/" target='__blank'>
                    <div className='social-link rounded-md-circle rounded-pill d-flex align-items-center justify-content-center p-3'><FaLinkedinIn /></div>
                </a>

                <a href="https://github.com/fawwazmak" target='__blank'>
                    <div className='social-link rounded-md-circle rounded-pill d-flex align-items-center justify-content-center p-3'><AiOutlineGithub /></div>
                </a>

                <a href='https://wa.me/+2349049463346?Hello' target='__blank'>
                    <div className='social-link rounded-md-circle rounded-pill d-flex align-items-center justify-content-center p-3'><FaWhatsapp /></div>
                 </a>
            </div>
        </div>
    </div>
  )
}

export default AboutSection