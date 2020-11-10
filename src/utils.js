import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.VUE_APP_API_HOST
});

export const Errors = {
    NOT_FOUND: 'Объект не найден',
}
