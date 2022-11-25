import React from 'react'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import './Navbar.css'
import TabletNavigation from './TabletNavigation'

export default function Navbar({home, about, skills, project, contact}) {
    return (
        <div className='navBar' >
           <Navigation home={home} about={about} skills={skills} project={project} contact={contact} />
           <TabletNavigation home={home} about={about} skills={skills} project={project} contact={contact}/>
           <MobileNavigation home={home} about={about} skills={skills} project={project} contact={contact} />
        </div>
    )
}
