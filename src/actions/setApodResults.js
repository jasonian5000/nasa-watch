const setApodResults = (dispatch, value) => {
  dispatch({ type: "SET_APOD_RESULTS", payload: value });
};

export default setApodResults;
