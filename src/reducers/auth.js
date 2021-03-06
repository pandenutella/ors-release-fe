import { LOGIN_ACCOUNT, LOGOUT_ACCOUNT } from "../actionTypes";

const initialAuth = {
    authenticated: false,
    account: null,
};

export default function auth(state = initialAuth, action) {
    switch (action.type) {
        case LOGIN_ACCOUNT:
            return { authenticated: true, account: action.payload };
        case LOGOUT_ACCOUNT:
            return { authenticated: false, account: null };
        default:
            return state;
    }
}
