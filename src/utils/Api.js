import axios from 'axios';

const API_URL = 'https://haminepalorg.herokuapp.com/api/v1';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export default api;