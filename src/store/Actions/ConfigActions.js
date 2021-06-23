import {
    CONFIG_GOOGLE_MAPS_API_KEY_SUCCESS,
    CONFIG_GOOGLE_MAPS_API_KEY_LOADING,
    CONFIG_GOOGLE_MAPS_API_KEY_ERROR,
    CONFIG_KHALTI_PUBLIC_KEY_SUCCESS,
    CONFIG_KHALTI_PUBLIC_KEY_LOADING,
    CONFIG_KHALTI_PUBLIC_KEY_ERROR,
} from "./Types";

import ConfigService from "../Services/ConfigService";

export const getGoogleMapsApiKey = () => (dispatch) => {
    dispatch({
        type: CONFIG_GOOGLE_MAPS_API_KEY_LOADING,
    });

    try {
        ConfigService.googleMapsApiKey().then(resp => {
            dispatch({
                type: CONFIG_GOOGLE_MAPS_API_KEY_SUCCESS,
                payload: resp.data,
            });
        }, (err => {
            dispatch({
                type: CONFIG_GOOGLE_MAPS_API_KEY_ERROR,
                payload: err,
            });
        }))
    } catch (e) {
        dispatch({
            type: CONFIG_GOOGLE_MAPS_API_KEY_ERROR,
            payload: e,
        });
    }
};

export const getKhaltiPublicKey = () => (dispatch) => {
    dispatch({
        type: CONFIG_KHALTI_PUBLIC_KEY_LOADING,
    });

    try {
        ConfigService.khaltiPublicKey().then(resp => {
            dispatch({
                type: CONFIG_KHALTI_PUBLIC_KEY_SUCCESS,
                payload: resp.data,
            });
        }, (err => {
            dispatch({
                type: CONFIG_KHALTI_PUBLIC_KEY_ERROR,
                payload: err,
            });
        }))
    } catch (e) {
        dispatch({
            type: CONFIG_KHALTI_PUBLIC_KEY_ERROR,
            payload: e,
        });
    }
};
