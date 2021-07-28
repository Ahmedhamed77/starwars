import {getPlanet} from '../../api/planet';
import {AppThunk} from '../store/types';

export const fetchPlanet = (planet: any) =>
  <const>{
    type: 'FETCH_PLANET',
    planet,
  };

export const planetInfo =
  (url: string): AppThunk =>
  async dispatch => {
    console.log(url, 'here');
    try {
      const res = await getPlanet(url);
      console.log(res, 'reees');
      dispatch(fetchPlanet(res));
    } catch (error) {
      console.log(error, 'error');
    }
  };
