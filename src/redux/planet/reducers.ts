import {Reducer} from 'redux';
import {PlanetAction, PlanetReducer} from './types';

const initialState: PlanetReducer = {
  planet: [],
};

export const planetHero: Reducer<PlanetReducer, PlanetAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'FETCH_PLANET':
      return {
        ...state,
        planet: [...state.planet, action.planet],
      };
    default:
      return state;
  }
};
