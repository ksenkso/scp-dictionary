import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://134.0.119.210:3000'
});
