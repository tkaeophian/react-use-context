import './App.css'

import { FunctionThemeContenxtComponent } from './components'
import React from 'react'
import { ThemeContextProvider } from './contexts'

export const ThemeContext = React.createContext()

function App() {


  return (
    <div className='App'>
      <ThemeContextProvider>
        <FunctionThemeContenxtComponent />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
