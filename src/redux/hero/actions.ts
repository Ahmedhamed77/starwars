import {getHeroes, heroesSearch} from '../../api/hero';
import {AppThunk} from '../store/types';
import {Hero} from './types';
export const getHeroesData = (characters: Hero[]) =>
  <const>{
    type: 'GET_CONTACTS',
    characters,
  };

export const heroIsLoading = (status: boolean) =>
  <const>{
    type: 'HEROES_LOADING',
    status,
  };

export const searchHero = (searchedHero: Hero[]) =>
  <const>{
    type: 'SEARCH_HERO',
    searchedHero,
  };

export const filterHeros = (filterType: string) =>
  <const>{
    type: 'FILTER_HEROS',
    filterType,
  };

export const fetchCharactersData =
  (page?: number): AppThunk =>
  async dispatch => {
    dispatch(heroIsLoading(true));
    try {
      const res = await getHeroes(page);
      dispatch(getHeroesData(res));
    } catch (error: any) {
      console.log(error, 'error fetching heroes data');
    }
    dispatch(heroIsLoading(false));
  };

export const fetchSearchedHeroes =
  (query: string): AppThunk =>
  async dispatch => {
    dispatch(heroIsLoading(true));

    try {
      const res = await heroesSearch(query);
      dispatch(searchHero(res));
    } catch (error: any) {
      console.log(error, 'error fetching search heroes');
    }
    dispatch(heroIsLoading(false));
  };

export const filterHeroesAction =
  (filterType: string): AppThunk =>
  async dispatch => {
    dispatch(filterHeros(filterType));
  };
