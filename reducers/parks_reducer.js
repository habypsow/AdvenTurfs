import {
  FETCH_PARKS
} from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PARKS:
      return action.payload;
    default: return state;
  }
}
