import React from 'react';
import Form from './Form';
import ContactMedia from './ContactMedia';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const contactSection = () => {
  const time = new Date();
  const year = time.getFullYear(); 
  return (
    <>
      <div className='py-5 contact-section bg-dark px-5'>
        {/* https://formspree.io/f/xqazpqvg */}
        <h1 className='identity text-center'>Reach out to me</h1>
        <div className='row align-items-center gx-5 mt-5 pb-5'>
          <div className="col-md-6 col-12">
            <Form />
          </div>

          <div className="col-md-6 col-12 mt-md-0 mt-5 d-flex flex-column gap-3">
            <ContactMedia className="" icon={FiPhoneCall} link={"tel:+2349049463346"} contactMedium={"Phone"} value={"+2349049463346"} />
            <ContactMedia className="" icon={MdOutlineMail} link={"mailto:fawwazmakinde47@gmail.com?subject=Hello%20Fawwaz."} contactMedium={"Email"} value={"fawwazmakinde47@gmail.com"} />
            <ContactMedia className="" icon={CiLocationOn} link={"https://www.google.com/maps/dir//7+Oshifuye+Str,+Papa+Ajao,+Lagos+102215,+Lagos/@6.5343751,3.3468135,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x103b8dcfe45bb1ad:0x438e73e9cd037f7c!2m2!1d3.3493884!2d6.5343698!3e2?authuser=0&entry=ttu"} contactMedium={"Address"} value={"!7, Oshifuye street Mushin"} />
          </div>
        </div>
      </div>

      <p className='text-light bg-primary py-2 text-center'>Copyright &copy; {year} ~ Fawwaz. All Rights Reserved</p>
    </>
  )
}

export default contactSection