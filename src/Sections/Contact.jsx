import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css'

import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

import { motion } from 'framer-motion'

import Resume from "../Aseests/fp05_036-Prakash-Jena.pdf"
import UpdatedResume from "../Aseests/Prakash_Kumar_Jena_Fp05_036.pdf";

import { TiSocialLinkedin } from 'react-icons/ti';
import { IoIosMail } from 'react-icons/io';

export default function Contact() {

  const form = useRef();

  const handelClick = () => {
    window.open("https://drive.google.com/file/d/1gpTSkY-g7RP8WQIgO1fYWbDmp2EkaYGG/view?usp=sharing", "_blank")
  }

 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5zzx1jb', 'template_3qh7hxg', form.current, 'RrQoSMf5qKEHsZHnh')
      .then((result) => {
        console.log(result.text);
        if(result.text=='OK'){
          alert('Thank you');
        }else{
          alert('Something went wrong');
        }
      }, (error) => {
        alert('Something went wrong');
        console.log(error.text);
      });
  };
  return (<>
    <div className='contact' >
      <h2 >Contact</h2>
      <div className='contactForm' >
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Enter yoyr name' name="user_name" />
            <input type="email" placeholder='Enter your email' name="user_email" />
            <textarea name="message" placeholder='Message' />
            <button type="submit"  >Send</button>
          </form>
        </div >
        <div>
          {/* <a href="https://drive.google.com/uc?export=download&id=1vJ8SpJ2Pyef4wQOBZEWp1eu-twa8Pgwp" className='resumeDownloadeBtn' style={{borderRadius:'5px'}} >Download My Resume</a> */}
          <a href={UpdatedResume}
            target="_blank"
            download={"fp05_036-Prakash-Jena"}
            _hover={{ TextDecoder: "none" }}

          >
            <button
              className='resumeDownloadbtnincontact'

              download={UpdatedResume}
              onClick={() => handelClick()}
            >Resume</button>
          </a>
          <p>prakashkumarjena367@gmail.com</p>
          <p>Phone : 9114046870</p>
          <p>Bhubaneswar, Odisha</p>
          <div className='socialMediaDiv' style={{ display: 'flex', gap: '16px' }} >
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/Prakashkumarjena700" target="_blank"  ><AiFillGithub /></motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/prakash-kumar-jena/" target="_blank"  ><TiSocialLinkedin /></motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:prakashkumarjena367@gmail.com" target="_blank" ><IoIosMail /></motion.a>
          </div>
        </div>
      </div >
    </div >
    <div className='thankyou' >Designed & Built by Prakash Kumar Jena © 2022 All rights reserved.</div>
  </>)

}
