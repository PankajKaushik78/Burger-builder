import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-react-ed651-default-rtdb.firebaseio.com/',
});

export default instance;