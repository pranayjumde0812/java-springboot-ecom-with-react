import axios from "axios";

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

api.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request;
},
(config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error) => {
  console.log('Request Error', error)
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  console.log('Response Received', response)
  return response;
},
(error) => {
  console.log('Response Error', error)
  if(error.response && error.response.status === 401){
    console.error('Unauthorized access')
  }
  if(error.response && error.response.status === 404){
    console.error('Resource not found')
  }
  if(error.response && error.response.status === 500){
    console.error('Internal server error')
  }
  return Promise.reject(error);
}
)

export default api;