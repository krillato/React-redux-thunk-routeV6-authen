import { UserProp, initialState, UserAction } from "./type";
import { SET_USER, RESET_USER, SHOW_USER } from "./action";

const reducer = (state: UserProp = initialState, action: UserAction) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case RESET_USER:
      return initialState;
    case SHOW_USER: return state;
    default:
      return state;
  }
};

export default reducer;
