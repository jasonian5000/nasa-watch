const spaceFlightReportsApi = async () => {
  let url = "https://api.spaceflightnewsapi.net/v3/reports?_limit=100";
  const results = await fetch(url);
  const json = await results.json();
};

export default spaceFlightReportsApi;
