import {$host} from '../axios';

export const getHeroes = async () => {
  const response = await $host.get('people/');
  return response.data.results;
};

export const heroesPagination = async (page: number) => {
  const response = await $host.get(`people/?page=${page}`);
  return response.data.results;
};

export const heroesSearch = async (query: string) => {
  const response = await $host.get(`people/?search=${query}`);
  return response.data.results;
};
