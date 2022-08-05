import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mcdonalds.trio.dev/',
});

export default api;
