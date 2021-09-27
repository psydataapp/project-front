import { combineReducers } from "redux";
import community from "./community";
import user from "./user";

const rootReducer = combineReducers({
  community,
  user,
});

export default rootReducer;
