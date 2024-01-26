import React from 'react'
import '../css/About.css'
import myPic from "../Photos/myPassportSizePic.png"

export default function About() {

  return (
    <div className='About' >
      <div className="background-image-about">
        <div className="fixed-container-about">
        </div>
      </div>
      <div className='aboutContent' >
        <h2>About Me</h2>
        <div>
          <p>Hello, I'm Prakash Kumar Jena, an experienced Full Stack Developer with over 6 months of dedicated work. My passion lies in creating innovative solutions using the MERN stack. I thrive on turning ideas into reality, leveraging my creative mindset to build dynamic and user-centric applications. My journey in web development has equipped me with a strong foundation, and I am excited to showcase my skills and contribute to projects that demand a blend of creativity and technical expertise. I look forward to making a meaningful impact through my work.</p>
          <img src={myPic} alt="Prakash Kumar Jena" />
        </div>

      </div>
    </div>
  )
}
