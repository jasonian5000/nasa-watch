import React from "react";
import { useDispatch, useSelector } from "react-redux";
import handleKeyPress from "../actions/handleKeyPress";
import setSearchInput from "../actions/setSearchInput";
import "../css/SearchBar.css"

export default function SearchBar() {
  let search = useSelector((state) => state.nasa.nasaSearchInput);
  let nasa = useSelector((state) => state.nasa.nasaSearchResult);
  const dispatch = useDispatch();
  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        onChange={(e) => setSearchInput(dispatch, e.target.value)}
        onKeyPress={(e) => handleKeyPress(e, dispatch, search)}
        placeholder="search NASA images..."
      />
    </div>
  );
}
