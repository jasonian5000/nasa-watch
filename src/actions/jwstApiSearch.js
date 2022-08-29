const jwstApiSearch = async () => {
  let myHeaders = new Headers();
  myHeaders.append("X-API-KEY", "");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  let url = "https://api.jwstapi.com/all/type/jpg?page=1&perPage=100";
  const results = await fetch(url, requestOptions);
  const json = await results.json();
};

export default jwstApiSearch;
