import React from "react";
import { useDispatch, useSelector } from "react-redux";
import handleKeyPress from "../actions/handleKeyPress";
import setSearchInput from "../actions/setSearchInput";
import nasaApiSearch from "../actions/nasaApiSearch";

export default function SearchBar() {
  let search = useSelector((state) => state.nasa.nasaSearchInput);
  console.log(search)
  let nasa = useSelector((state) => state.nasa.nasaSearchResult);
  console.log(nasa)
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => setSearchInput(dispatch, e.target.value)}
        onKeyPress={(e) => handleKeyPress(e, dispatch, search)}
        placeholder="search..."
      />
      <button
        disabled={!search ? true : false}
        onClick={() => nasaApiSearch(dispatch, search)}
      >
        Search
      </button>
    </div>
  );
}
