import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

// expose custom useTheme context
export function useTheme() {
    return useContext(ThemeContext)
}

// expose custom useThemeUpdate context
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeContextProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
      setDarkTheme(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}