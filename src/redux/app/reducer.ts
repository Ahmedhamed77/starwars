import {combineReducers} from 'redux';
import {hero} from '../hero/reducers';
import {planetHero} from '../planet/reducers';
import {heroFavorites} from '../heroFavorite/reducers';

export const appReducers = combineReducers({
  hero,
  heroFavorites,
  planetHero,
});
