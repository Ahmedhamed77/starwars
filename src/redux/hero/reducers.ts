import {Reducer} from 'redux';
import {HeroAction, HeroReducer} from './types';

const initialState: HeroReducer = {
  heroes: [],
  heroIsLoading: false,
  heroCopy: [],
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
        heroCopy: action.characters,
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
    case 'FILTER_HEROS':
      return {
        ...state,
        heroes:
          action.filterType === 'all'
            ? state.heroCopy
            : state.heroCopy.filter(hero => hero.gender === action.filterType),
      };
    default:
      return state;
  }
};
