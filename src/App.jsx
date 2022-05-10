import {useContext} from 'react'

import Characters from './components/Characters'
import Header from './components/Header'
import ThemeContext from './context/ThemeContext'

import './App.css'


function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${!theme? '' : 'dark-bg-0 dark-w-color' } App`}>
      <Header />
      <Characters/>
    </div>
  )
}

export default App
