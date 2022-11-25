import React, {useState}from 'react'
import NavRef from './NavRef'
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function TabletNavigation({home, about, skills, project, contact}) {
    const[showMenue, setShowMenue]=useState(false)
    return (
        <div>
            <nav className='tabletNavigation' >
            {showMenue?  <AiOutlineClose onClick={()=>setShowMenue(!showMenue)} />  : <HiOutlineMenu onClick={()=>setShowMenue(!showMenue)} />}
            {showMenue &&  <NavRef home={home} about={about} skills={skills} project={project} contact={contact} />}
            </nav>
        </div>
    )
}
