import {combineReducers} from 'redux';
import {hero} from '../hero/reducers';
import {planetHero} from '../planet/reducers';
import {heroFavorites} from '../Favorite/reducers';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {Store} from '../store/types';

const persistConfig = {
  key: 'Root',
  storage,
  whiteList: ['heroFavorites'],
};

export const appReducers = combineReducers({
  hero,
  heroFavorites,
  planetHero,
});
export const persistAppReducer = persistReducer<Store, any>(
  persistConfig,
  appReducers,
);
