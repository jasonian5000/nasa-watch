import setApodResults from "./setApodResults";

const apodApiSearch = async (dispatch) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=100`;
    const results = await fetch(url)
    const json = await results.json()
    console.log(json)
    setApodResults(dispatch, json)
}

export default apodApiSearch