import React from 'react'
import './Home.css'
import { motion } from 'framer-motion'
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import TypeWritte from '../Components/TypeWritter'
import mypic from '../Photos/mypic.png'
import css3logo from '../Photos/css3logo.webp'
import jslogo from '../Photos/jslogo.webp'
import reactlogo from '../Photos/reactlogo.webp'
import reduxlogo from '../Photos/reduxlogo.webp'
import picbackground from '../Photos/picbackground.jpg'
import Resume from "../Aseests/fp05_036-Prakash-Jena.pdf"

export default function Home() {
    const handelClick = () => {
        window.open("https://drive.google.com/file/d/1k8tkEOeOQLjVt1OSOb-iw_zhs4maEU8k/view?usp=sharing","_blank")
    }

    return (
        <div className='home' >
            <div>
                <div>
                    <h1 >I'm</h1>
                    {/* <TypeWritte /> */}
                    <h1>Prakash Kumar Jena</h1>
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
                        > <a href="mailto:prakashkumarjena367@gmail.com" target='_blank' ><ImMail4 className='homelogos' style={{ color: 'red' }} /></a>
                        </motion.div>
                    </div>
                    {/* <a href="https://drive.google.com/uc?export=download&id=1vJ8SpJ2Pyef4wQOBZEWp1eu-twa8Pgwp" >Download My Resume</a> */}
                    <a href={Resume}
                        target="_blank"
                        download={"fp05_036-Prakash-Jena"}
                        _hover={{ TextDecoder: "none" }}
                     
                    >
                        <button
                         id='homeresume' className='resumeDownloadeBtn'
                            download={Resume}
                            onClick={() => handelClick()}
                        >Resume</button>
                    </a>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <motion.img
                    animate={{ y: [0, 30, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className='csslogo' src={css3logo} alt="css3" />
                <motion.img
                    animate={{ y: [0, 30, 30, 0, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className='jslogo' src={jslogo} alt="" />
                <motion.img
                    animate={{ rotate: [0, 360], x: [0, 20, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                    className='reactLogo' src={reactlogo} alt="react" />
                <motion.img
                    animate={{ rotate: [0, 360], x: [0, 30, 30, 0] }}
                    transition={{ repeat: Infinity, duration: 10 }}
                    className='reduxlogo' src={reduxlogo} alt="" />
                <img className='picbackground' src={picbackground} alt="" />
                <img width='50%' className='pic' style={{ zIndex: '4' }} src={mypic} alt="" />

            </div>
        </div>
    )
}
