import setSearchResults from "./setSearchResults";
const nasaApiSearch = async (dispatch, search) => { 
    let url = `https://images-api.nasa.gov/search?q=${search}&media_type=image`;
    const imageResults = await fetch(url)
    const json = await imageResults.json()
    setSearchResults(dispatch, json)
}

export default nasaApiSearch