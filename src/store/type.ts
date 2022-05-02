import { UserProp } from "./reducers/user/type";
import { CountProp } from "./reducers/count/type";
import { MemberProp } from "./reducers/member/type";
/* type  */
export default interface typeStore {
  user: UserProp;
  count: CountProp;
  member: MemberProp
 
}
