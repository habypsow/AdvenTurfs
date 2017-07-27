import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_PLACE,
  CLEAR_LIKED_PLACES
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
    return action.payload.likedPlaces || [];
    case CLEAR_LIKED_PLACES:
    return [];
    case LIKE_PLACE:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    default:
    return state;
  }
}
