import {Planet} from './types';
import {getPlanet} from '../../api/planet';
import {AppThunk} from '../store/types';

export const fetchPlanet = (planet: Planet) =>
  <const>{
    type: 'FETCH_PLANET',
    planet,
  };

export const planetInfo =
  (url: string): AppThunk =>
  async dispatch => {
    try {
      const res = await getPlanet(url);
      dispatch(fetchPlanet(res));
    } catch (error) {
      console.log(error, 'error');
    }
  };
