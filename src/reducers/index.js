import { combineReducers } from "redux";
import buttonReducer from "./button";
import gatherPhotosReducer from "./gatherPhoto";

const rootReducer = combineReducers({
    buttonReducer,
    gatherPhotosReducer
})

export default rootReducer;
  