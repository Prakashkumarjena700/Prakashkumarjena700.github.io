import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { motion } from 'framer-motion'
import { useState } from 'react';
import { ThemContext } from '../Context/ThemContext'
import { useContext } from 'react';
import Resume from "../Aseests/fp05_036-Prakash-Jena.pdf"

export default function Contact() {
  const [value, setValue] = useState('')
  const form = useRef();
  const { them } = useContext(ThemContext)

  const handelClick = () => {
    window.open("https://drive.google.com/file/d/1k8tkEOeOQLjVt1OSOb-iw_zhs4maEU8k/view?usp=sharing", "_blank")
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u0a5o53', 'template_3qh7hxg', form.current, 'RrQoSMf5qKEHsZHnh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (<>
    <div className='contact' >
      <motion.h1 whileHover={{ x: 50 }}
        transition={{ duration: 1 }}>Contact</motion.h1>
      <div className='contactForm' >
        <motion.div
          whileInView={{ y: [-50, 0] }}
          transition={{ delay: 0.2 }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <input className={them ? 'whiteInput' : 'blackinput'} type="text" placeholder='Enter yoyr name' name="user_name" />
            <input className={them ? 'whiteInput' : 'blackinput'} type="email" placeholder='Enter your email' name="user_email" />
            <textarea className={them ? 'whiteInput' : 'blackinput'} name="message" placeholder='Message' />
            <button type="submit"  >Send</button>
          </form>
        </motion.div >
        <motion.div
          whileInView={{ y: [-50, 0] }}
          transition={{ delay: 0.6 }}
        >
          {/* <a href="https://drive.google.com/uc?export=download&id=1vJ8SpJ2Pyef4wQOBZEWp1eu-twa8Pgwp" className='resumeDownloadeBtn' style={{borderRadius:'5px'}} >Download My Resume</a> */}
          <a href={Resume}
            target="_blank"
            download={"fp05_036-Prakash-Jena"}
            _hover={{ TextDecoder: "none" }}

          >
            <button
              className='resumeDownloadbtnincontact'

              download={Resume}
              onClick={() => handelClick()}
            >Resume</button>
          </a>
          <p>prakashkumarjena367@gmail.com</p>
          <p>Phone : 9114046870</p>
          <p>Bhubaneswar, Odisha</p>
          <div style={{ display: 'flex', gap: '16px' }} >
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1 }}
            >  <a href="https://github.com/Prakashkumarjena700" target='_blank' ><AiFillGithub className='homelogos' style={{ color: 'black', backgroundColor: 'white', borderRadius: '50%' }} /></a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
            > <a href="https://www.linkedin.com/in/prakash-kumar-jena-724b30244/" target='_blank' ><AiOutlineLinkedin className='homelogos' style={{ color: '#0a66c2' }} /></a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
            > <a href="mailto:prakashkumarjena367@gmail.com" target='_blank' ><ImMail4 className='homelogos' style={{ color: 'red' }} /></a>
            </motion.div>
          </div>
        </motion.div>
      </div >
    </div >
    <div className='thankyou' >Designed & Built by Prakash Kumar Jena © 2022 All rights reserved.</div>
  </>)

}
