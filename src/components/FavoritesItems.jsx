import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const FavoritesItems = ({favorites}) => {

  const {theme} = useContext(ThemeContext)
  
  return (
    <>
      {
        favorites.favorites.length > 0 &&
        <div className='Favorites'>
          {
            favorites.favorites.map(favorite => (
              <figure key={favorite.id}>
                <img className={`${theme ? 'dark' : ''}`} src={favorite.image} alt={favorite.name} />
              </figure>
            ))
          }
        </div>
      }
    </>
  )
}

export default FavoritesItems