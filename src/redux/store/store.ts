import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {appReducers} from '../app/reducer';

export const store = createStore(
  appReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
