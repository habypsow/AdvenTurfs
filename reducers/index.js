import { combineReducers } from 'redux';
import auth from './auth_reducer';
import parks from './parks_reducer';
import likedParks from './likes_reducer';

export default combineReducers({
  auth, parks, likedParks
});
