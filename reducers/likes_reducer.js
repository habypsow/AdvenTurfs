import _ from 'lodash';
import {
  LIKE_PARK
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case LIKE_PARK:
      return _.uniqBy([
        action.payload, ...state
      ], park.id);
    default:
    return state;
  }
}
