import { useState, useEffect } from "react"

/**
 * It takes a url as an argument, and returns an array of characters.
 * @returns An array of characters.
 */
const useCharaters = url => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
  }, [])

  return characters
}

export default useCharaters