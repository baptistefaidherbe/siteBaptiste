import axios from 'axios';

const api = axios.create({
  baseURL: 'https://explorastro.baptistefaidherbe.fr',
  timeout: 20000,
});

export default api;
