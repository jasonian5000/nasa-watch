const setSearchInput = (dispatch, value) => {
  dispatch({ type: "SET_SEARCH_INPUT", payload: value });
};

export default setSearchInput;
