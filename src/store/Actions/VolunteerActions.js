import {
    VOLUNTEER_SIGN_UP_SUCCESS,
    VOLUNTEER_SIGN_UP,
    VOLUNTEER_SIGN_UP_ERROR,
} from "./Types";

import VolunteerService from "../Services/VolunteerService";

export const volunteerSignUp = (volunteer) => (dispatch) => {
    dispatch({
        type: VOLUNTEER_SIGN_UP,
    });

    try {
        VolunteerService.volunteerSignUp(volunteer).then(resp => {
            dispatch({
                type: VOLUNTEER_SIGN_UP_SUCCESS,
                payload: resp.data,
            });
        }, (err => {
            dispatch({
                type: VOLUNTEER_SIGN_UP_ERROR,
                payload: err,
            });
        }))
    } catch (err) {
        dispatch({
            type: VOLUNTEER_SIGN_UP_ERROR,
            payload: err,
        });
    }
};
