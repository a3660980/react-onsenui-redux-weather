import { combineReducers } from 'redux-immutable';
import selectedLocation from './selectedLocation';
import iplay from './iplay';
import gym from './gym';

const todoApp = combineReducers({
  iplay,
  gym
});

export default todoApp;
