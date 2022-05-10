/**
 * It fetches the data from the API and returns the results.
 * @returns An array of objects.
 */
const fetchCharacters = async ( url ) => {

  try {
    const resp = await fetch(url)
    const {results} = await resp.json()
    return results
  } catch (error) {
    console.log(error);
  }
}

export default fetchCharacters