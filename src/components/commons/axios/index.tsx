import axios from "axios"


const client = axios.create({
  baseURL: 'localhost:3000'
});

export default client;
