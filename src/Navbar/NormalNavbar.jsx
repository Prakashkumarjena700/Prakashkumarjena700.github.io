import React, { useState, useEffect } from 'react';

function NormalNavbar({ home, about, skills, project, contact }) {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;

            setPrevScrollPos(currentScrollPos);
            setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    return (
        <nav className={visible ? 'navbar' : 'navbar hidden'}>
            <ul>
                <li onClick={home} >Home</li>
                <li onClick={about} >About</li>
                <li onClick={skills} >Skills</li>
                <li onClick={project} >Projects</li>
                <li onClick={contact} >Contact</li>
            </ul>
        </nav>
    );
}

export default NormalNavbar;
