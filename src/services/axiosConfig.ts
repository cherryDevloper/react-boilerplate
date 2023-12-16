/* eslint-disable */

import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create an Axios instance with a base URL
const api: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests (in milliseconds)
});

// Interceptor for request configuration
api.interceptors.request.use(
  (config: any) => {
    // You can modify the request configuration here (e.g., add headers)
    // config.headers['Authorization'] = `Bearer ${getToken()}`;
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  },
);

// Interceptor for response handling
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // You can modify the response data here
    return response.data;
  },
  (error) => {
    // Handle response errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      //   console.error('Response error:', error.response.status, error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      //   console.error('Request error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      //   console.error('Error:', error.message);
    }
    return Promise.reject(error);
  },
);

export default api;
