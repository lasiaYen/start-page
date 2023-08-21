import axios from 'axios';

const baseURL = '';
const timeout = 5000;

const service = axios.create({
  baseURL,
  timeout,
});

service.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

service.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export default service;
