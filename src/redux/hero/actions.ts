import {getHeroes, heroesSearch} from '../../api/hero';
import {AppThunk} from '../store/types';

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

export const searchHero = (searchedHero: any) =>
  <const>{
    type: 'SEARCH_HERO',
    searchedHero,
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
      console.log('what is here ', res);
      dispatch(searchHero(res));
    } catch (error: any) {
      console.log(error, 'error fetching search heroes');
    }
    dispatch(heroIsLoading(false));
  };
