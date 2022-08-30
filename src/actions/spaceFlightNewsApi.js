const spaceFlightNewsApi = async () => {
    let url = "https://api.spaceflightnewsapi.net/v3/articles?_limit=100";
    const results = await fetch(url)
    const json = await results.json()
}

export default spaceFlightNewsApi