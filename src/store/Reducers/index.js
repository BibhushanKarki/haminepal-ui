import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import auth from "./AuthReducer";
import message from "./MsgReducer";
import donation from "./DonationReducer";

const reducers = combineReducers({
    Test: TestReducer,
    auth,
    message,
    donation,
    //other reducers come here...
});

export default reducers;
