import { GET_MEMBER } from "./action";
import { MemberProp, initialState, MemberAction } from "./type";

const reducer = (state: MemberProp = initialState, action: MemberAction) => {
    switch(action.type){
        case GET_MEMBER:
            return {...state, ...action.payload};
        default :
        return state;
    }
}

export default reducer;