import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.26.65.144:4000/v1/',
});

export default api;
