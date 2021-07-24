import {Reducer} from 'redux';
import {HeroAction, HeroReducer} from './types';

const initialState: HeroReducer = {
  heroes: [],
  favorites: [],
  heroIsLoading: false,
};

export const hero: Reducer<HeroReducer, HeroAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'GET_CONTACTS':
      return {
        ...state,
        heroes: action.characters,
      };
    case 'HEROES_LOADING':
      return {
        ...state,
        heroIsLoading: action.status,
      };
    case 'ADD_HERO_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.hero],
      };
    case 'REMOVE_HERO_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(hero => hero.name !== action.hero),
      };
    default:
      return state;
  }
};
