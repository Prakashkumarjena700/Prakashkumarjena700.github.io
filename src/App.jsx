import './App.css';
import { useRef } from "react";
import Navbar from './Navbar/Navbar';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Project from './Sections/Project';
import Contact from './Sections/Contact';
import { useContext } from 'react';
import { ThemContext } from './Context/ThemContext'
import WaiveLine from './Sections/WaiveLine';
import { motion, useScroll, useSpring } from "framer-motion";
import GitHubCalendar from 'react-github-calendar'

function App() {

  const refhome = useRef(null);
  const refabout = useRef(null)
  const refskills = useRef(null);
  const refproject = useRef(null);
  const refcontact = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const home = () => {
    refhome.current.scrollIntoView({ behavior: "smooth" });
  }
  const about = () => {
    refabout.current.scrollIntoView({ behavior: "smooth" });
  }
  const skills = () => {
    refskills.current.scrollIntoView({ behavior: "smooth" });
  }
  const project = () => {
    refproject.current.scrollIntoView({ behavior: "smooth" });
  }
  const contact = () => {
    refcontact.current.scrollIntoView({ behavior: "smooth" });
  }


  const { them } = useContext(ThemContext)

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="App" id={them ? "dark" : "light"} >
        <WaiveLine />
        <Navbar home={home} about={about} skills={skills} project={project} contact={contact} />
        <div className='body' >
          <div ref={refhome}><Home />
          </div>
          <div ref={refabout}><About /></div>
          <div ref={refskills}>
            <Skills />
            <motion.h1
              whileHover={{ x: 50 }}
              transition={{ duration: 1 }} className='statusheading' >My Statistics</motion.h1>
            <div className='githubstats' >
              <motion.img
                whileInView={{ y: [-50, 0] }}
                src="https://github-readme-stats.vercel.app/api?username=prakashkumarjena700&show_icons=true&theme=algolia&count_private=true" alt="" />
              <motion.img
                whileInView={{ y: [-50, 0] }}
                transition={{ delay: 0.4 }}
                src="https://streak-stats.demolab.com/?user=prakashkumarjena700&theme=buefy" alt="" />
            </div>
            <motion.h1
              whileHover={{ x: 50 }}
              transition={{ duration: 1 }} className='statusheading' >My GitHub Calendar</motion.h1>
            <motion.div
              whileInView={{ y: [-50, 0] }} className='githubcalendar' >
              <GitHubCalendar color='#3a50e0' username='prakashkumarjena700' />
            </motion.div>
          </div>
          <div ref={refproject}><Project /></div>
          <div ref={refcontact}><Contact /></div>
        </div>
      </div>
    </>
  );
}

export default App;
