import { combineReducers } from "redux";
import login from "./loginReducers";
import team from "./teamReducer";

export default combineReducers({
  login,
  team,
});
