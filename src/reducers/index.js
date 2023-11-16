import { combineReducers } from "redux";
import changeNumber from "./updown";

const rootReducer = combineReducers({
  changeNumber: changeNumber
});

export default rootReducer;
