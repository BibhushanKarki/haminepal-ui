import {
    DONATION_SUCCESS,
    DONATION_ERROR,
    DONATION_LOADING,
    UPLOAD_DONATION_SUCCESS,
    UPLOAD_DONATION_LOADING,
    UPLOAD_DONATION_ERROR,
} from "./Types";

import DonationService from "../Services/DonationService";

export const donate = (formData) => (dispatch) => {
    dispatch({
        type: DONATION_LOADING,
    });

    try {
        localStorage.setItem('donation', JSON.stringify({ ...formData, time: (new Date()).getTime() }));

        dispatch({
            type: DONATION_SUCCESS,
            payload: formData,
        });

    } catch (e) {
        dispatch({
            type: DONATION_ERROR,
            payload: e,
        });
    }

};

export const clearDonation = () => (dispatch) => {
    dispatch({
        type: DONATION_LOADING,
    });

    try {
        localStorage.setItem('donation', null);

        dispatch({
            type: DONATION_SUCCESS,
            payload: {},
        });
    } catch (e) {
        dispatch({
            type: DONATION_ERROR,
            payload: e,
        });
    }

};

export const uploadDonation = (amount) => (dispatch) => {
    dispatch({
        type: UPLOAD_DONATION_LOADING,
    });

    try {
        DonationService.uploadDonation({
            ...JSON.parse(localStorage.getItem('donation')),
            domation_amount: amount,
        }).then(resp => {
            dispatch({
                type: UPLOAD_DONATION_SUCCESS,
                payload: resp,
            });
        }, (err => {
            dispatch({
                type: UPLOAD_DONATION_ERROR,
                payload: err,
            });
        }))
    } catch (e) {
        dispatch({
            type: UPLOAD_DONATION_ERROR,
            payload: e,
        });
    }
};
