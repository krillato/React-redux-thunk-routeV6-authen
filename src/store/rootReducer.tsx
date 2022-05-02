import { combineReducers } from "redux";
import user from "./reducers/user/reducer";
import count from "./reducers/count/reducer";
import member from "./reducers/member/reducer";

const rootReducer = combineReducers({
  user,
  count,
  member,
});

export default rootReducer;
