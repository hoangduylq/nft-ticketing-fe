import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // console.log(error.response.data);
    return Promise.reject(error.response.data);
  }
);

export default axiosClient;