import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Element } from 'react-scroll';
import logoOnly from "/logo-icon.png"
import AboutSection from '../components/aboutSection/AboutSection';
import SkillSection from '../components/skillSection/SkillSection';
import ProjectSection from '../components/projectSection/ProjectSection';
import ContactSection from "../components/contactSection/ContactSection";



function App() {
  return (
    <>
      <div>
        <nav className='d-flex justify-content-between align-items-center text-light py-3 px-5 fw-medium border-bottom border-light'>
          <img src={logoOnly} alt="logo" className='bg-light rounded-2 p-2' />
          <ul className='list-unstyled d-flex gap-5'>
            <li><Link to="section1" duration={100}>About</Link></li>
            <li><Link to="section2" duration={100}>Skills</Link></li>
            <li><Link to="section3" duration={100}>Projects</Link></li>
            <li><Link to="section4" duration={100}>Contact</Link></li>
          </ul>
        </nav>
        
        <Element name="section1">
          <AboutSection />
        </Element>

        <Element name="section2">
          <SkillSection />
        </Element>

        <Element name="section3">
          <ProjectSection />
        </Element>


        <Element name="section4">
          <ContactSection />
        </Element>


        {/* <Element name="section4">
          <h2>Section 4</h2>
          <p>Content for Section 4...</p>
        </Element> */}
      </div>
    </>
  )
}

export default App
