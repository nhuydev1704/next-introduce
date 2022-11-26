import axios from 'axios';

const API_URL = typeof window !== 'undefined' ? window.location.protocol + '//' + window.location.host + '/api' : '';
const AxiosClient = axios.create({
    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
    },
});

export default AxiosClient;
