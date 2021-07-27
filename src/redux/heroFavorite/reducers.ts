import {Reducer} from 'redux';
import {FavoritesAction, FavoritesReducer} from './types';

const initialState: FavoritesReducer = {
  favorites: [],
  favoriteIsLoading: false,
};

export const heroFavorites: Reducer<FavoritesReducer, FavoritesAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'ADD_HERO_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.hero],
      };
    case 'REMOVE_HERO_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          hero => hero.name !== action.hero.name,
        ),
      };
    case 'FAVORITE_IS_LOADING':
      return {
        ...state,
        favoriteIsLoading: action.status,
      };
    default:
      return state;
  }
};
