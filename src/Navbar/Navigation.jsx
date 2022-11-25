import React from 'react'
import NavRef from './NavRef'


export default function Navigation({home, about, skills, project, contact}) {

    return (
        <div>
            <nav className="navigation" >
                <NavRef home={home} about={about} skills={skills} project={project} contact={contact} />
            </nav>
        </div>
    )
}
