import axios from 'axios';

const url = 'https://swapi.dev/api/';
const baseURL = url;

export const $host = axios.create({
  baseURL,
});
