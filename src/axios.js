import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-ec77e.cloudfunctions.net/api',
});

export default instance;
