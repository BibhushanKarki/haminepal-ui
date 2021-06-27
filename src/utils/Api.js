import axios from 'axios';

const API_URL = 'http://ec2-65-0-179-114.ap-south-1.compute.amazonaws.com:5000/api/v1';

const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

export default api;