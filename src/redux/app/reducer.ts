import {combineReducers} from 'redux';
import {hero} from '../hero/reducers';

export const appReducers = combineReducers({
  hero,
});
