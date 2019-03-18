import axios from 'axios';

axios.defaults.headers.common = {
    'Content-Type': 'application/json',
};

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});

export function setToken(token) {
    instance.defaults.headers.common['auth'] = `${token}`;
    localStorage.setItem('auth', token);
}


export default {setToken, instance};