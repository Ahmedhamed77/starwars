import axios from 'axios';

export const getPlanet = async (url?: string) => {
  const response = await axios.get(`${url}`);
  return response.data;
};
