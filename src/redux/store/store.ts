// import {createStore, applyMiddleware, Action} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunkMiddleware from 'redux-thunk';

// import {appReducers} from '../app/reducer';
// import {Store} from './types';

// export const rootReducer = () => {
//   return (state: Store | undefined, action: Action) => {
//     if (action.type === 'RESET_STATE') {
//       state = undefined;
//     }
//     return appReducers(state, action);
//   };
// };

// export const resetState = () =>
//   <const>{
//     type: 'RESET_STATE',
//   };

// export const store = createStore(
//   rootReducer(),
//   composeWithDevTools(applyMiddleware(thunkMiddleware)),
// );import {createStore, combineReducers, applyMiddleware} from 'redux';

// FIXME: types of reducers
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import {hero} from '../hero/reducers';

const rootReducer = combineReducers({
  hero,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
