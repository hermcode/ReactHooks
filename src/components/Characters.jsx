import { useState, useEffect, useReducer, useMemo, useCallback, useRef } from 'react';

import fetchCharacters from '../helpers/fetchCharacters';
import favoritesReducer from '../reducer/favoritesReducer';
import SearchBar from './SearchBar';
import FavoritesItems from './FavoritesItems';
import CharactersGrid from './CharactersGrid';
import useCharaters from '../hooks/useCharacters';

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character'

const Characters = () => {

  const [favorites, dispatch] = useReducer(favoritesReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const characters = useCharaters(API)
  
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])

  /* Filtering the characters array and returning the ones that match the search input. */
  const filteredItems = useMemo(() => characters.filter(item => {
    return item.name.toLowerCase().includes(search.toLowerCase())
  }), [characters, search])

  return (
    <div className="container">
      <div className="Characters">
        <SearchBar search={search} searchInput={searchInput} handleSearch={handleSearch} />
        <FavoritesItems favorites={favorites} />
        <CharactersGrid filteredItems={filteredItems} favorites={favorites} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default Characters