export interface CountProp {
  count: number;
  name: string;
}

//ค่าเริ่มต้น
export const initialState: CountProp = {
  count: 0,
  name: ""
};

//การทำงาน
export interface countAction {
  type: string;
  payload: CountProp;
}

//



