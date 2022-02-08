import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.baptistefaidherbe.fr',
  timeout: 20000,
});

export default api;
