import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { ThemContext } from '../Context/ThemContext'
import sunlogo from '../Photos/sunlogo.png'
import moon from '../Photos/moon.webp'

export default function NavRef({ home, about, skills, project, contact }) {

  const animateForm = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  const { them, changeThem } = useContext(ThemContext)

  return (
    <div className='hamburgerDropdown' >
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        whileHover={{ scale: 1.1 }}
        onClick={home} >Home</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.10 }}
        onClick={about}
        whileHover={{ scale: 1.1 }}
       >About Me</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.20 }}
        whileHover={{ scale: 1.1 }}
        onClick={skills} >Skills</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.30 }}
        whileHover={{ scale: 1.1 }}
        onClick={project} >Projects</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.40 }}
        whileHover={{ scale: 1.1 }}
        onClick={contact} >Contact & Resume</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.40 }}
        onClick={changeThem}
        whileHover={{ scale: 1.1 }}
      >{!them ? <img className="toggleBtn" src={moon} alt="Dark" /> : <img className="toggleBtn" src={sunlogo} alt="Light" />}</motion.li>

    </div>
  )
}
