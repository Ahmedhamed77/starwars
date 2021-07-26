import {Reducer} from 'redux';
import {PaginationReducer, PaginationAction} from './types';

const initialState: PaginationReducer = {
  heroesPagination: [],
  PaginationIsLoading: false,
};

export const pagination: Reducer<PaginationReducer, PaginationAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'HERO_PAGINATION':
      return {
        ...state,
        heroesPagination: action.heroPagination,
      };
    case 'PAGINATION_LOADING':
      return {
        ...state,
        PaginationIsLoading: action.status,
      };
    default:
      return state;
  }
};
