import _ from 'lodash';
import {
  LIKE_PARK,
  CLEAR_LIKED_PARKS
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
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
