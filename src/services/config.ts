import axios from "axios";


const client = axios.create();
client.defaults.baseURL = 'https://rickandmortyapi.com/api'
client.defaults.timeout = 10000;
client.defaults.withCredentials = false;

client.interceptors.request.use(
  async (config) => {
    config.headers!["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
   return err;
  }
);

export default client;