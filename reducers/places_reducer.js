import {
  FETCH_PLACES
} from '../actions/types';

const INITIAL_STATE = {
  data: []
};

export default function(state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PLACES:
      return action.payload;
    default: return state;
  }
}
