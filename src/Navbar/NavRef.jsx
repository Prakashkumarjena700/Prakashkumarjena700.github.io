import React from 'react'
import { motion } from 'framer-motion'
import { useContext } from 'react';
import { ThemContext } from '../Context/ThemContext'

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
        onClick={project} >Project</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.40 }}
        whileHover={{ scale: 1.1 }}
        onClick={contact} >Contact</motion.li>
      <motion.li
        initial={animateForm}
        animate={animateTo}
        transition={{ delay: 0.40 }}
        onClick={changeThem}
        whileHover={{ scale: 1.1 }}
      >{!them ? <img className="toggleBtn" src="https://i.pinimg.com/564x/1c/22/43/1c22433b8d3aec799fd8187ca3030193.jpg" alt="" /> : <img className="toggleBtn" src="https://uxwing.com/wp-content/themes/uxwing/download/weather/sun-color-icon.png" />}</motion.li>

    </div>
  )
}
