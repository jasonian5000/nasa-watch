import setJwstResults from "./setJwstResults";

const jwstApiSearch = async (dispatch) => {
  let myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let url = `https://api.jwstapi.com/all/type/jpg?page=1&perPage=300`;
  const results = await fetch(url, requestOptions);
  const json = await results.json();
  const filtered = json.body.filter((result) => {
    return result.details.suffix !== "_thumb";
  });
  const shortened = filtered.slice(0, 100);
  setJwstResults(dispatch, shortened);
};

export default jwstApiSearch;
