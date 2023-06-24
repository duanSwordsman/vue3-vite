import Axios from 'axios';

const sevice = Axios.create({
  baseURL: '/',
  timeout: 100000,
});

sevice.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

sevice.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export default sevice;
