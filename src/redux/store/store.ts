import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {hero} from '../hero/reducers';
import {heroFavorites} from '../heroFavorite/reducers';

const rootReducer = combineReducers({
  hero,
  heroFavorites,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
