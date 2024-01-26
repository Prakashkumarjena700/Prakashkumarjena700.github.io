import React from 'react'
import '../css/Skills.css'

import { AiFillHtml5 } from 'react-icons/ai'
import { RxCodesandboxLogo } from 'react-icons/rx'
import { FaCss3Alt, FaNpm, FaBootstrap ,FaLaravel,FaWordpress} from 'react-icons/fa'
import { RxVercelLogo } from 'react-icons/rx'
import { CgFramer } from 'react-icons/cg'
import { TbBrandTypescript, TbBrandNextjs } from 'react-icons/tb'
import { FiUploadCloud } from 'react-icons/fi'
import { SiJavascript, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedux, SiNetlify, SiChakraui, SiPostman, SiMui, SiReplit,SiTailwindcss } from 'react-icons/si'

import { motion } from 'framer-motion'

import cyclic from '../Photos/cyclic-logo.png'
import mongooseLogo from '../Photos/mongooseLogo.png'
import Static from './Static'

export default function Skills() {
  return (
    <div className='skills' >
      <div className="background-image-skills">
        <div className="fixed-container-skills">
        </div>
        <div className="scroll-container">
        </div>
      </div>
      <div className='skillsContent' >
        <h2>My Skills</h2>
        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.mongodb.com/" target="_blank" > <SiMongodb /> </a>
            <p>MongoDB</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://expressjs.com/" target="_blank" ><SiExpress /></a>
            <p>Express js</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://react.dev/" target="_blank" ><SiReact /></a>
            <p>React js</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://nodejs.org/en" target="_blank" ><SiNodedotjs /></a>
            <p>Node js</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://redux.js.org/" target="_blank" ><SiRedux /></a>
            <p>Redux</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.typescriptlang.org/" target="_blank" ><TbBrandTypescript /></a>
            <p>TypeScript</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" ><AiFillHtml5 /></a>
            <p>HTML</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" ><FaCss3Alt /></a>
            <p>CSS</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" ><SiJavascript /></a>
            <p>JavaScript</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://nextjs.org/" target="_blank" ><TbBrandNextjs /></a>
            <p>Next js</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.framer.com/motion/" target="_blank" ><CgFramer /></a>
            <p>Framer</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.npmjs.com/" target="_blank" ><FaNpm /></a>
            <p>npm</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.netlify.com/" target="_blank" ><SiNetlify /></a>
            <p>Netlify</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://vercel.com/" target="_blank" ><RxVercelLogo /></a>
            <p>Vercel</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.cyclic.sh/" target="_blank" >
              
               <img src={cyclic} alt="" />
               </a>
            <p>Cyclic</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://tailwindcss.com/" target="_blank" > <SiTailwindcss/></a>
            <p>Tailwind CSS</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://www.postman.com/" target="_blank" > <SiPostman /></a>
            <p>Postman</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://chakra-ui.com/" target="_blank" > <SiChakraui /></a>
            <p>Chakra UI</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://getbootstrap.com/" target="_blank" > <FaBootstrap /></a>
            <p>Boot Strap</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://mui.com/" target="_blank" > <SiMui /></a>
            <p>mui</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://codesandbox.io/" target="_blank" > <RxCodesandboxLogo /></a>
            <p>code sand box</p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://replit.com/" target="_blank" > <SiReplit /></a>
            <p>Replit</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://cloudinary.com/" target="_blank" > <FiUploadCloud /></a>
            <p>Cloudinary</p>
          </motion.button>
         
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://laravel.com/" target="_blank" > <FaLaravel /></a>
            <p>Laravel</p>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <a href="https://wordpress.com/" target="_blank" > <FaWordpress /></a>
            <p>Wordpress</p>
          </motion.button>

        </div>
      </div>
      <Static />
    </div>
  )
}

