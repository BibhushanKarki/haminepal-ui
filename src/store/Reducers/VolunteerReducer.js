import {
    VOLUNTEER_SIGN_UP,
    VOLUNTEER_SIGN_UP_SUCCESS,
    VOLUNTEER_SIGN_UP_ERROR,
} from "../Actions/Types";

const initialState = {
    volunteerSignUpSuccess: false,
    volunteerSignUpLoading: false,
    volunteerSignUpError: '',
    volunteerSignUpData: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case VOLUNTEER_SIGN_UP:
            return {
                ...state,
                volunteerSignUpSuccess: false,
                volunteerSignUpLoading: true,
                volunteerSignUpError: '',
                volunteerSignUpData: {},
            }
        case VOLUNTEER_SIGN_UP_SUCCESS:
            return {
                ...state,
                volunteerSignUpSuccess: true,
                volunteerSignUpLoading: false,
                volunteerSignUpError: '',
                volunteerSignUpData: payload.data,
            };
        case VOLUNTEER_SIGN_UP_ERROR:
            return {
                ...state,
                volunteerSignUpSuccess: false,
                volunteerSignUpLoading: false,
                volunteerSignUpError: payload,
                volunteerSignUpData: {},
            };
        default:
            return state;
    }
}
