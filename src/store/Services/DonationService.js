import api from '../../utils/Api';

const POST_DONATION_URL = "/donations";

const uploadDonation = (params) => {
    return api.post(POST_DONATION_URL, {
        ...params,
    });
};

export default {
    uploadDonation
}