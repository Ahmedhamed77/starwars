import {hero} from '../hero/types';
import {AppThunk} from '../store/types';

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

export const favoriteIsLoading = (status: boolean) =>
  <const>{
    type: 'FAVORITE_IS_LOADING',
    status,
  };
//   };

export const addHeroFavorite =
  (hero: hero): AppThunk =>
  async dispatch => {
    dispatch(favoriteIsLoading(true));
    const arr: any = [];
    dispatch(addHeroToFavorite(hero));
    localStorage.setItem(`${hero.url}`, JSON.stringify(arr));

    dispatch(favoriteIsLoading(false));
  };

export const removeHeroFavorite =
  (hero: any): AppThunk =>
  async dispatch => {
    dispatch(favoriteIsLoading(true));

    dispatch(removeHeroFromFavorite(hero));

    dispatch(favoriteIsLoading(false));
  };
