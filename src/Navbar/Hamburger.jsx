import React from 'react'

import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react'

import { CgMenu } from 'react-icons/cg'
import { GoHome } from 'react-icons/go'
import { BsInfoCircle } from 'react-icons/bs'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineProject } from 'react-icons/ai'
import { MdPermContactCalendar } from 'react-icons/md'

export default function Hamburger({ home, about, skills, project, contact }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const goTosec = (sec) => {
        if (sec === 'home') {
            home()
        } else if (sec === 'about') {
            about()
        } else if (sec === 'skills') {
            skills()
        } else if (sec === 'project') {
            project()
        } else if (sec === 'contact') {
            contact()
        }
        onClose()
    }

    return (
        <div className='hamBurger' >
            <button className='hamburgerIcon' onClick={onOpen}>
                <CgMenu />
            </button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='none' >
                    <DrawerCloseButton />
                    <DrawerBody className='hamburgerBody'  >
                        <p onClick={() => goTosec('home')} ><article><GoHome /> </article><span>Home</span></p>
                        <p onClick={() => goTosec('about')} ><article><BsInfoCircle /></article><span>About</span></p>
                        <p onClick={() => goTosec('skills')} ><article><GiSkills/></article><span>Skills</span></p>
                        <p onClick={() => goTosec('project')} ><article><AiOutlineProject/></article><span>Projects</span></p>
                        <p onClick={() => goTosec('contact')} ><article><MdPermContactCalendar /></article><span>Contact</span></p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
