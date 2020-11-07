import { combineReducers } from "redux";

import accounts from "./accounts";
import auth from "./auth";
import stories from "./stories";

export default combineReducers({
    accounts,
    auth,
    stories,
});
