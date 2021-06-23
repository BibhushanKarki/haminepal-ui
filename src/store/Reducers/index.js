import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import auth from "./AuthReducer";
import message from "./MsgReducer";
import donation from "./DonationReducer";
import volunteer from "./VolunteerReducer";
import config from "./ConfigReducer";

const reducers = combineReducers({
    Test: TestReducer,
    auth,
    message,
    donation,
    volunteer,
    config,
    //other reducers come here...
});

export default reducers;
