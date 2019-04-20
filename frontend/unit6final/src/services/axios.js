import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3300',
    timeout: 1000,
    headers: {'content-type': 'application/json'}
  });

  export default instance;