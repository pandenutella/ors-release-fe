import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from "../actionTypes";

export const loginAccount = (account) => ({
    type: LOGIN_ACCOUNT,
    payload: account,
});

export const logoutAccount = () => ({
    type: LOGOUT_ACCOUNT,
});
