export interface UserProp {  
  email: string;
  role: string;
  token: string;
  time: string
}

export const initialState: UserProp = {email: "",role:"",token:"",time: ""};

export interface UserAction {
  type: string;
  payload: UserProp;
}
