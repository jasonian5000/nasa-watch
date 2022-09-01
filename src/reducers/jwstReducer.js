import initialState from "./initialState";

const jwst = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JWST_RESULTS":
      return {
        ...state,
        jwImageResults: action.payload,
      };
    default:
      return state;
  }
};

export default jwst;
