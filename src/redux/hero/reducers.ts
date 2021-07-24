import {Reducer} from 'redux';
import {HeroAction, HeroReducer} from './types';

const initialState: HeroReducer = {
  heroes: [],
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
    default:
      return state;
  }
};
