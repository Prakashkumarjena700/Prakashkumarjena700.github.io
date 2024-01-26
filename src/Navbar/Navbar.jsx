import React from 'react'
import './Navbar.css'
import NormalNavbar from './NormalNavbar'
import Hamburger from './Hamburger'

export default function Navbar({home, about, skills, project, contact}) {
    return (
        <div className='navBar' >
           <NormalNavbar home={home} about={about} skills={skills} project={project} contact={contact} />
           <Hamburger home={home} about={about} skills={skills} project={project} contact={contact}/>
        </div>
    )
}
