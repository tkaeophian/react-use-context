import './App.css'

import { ClassThemeContentComponent, FunctionThemeContenxtComponent } from './components'
import React, { useState } from 'react'

export const ThemeContext = React.createContext()

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prev => !prev)
  }

  return (
    <>
      <div className='App'>
        <ThemeContext.Provider value={darkTheme}>
          <button className='btn' onClick={toggleTheme}>Toggle Theme</button>
          <FunctionThemeContenxtComponent />
          <ClassThemeContentComponent />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
