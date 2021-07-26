import {combineReducers} from 'redux';
import {hero} from '../hero/reducers';
import {heroFavorites} from '../heroFavorite/reducers';
import {pagination} from '../pagination/reducers';

export const appReducers = combineReducers({
  hero,
  heroFavorites,
  pagination,
});
