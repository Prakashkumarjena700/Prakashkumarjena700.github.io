import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemContext = createContext()


export default function ThemContextProvider({ children }) {
    const [them, setThem] = useState(false)

    const changeThem=()=>{
        setThem(!them)
    }
    
    return (
        <ThemContext.Provider value={{them, changeThem }} >{children}</ThemContext.Provider>
    )
}
