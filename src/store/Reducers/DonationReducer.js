import {
    DONATION,
    DONATION_SUCCESS,
    DONATION_ERROR,
    UPLOAD_DONATION,
    UPLOAD_DONATION_SUCCESS,
    UPLOAD_DONATION_ERROR,
} from "../Actions/Types";

const initialState = {
    donationSuccess: false,
    donationLoading: false,
    donationError: '',
    donationData: JSON.parse(localStorage.getItem('donation')),
    uploadDonationSuccess: false,
    uploadDonationLoading: true,
    uploadDonationError: '',
    uploadDonationData: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    console.log(type, payload)
    switch (type) {
        case DONATION:
            return {
                ...state,
                donationSuccess: false,
                donationLoading: true,
                donationError: '',
                donationData: {},
            }
        case DONATION_SUCCESS:
            return {
                ...state,
                donationSuccess: true,
                donationLoading: false,
                donationError: '',
                donationData: { ...payload },
            };
        case DONATION_ERROR:
            return {
                ...state,
                donationSuccess: false,
                donationLoading: false,
                donationError: payload,
                donationData: {},
            };
        case UPLOAD_DONATION:
            return {
                ...state,
                uploadDonationSuccess: false,
                uploadDonationLoading: true,
                uploadDonationError: '',
                uploadDonationData: {},
            }
        case UPLOAD_DONATION_SUCCESS:
            return {
                ...state,
                uploadDonationSuccess: true,
                uploadDonationLoading: false,
                uploadDonationError: '',
                uploadDonationData: { ...payload },
            };
        case UPLOAD_DONATION_ERROR:
            return {
                ...state,
                uploadDonationSuccess: false,
                uploadDonationLoading: false,
                uploadDonationError: payload,
                uploadDonationData: {},
            };
        default:
            return state;
    }
}
