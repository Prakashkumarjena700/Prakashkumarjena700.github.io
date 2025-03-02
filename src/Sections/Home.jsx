import React from 'react'
import '../css/Home.css'
import CountUp from 'react-countup';

import UpdatedResume from "../Aseests/Prakash__Kumar_Jena_Resume.pdf";
import HomeBg from "../Aseests/portfolio_home_background.mp4"

import TypeWritter from '../Components/TypeWritter'

import { AiFillGithub } from 'react-icons/ai'
import { IoIosMail } from 'react-icons/io'
import { TiSocialLinkedin } from 'react-icons/ti'

import { motion } from 'framer-motion'

export default function Home() {
    const handelClick = () => {
        // window.open("https://drive.google.com/file/d/1gpTSkY-g7RP8WQIgO1fYWbDmp2EkaYGG/view?usp=sharing", "_blank")
    }

    return (
        <div className='home' >
            <div className="video-container">
                <video autoPlay muted loop id="background-video">
                    <source src={HomeBg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className='Intro' >
                <p>Hello, I'm </p>
                <h2>Prakash Kumar Jena</h2>
                <TypeWritter />
                <div className='socialMediaDiv' >
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
                <a href={UpdatedResume}
                    target="_blank"
                    download={"Prakash__Kumar_Jena_Resume"}
                    _hover={{ TextDecoder: "none" }}>
                    <button download={UpdatedResume} onClick={() => handelClick()} >Resume</button>
                </a>
            </div>

            <div className='counterContainer' >
                <div className="circle" style={{ color: 'white' }} >
                    <div>
                        <p> <CountUp duration={7} end={1200} />+ hr.</p>
                        <p>Coding</p>
                    </div>
                </div>
                <div className="circle">
                    <div>
                        <p> <CountUp duration={7} end={450} />+ hr.</p>
                        <p>DSA</p>
                    </div>
                </div>
                <div className="circle">
                    <div>
                        <p> <CountUp duration={7} end={100} />+ hr.</p>
                        <p>Soft Skill</p>
                    </div>
                </div>
                <div className="circle">
                    <div>
                        <p> <CountUp duration={7} end={100} />+</p>
                        <p>Projects</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
