import initialState from "./initialState";

const news = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWS_RESULTS":
      return {
        ...state,
        spaceFlightNewsResults: action.payload,
      };
    case "SET_REPORT_RESULTS":
      return {
        ...state,
        spaceFlightReportsResults: action.payload,
      };
    default:
      return state;
  }
};

export default news;
