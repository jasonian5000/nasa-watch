import initialState from "./initialState";

const apod = (state = initialState, action) => {
  switch (action.type) {
    case "SET_APOD_RESULTS":
      return {
        ...state,
        apodImageResults: action.payload,
      };
    default:
      return state;
  }
};

export default apod;
