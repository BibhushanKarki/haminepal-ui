import {
    CONFIG_GOOGLE_MAPS_API_KEY,
    CONFIG_GOOGLE_MAPS_API_KEY_SUCCESS,
    CONFIG_GOOGLE_MAPS_API_KEY_ERROR,
    CONFIG_KHALTI_PUBLIC_KEY,
    CONFIG_KHALTI_PUBLIC_KEY_SUCCESS,
    CONFIG_KHALTI_PUBLIC_KEY_ERROR,
} from "../Actions/Types";

const initialState = {
    googleMapsApiKeySuccess: false,
    googleMapsApiKeyLoading: false,
    googleMapsApiKeyError: {},
    googleMapsApiKey: '',
    khaltiPublicKeySuccess: false,
    khaltiPublicKeyLoading: false,
    khaltiPublicKeyError: {},
    khaltiPublicKey: '',
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CONFIG_GOOGLE_MAPS_API_KEY:
            return {
                ...state,
                googleMapsApiKeySuccess: false,
                googleMapsApiKeyLoading: true,
                googleMapsApiKeyError: {},
                googleMapsApiKey: '',
            }
        case CONFIG_GOOGLE_MAPS_API_KEY_SUCCESS:
            return {
                ...state,
                googleMapsApiKeySuccess: true,
                googleMapsApiKeyLoading: false,
                googleMapsApiKeyError: {},
                googleMapsApiKey: payload.data.apiKey,
            };
        case CONFIG_GOOGLE_MAPS_API_KEY_ERROR:
            return {
                ...state,
                googleMapsApiKeySuccess: false,
                googleMapsApiKeyLoading: false,
                googleMapsApiKeyError: payload,
                googleMapsApiKey: '',
            };
        case CONFIG_KHALTI_PUBLIC_KEY:
            return {
                ...state,
                khaltiPublicKeySuccess: false,
                khaltiPublicKeyLoading: true,
                khaltiPublicKeyError: {},
                khaltiPublicKey: '',
            }
        case CONFIG_KHALTI_PUBLIC_KEY_SUCCESS:
            return {
                ...state,
                khaltiPublicKeySuccess: true,
                khaltiPublicKeyLoading: false,
                khaltiPublicKeyError: {},
                khaltiPublicKey: payload.data.publicKey,
            };
        case CONFIG_KHALTI_PUBLIC_KEY_ERROR:
            return {
                ...state,
                khaltiPublicKeySuccess: false,
                khaltiPublicKeyLoading: false,
                khaltiPublicKeyError: payload,
                khaltiPublicKey: '',
            };
        default:
            return state;
    }
}
