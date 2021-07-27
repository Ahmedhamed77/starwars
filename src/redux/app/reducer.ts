import {combineReducers} from 'redux';
import {hero} from '../hero/reducers';
import {heroFavorites} from '../heroFavorite/reducers';

export const appReducers = combineReducers({
  hero,
  heroFavorites,
});
