import setSearchResults from "./setSearchResults";

const nasaApiStarter = async (dispatch) => {
  let randInt = Math.floor(Math.random() * 100);
  let url = `https://images-api.nasa.gov/search?media_type=image&page=${randInt}`;
  const results = await fetch(url);
  const json = await results.json();
  setSearchResults(dispatch, json);
};

export default nasaApiStarter;
