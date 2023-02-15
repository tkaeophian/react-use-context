import React, { useContext } from 'react'

import { ThemeContext } from '../App'

export default function FunctionThemeContenxtComponent() {
    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#fff',
        color: darkTheme ? '#ccc' : '#333',
    }
    return <>
    <div className="box" style={themeStyles}>Function Component</div>
    </>
}