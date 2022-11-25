import React from 'react'
import NavRef from './NavRef';
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { ThemContext } from '../Context/ThemContext';
import { useContext } from 'react';


export default function MobileNavigation( {home, about, skills, project, contact}) {
    const{them} =useContext(ThemContext)
    const[showMenue, setShowMenue]=useState(false)
    return (
        <div>
            <nav className='mobilNavigation' >
                {showMenue?  <AiOutlineClose onClick={()=>setShowMenue(!showMenue)} />  : <HiOutlineMenu onClick={()=>setShowMenue(!showMenue)} />}
                {showMenue &&  <NavRef home={home} about={about} skills={skills} project={project} contact={contact} />}
            </nav>
        </div>
    )
}
