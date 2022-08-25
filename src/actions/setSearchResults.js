const setSearchResults = (dispatch, value) => {
  dispatch({ type: "SET_SEARCH_RESULTS", payload: value });
};

export default setSearchResults;
