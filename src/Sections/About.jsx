import React from "react";
import "../css/About.css";
import myPic from "../Photos/myPassportSizePic.png";

export default function About() {
  return (
    <div className="About">
      <div className="background-image-about">
        <div className="fixed-container-about"></div>
      </div>
      <div className="aboutContent">
        <h2>About Me</h2>
        <div>
          <p>
            I am a proficient MERN stack developer with a passion for building
            advanced, interactive websites that incorporate 3D models and
            animations to create immersive user experiences. Continuously
            exploring cutting-edge technologies, I am always eager to learn,
            adapt, and push the boundaries of web development. With a strong
            foundation in full-stack development, I strive to create
            high-performance, visually stunning, and user-friendly applications.
            Open to new challenges and innovations, I am committed to staying
            ahead in the evolving tech landscape.
          </p>
          <img src={myPic} alt="Prakash Kumar Jena" />
        </div>
      </div>
    </div>
  );
}
