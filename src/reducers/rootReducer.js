import { combineReducers } from "redux";
import nasa from "./nasaReducer";

const rootReducer = combineReducers({ nasa });

export default rootReducer;
