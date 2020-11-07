import { LOGIN_ACCOUNT } from "../actionTypes";

export const loginAccount = (account) => ({
    type: LOGIN_ACCOUNT,
    payload: account,
});
