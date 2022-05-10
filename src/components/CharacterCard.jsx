import React, { useContext, useReducer } from 'react'
import ThemeContext from '../context/ThemeContext'

const CharacterCard = ({character, img, name, status, gender, species, location, handleClick, inFavoritesStatus}) => {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={ `${!theme? '' : 'dark-bg-1'} CharacterCard` }>
      <img src={img} alt={name} />
      <div className="CharacterInfo">
        <h2>{name.substr(0,16)}</h2>
        <p>{status === 'Alive'? `💚${status}` : `💔${status}`}</p>
        <p>{gender}</p>
        <p>{species}</p>
        <p>{location}</p>
        <button onClick={() => handleClick(character)} className={`CharacterInfoBtn ${theme? 'darkBtn' : ''}`}>{inFavoritesStatus}</button>
      </div>
    </div>
  )
}

export default CharacterCard