import nasaApiSearch from "./nasaApiSearch";
import setSearchInput from "./setSearchInput";

const handleKeyPress = (e, dispatch, search) => {
  if (e.key === "Enter") {
    nasaApiSearch(dispatch, search)
    setSearchInput(dispatch, "")
  }
};

export default handleKeyPress
