import { useTheme, useThemeUpdate } from '../contexts'

import React from 'react'

export default function FunctionThemeContenxtComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#fff',
        color: darkTheme ? '#ccc' : '#333',
    }
    return <>
        <button className='btn' onClick={toggleTheme}>Toggle Theme</button>
        <div className="box" style={themeStyles}>Function Component</div>
    </>
}