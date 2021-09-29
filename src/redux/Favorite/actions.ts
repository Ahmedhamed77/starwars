import {Hero} from '../hero/types';
import {AppThunk} from '../store/types';

export const addHeroToFavorite = (hero: Hero) =>
  <const>{
    type: 'ADD_HERO_TO_FAVORITE',
    hero,
  };

export const removeHeroFromFavorite = (hero: Hero) =>
  <const>{
    type: 'REMOVE_HERO_FROM_FAVORITE',
    hero,
  };

export const favoriteIsLoading = (status: boolean) =>
  <const>{
    type: 'FAVORITE_IS_LOADING',
    status,
  };

export const filterFavorites = (filterType: string) =>
  <const>{
    type: 'FILTER_FAVORTIES',
    filterType,
  };

export const addHeroFavorite =
  (hero: Hero): AppThunk =>
  async dispatch => {
    dispatch(favoriteIsLoading(true));
    dispatch(addHeroToFavorite(hero));
    dispatch(favoriteIsLoading(false));
  };

export const removeHeroFavorite =
  (hero: Hero): AppThunk =>
  async dispatch => {
    dispatch(favoriteIsLoading(true));

    dispatch(removeHeroFromFavorite(hero));

    dispatch(favoriteIsLoading(false));
  };

export const filterHeroesFavorties =
  (filterType: string): AppThunk =>
  async dispatch => {
    dispatch(filterFavorites(filterType));
  };
