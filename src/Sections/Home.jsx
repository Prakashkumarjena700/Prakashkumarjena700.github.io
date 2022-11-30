import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import TypeWritte from '../Components/TypeWritter'




export default function Home() {
    return (
        <div className='home' >
            <div>
                <div>
                    <h1 >I'm</h1>
                    <TypeWritte />
                    <p>Full Stack Web Developer</p>
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
                        > <a href="prakashkumarjena367@gmail.com" target='_blank' ><ImMail4 className='homelogos' style={{ color: 'red' }} /></a>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <motion.img
                    animate={{ y: [0, 30, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className='csslogo' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
                <motion.img
                    animate={{ y: [0, 30, 30, 0, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className='jslogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
                <motion.img
                    animate={{ rotate: [0, 360], x: [0, 20, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                    className='reactLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                <motion.img
                    animate={{ rotate: [0, 360], x: [0, 30, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                    className='reduxlogo' src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="" />

                    <img width='50%' className='pic' style={{ zIndex: '4' }} src="https://i.ibb.co/GMDmCjb/DSC-0954-removebg-preview.png" alt="" />

            </div>
        </div>
    )
}
