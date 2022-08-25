import nasaApiSearch from "./nasaApiSearch";

const handleKeyPress = (e, dispatch, search) => {
  if (e.key === "Enter") {
    nasaApiSearch(dispatch, search)
  }
};

export default handleKeyPress
