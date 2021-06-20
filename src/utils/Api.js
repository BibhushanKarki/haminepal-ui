import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export default api;