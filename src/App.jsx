import './App.css';
import { useRef } from "react";
import Navbar from './Navbar/Navbar';
import Home from './Sections/Home';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Project from './Sections/Project';
import Contact from './Sections/Contact';

function App() {

  const refhome = useRef(null);
  const refabout = useRef(null)
  const refskills = useRef(null);
  const refproject = useRef(null);
  const refcontact = useRef(null);


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


  return (
    <>
      <div >
        <Navbar home={home} about={about} skills={skills} project={project} contact={contact} />
        <div className='body' >
          <div ref={refhome}><Home /></div>
          <div ref={refabout}><About /></div>
          <div ref={refskills}><Skills /></div>
          <div ref={refproject}><Project /></div>
          <div ref={refcontact}><Contact /></div>
        </div>
      </div>

    </>
  );
}

export default App;
