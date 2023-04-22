import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import bootstraplogo from '../Photos/bootstraplogo.webp'
import html5logo from '../Photos/html5logo.webp'
import chakrauilogo from '../Photos/chakrauilogo.png'
import css3logo from '../Photos/css3logo.webp'
import expresslogo from '../Photos/expresslogo.webp'
import jslogo from '../Photos/jslogo.webp'
import mongidb from '../Photos/mongidb.webp'
import nextjslogo from '../Photos/nextjslogo.png'
import nodejslogo from '../Photos/nodejslogo.webp'
import reactlogo from '../Photos/reactlogo.webp'
import reduxlogo from '../Photos/reduxlogo.webp'
import typescriptlogo from '../Photos/typescriptlogo.webp'
import vercel from "../Photos/vercel-logo.svg"
import githublogo from '../Photos/githublogo.webp'
import framermotionlogo from '../Photos/framermotionlogo.webp'
import npmlogo from '../Photos/npmlogo.png'


export default function Skills() {
  return (
    <motion.div
      whileInView={{ y: [-50, 0] }}
      className='skills' >
      <div className='skillbodyContainer' >
        <motion.h1
          whileHover={{ x: 50 }}
          transition={{ duration: 1 }}
        >Skills</motion.h1>
        <div className='skillcontainer' >
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%",
              }} src={html5logo} alt="html5" />

          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={css3logo} alt="css3" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={jslogo} alt="JavaScrpit" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={mongidb} alt="mongoDb" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={expresslogo} alt="express" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={reactlogo} alt="react" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={nodejslogo} alt="nodejs" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={reduxlogo} alt="redux" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={typescriptlogo} alt="typescript" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={chakrauilogo} alt="chakra" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={bootstraplogo} alt="bootstrap" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={nextjslogo} alt="nextjs" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={vercel} alt="Netlify" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={githublogo} alt="Github" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={framermotionlogo} alt="Github" />
          </div>
          <div>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
              }}
              src={npmlogo} alt="Github" />
          </div>
        </div>
      </div>

    </motion.div>
  )
}

