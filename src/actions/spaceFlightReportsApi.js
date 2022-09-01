import setReportResults from "./SetReportResults";

const spaceFlightReportsApi = async (dispatch) => {
  let url = "https://api.spaceflightnewsapi.net/v3/reports?_limit=100";
  const results = await fetch(url);
  const json = await results.json();
  setReportResults(dispatch, json);
};

export default spaceFlightReportsApi;
