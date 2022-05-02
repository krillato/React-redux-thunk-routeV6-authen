export interface MemberProp{
    member: object;
}

export const initialState: MemberProp = {
    member : {}
}

export interface MemberAction {
    type: string,
    payload: MemberProp
}

