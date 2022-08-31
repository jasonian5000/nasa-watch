import initialState from "./initialState";

const nasa = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        nasaImageResults: action.payload,
      };
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        nasaSearchInput: action.payload,
      };
    default:
      return state;
  }
};

export default nasa;