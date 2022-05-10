import { useContext } from 'react'
import { FaMoon } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import ThemeContext from '../context/ThemeContext'

const Header = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  const handleDarkMode = () => {
    setTheme(!theme)
  }

  return (
    <div className="Header container">
      <h1>ReactHooks</h1>
      
      <div className='flex' >
        
        {!theme? <FaMoon size="30px" color='#3e4b5c' className='ThemeIcon'/> : <FiSun size="30px" color='#fff' className='ThemeIcon'/>}
        <div className="toggle-button-container">
          <input 
            type="checkbox" 
            id="toggle-button" 
            onClick={handleDarkMode}
          ></input>
          <label htmlFor="toggle-button">
            <div className="sun-moon"></div>
          </label>
        </div>
      </div>

      

    </div>
  )
}

export default Header