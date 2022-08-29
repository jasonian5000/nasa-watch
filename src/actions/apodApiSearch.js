const apodApiSearch = async () => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=100&media_type=image`;
    const imageResults = await fetch(url)
    const json = await imageResults.json()
    // need a function to set apod100
}

export default apodApiSearch