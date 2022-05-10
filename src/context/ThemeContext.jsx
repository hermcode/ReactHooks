import {createContext, useState} from 'react';

const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={ {theme, setTheme} }>
      { children }
    </ThemeContext.Provider>
  )
}

export {
  ThemeContextProvider
}

export default ThemeContext