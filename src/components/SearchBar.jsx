import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const SearchBar = ({search, searchInput, handleSearch }) => {

  const {theme} = useContext(ThemeContext)
  
  return (
    <div className='SearchContainer'>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        className={`${theme ? 'dark' : ''} SearchBar`}
        placeholder='Buscar personaje...'
        autoComplete='off'
        spellCheck='false'
      />
    </div>
  )
}

export default SearchBar