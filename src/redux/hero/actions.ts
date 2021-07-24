import {getHeroes} from '../../api/hero';
import {AppThunk} from '../store/types';

export const getHeroesData = (characters: any) =>
  <const>{
    type: 'GET_CONTACTS',
    characters,
  };

export const fetchCharactersData =
  (payload: number): AppThunk =>
  async dispatch => {
    try {
      const res = await getHeroes(payload);
      dispatch(getHeroesData(res));
    } catch (error: any) {
      console.log(error, 'error fetching heroes data');
    }
  };
