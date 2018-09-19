import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://followreact.firebaseio.com/',
});

export default instance;
