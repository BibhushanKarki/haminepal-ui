import api from '../../utils/Api';

const GET_GOOGLE_MAPS_API_KEY_URL = "/config/google-maps-api-key";
const GET_KHALTI_PUBLIC_KEY_URL = "/config/khalti-public-key";

const googleMapsApiKey = () => {
    return api.get(GET_GOOGLE_MAPS_API_KEY_URL);
};

const khaltiPublicKey = () => {
    return api.get(GET_KHALTI_PUBLIC_KEY_URL);
};

export default {
    googleMapsApiKey,
    khaltiPublicKey,
}