import { CountProp, initialState, countAction } from "./type";
import { SET_COUNT, RESET_COUNT, THUNK_ACTION } from "./action";


const reducer = (state: CountProp = initialState, action: countAction) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, ...action.payload };
    case RESET_COUNT:
      return initialState;
      case THUNK_ACTION : 
      return 
    default:
      return state;
  }
};

export default reducer;
