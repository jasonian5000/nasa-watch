const setNewsResults = (dispatch, value) => {
  dispatch({ type: "SET_NEWS_RESULTS", payload: value });
};

export default setNewsResults;
