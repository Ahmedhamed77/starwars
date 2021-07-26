import {heroesPagination} from '../../api/hero';
import {AppThunk} from '../store/types';

export const handlePaginationHero = (heroPagination: any) =>
  <const>{
    type: 'HERO_PAGINATION',
    heroPagination,
  };
export const paginationLoading = (status: boolean) =>
  <const>{
    type: 'PAGINATION_LOADING',
    status,
  };

export const heroPagination =
  (page: number): AppThunk =>
  async dispatch => {
    dispatch(paginationLoading(true));
    console.log(page, 'what is page');
    try {
      const res = await heroesPagination(page);
      console.log(res, 'resss =');
      dispatch(handlePaginationHero(res));
    } catch (error: any) {
      console.log('error pagination', error);
    }
    dispatch(paginationLoading(false));
  };
