import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_PARK,
  CLEAR_LIKED_PARKS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case REHYDRATE:
    return action.payload.likedParks || [];
    case CLEAR_LIKED_PARKS:
    return [];
    case LIKE_PARK:
      return _.uniqBy([
        action.payload, ...state
      ], 'id');
    default:
    return state;
  }
}
