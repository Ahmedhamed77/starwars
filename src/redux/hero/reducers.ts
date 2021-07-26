import {Reducer} from 'redux';
import {HeroAction, HeroReducer} from './types';

const initialState: HeroReducer = {
  heroes: [],
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
    case 'SEARCH_HERO':
      return {
        ...state,
        heroes: action.searchedHero,
      };
    default:
      return state;
  }
};
