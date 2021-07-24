import {$host} from '../axios';

export const getHeroes = async () => {
  const response = await $host.get(`people/`);
  return response.data.results;
};
