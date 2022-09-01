import { combineReducers } from "redux";
import nasa from "./nasaReducer";
import apod from "./apodReducer";
import jwst from "./jwstReducer";
import news from "./NewsReducer";

const rootReducer = combineReducers({ nasa, jwst, apod, news });

export default rootReducer;
