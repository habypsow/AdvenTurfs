import { combineReducers } from 'redux';
import auth from './auth_reducer';
import places from './places_reducer';
import likedPLaces from './likes_reducer';
import clearLikedPlaces from './likes_reducer';

export default combineReducers({
  auth, places, likedPlaces, clearLikedPlaces
});
