import {getHeroes} from '../../api/hero';
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
