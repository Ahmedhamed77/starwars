import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore} from 'redux-persist';

import {persistAppReducer} from '../app/reducer';

export const store = createStore(
  persistAppReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
export const persistor = persistStore(store);
