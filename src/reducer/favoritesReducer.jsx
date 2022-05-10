
const defaultState = {
  favorites: []
}

/**
 * If the action type is ADD_TO_FAVORITES, then add the payload to the favorites array. If the action
 * type is REMOVE_FROM_FAVORITES, then remove the payload from the favorites array.
 * @returns The state is being returned.
 */
const favoritesReducer = ( state = defaultState, action ) => {

  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        favorites: [...state.favorites, action.payload]
      }
    
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: [
          ...state.favorites.filter((favorite) => favorite !== action.payload),
        ],
      };

    default:
      return state
  }
}

export default favoritesReducer