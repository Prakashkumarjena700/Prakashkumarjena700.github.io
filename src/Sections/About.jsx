import React, { useContext } from 'react'
import './About.css'
import { motion } from 'framer-motion'
import { ThemContext } from '../Context/ThemContext'


export default function About() {
  const { them } = useContext(ThemContext)
  console.log(them)
  return (
    <div className='about' id={them && 'darkabout'}>
      <motion.div
        whileInView={{ y: [-50, 0] }}
      >
        <motion.h2
          whileHover={{ x: 50 }}
          transition={{ duration: 1 }}
          style={{ display: 'inline-block' }}
        >About Me</motion.h2>
        <p>I am an aspiring full-stack web developer with 1200+ hours of coding and handson experience with frontend and backend at Masai School looking for an opportunity  where I can express my creative interests along with applying my technical skillset and help the company grow simultaneously.</p>
      </motion.div>
    </div>
  )
}


