import setSearchResults from "./setSearchResults";

const nasaApiSearch = async (dispatch, search) => { 
    let url = `https://images-api.nasa.gov/search?q=${search}&media_type=image`;
    const results = await fetch(url)
    const json = await results.json()
    setSearchResults(dispatch, json)
}

export default nasaApiSearch