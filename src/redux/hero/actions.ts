import {heroesPagination} from './../../api/hero/index';
import {getHeroes, heroesSearch} from '../../api/hero';
import {AppThunk} from '../store/types';
import {hero} from './types';

export const getHeroesData = (characters: any) =>
  <const>{
    type: 'GET_CONTACTS',
    characters,
  };

export const heroIsLoading = (status: boolean) =>
  <const>{
    type: 'HEROES_LOADING',
    status,
  };

export const addHeroToFavorite = (hero: any) =>
  <const>{
    type: 'ADD_HERO_TO_FAVORITE',
    hero,
  };

export const removeHeroFromFavorite = (hero: any) =>
  <const>{
    type: 'REMOVE_HERO_FROM_FAVORITE',
    hero,
  };

export const searchHero = (searchedHero: any) =>
  <const>{
    type: 'SEARCH_HERO',
    searchedHero,
  };

export const handlePaginationHero = (heroPagination: any) =>
  <const>{
    type: 'HERO_PAGINATION',
    heroPagination,
  };

export const fetchCharactersData = (): AppThunk => async dispatch => {
  dispatch(heroIsLoading(true));
  try {
    const res = await getHeroes();
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
      console.log('what is here ', res);
      dispatch(searchHero(res));
    } catch (error: any) {
      console.log(error, 'error fetching search heroes');
    }
    dispatch(heroIsLoading(false));
  };

export const heroPagination =
  (page: number): AppThunk =>
  async dispatch => {
    dispatch(heroIsLoading(true));
    console.log(page, 'what is page');
    try {
      const res = await heroesPagination(page);
      console.log(res, 'resss =');
      dispatch(handlePaginationHero(res));
    } catch (error: any) {
      console.log('error pagination', error);
    }
    dispatch(heroIsLoading(false));
  };
