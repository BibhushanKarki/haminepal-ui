import axios from 'axios';

const POST_DONATION_URL = "/donation";

const uploadDonation = (params) => {
    return axios.post(POST_DONATION_URL, {
        ...params,
    });
};

export default {
    uploadDonation
}