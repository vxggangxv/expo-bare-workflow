import axios from 'axios';
// import { axs } from './config/axiosConfig';
import request from './config/axiosUtils';

// const domain = 'https://jsonplaceholder.typicode.com';
const basPath = `https://jsonplaceholder.typicode.com/todos`;

export function getTodo(id) {
  return request.get(`${basPath}/${id}`);
}

export function getTodos() {
  return axios.get(`https://jsonplaceholder.typicode.com/todos`);
}
