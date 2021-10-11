import axios from 'axios';

const baseURL = window.globalConfig.api.endpoint_uri;

const apiClient = axios.create({
  baseURL: 'http://google.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
