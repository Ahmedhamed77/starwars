import axios from 'axios';

export const getPlanet = async (url?: string) => {
  const response = await axios.get(`${url}`);
  console.log('what is respone', response);
  return response.data;
};
