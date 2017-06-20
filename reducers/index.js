import { combineReducers } from 'redux-immutable';
import selectedLocation from './selectedLocation';
import iplay from './iplay';
import dialog from './dialog';

const todoApp = combineReducers({
  iplay,
});

export default todoApp;
