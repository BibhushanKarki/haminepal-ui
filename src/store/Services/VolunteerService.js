import api from '../../utils/Api';

const POST_VOLUNTEER_URL = "/volunteers";

const volunteerSignUp = (volunteer) => {
    return api.post(POST_VOLUNTEER_URL, {
        ...volunteer
    });
};

export default {
    volunteerSignUp
}