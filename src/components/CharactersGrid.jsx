import React from 'react'
import CharacterCard from './CharacterCard'

const CharactersGrid = ({filteredItems, favorites, dispatch }) => {

  /* If the character is not in the favorites array, add it. If it is, remove it. */
  const handleClick = (favoriteCharacter) => {

    if (!favorites.favorites.find(el => el.id === favoriteCharacter.id)) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: favoriteCharacter })
    }
    if (favorites.favorites.find(el => el.id === favoriteCharacter.id)) {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: favoriteCharacter })
    }
  }

  return (
    <div className='CharactersGrid'>
      {
        filteredItems.map(character =>
          <CharacterCard
            key={character.id}
            img={character.image}
            name={character.name}
            status={character.status}
            gender={character.gender}
            species={character.species}
            location={character.location.name}
            character={character}
            handleClick={handleClick}
            inFavoritesStatus={
              favorites.favorites.find(el => el.id === character.id) ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'
            }
          />
        )
      }
    </div>
  )
}

export default CharactersGrid