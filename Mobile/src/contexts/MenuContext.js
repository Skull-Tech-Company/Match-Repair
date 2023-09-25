// MenuContext.js
import React, { createContext, useState } from 'react'

// Defina um objeto com as propriedades isMenuOpen e toggleMenu
const initialState = {
    isMenuOpen: false,
    toggleMenu: () => { },
};

export const MenuContext = createContext(initialState);

export function MenuProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('contexto')
    };



    const contextValue = {
        isMenuOpen,
        toggleMenu,

    };

    return (
        <MenuContext.Provider value={contextValue}>
            {children}
        </MenuContext.Provider>
    )
}
