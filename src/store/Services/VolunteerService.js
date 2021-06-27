import api from '../../utils/Api';

const POST_VOLUNTEER_URL = "/volunteers";
const GET_VOLUNTEER_URL = "/volunteers";

const volunteerSignUp = (volunteer) => {

    const formData = new FormData();
    console.log(volunteer)
    for (var key in volunteer) {
        formData.append(key, volunteer[key]);
    }
    formData.set('avatar', volunteer.avatar[0])

    return api.post(POST_VOLUNTEER_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
};

const getVolunteers = () => {
    let params = {

    };

    return api.get(GET_VOLUNTEER_URL, { params });
};

export default {
    volunteerSignUp
}