import {$host} from '../axios';

export const getHeroes = async (page: number) => {
  const response = await $host.get(`people/?page=${page}`);
  return response.data;
};
