import axios from 'axios';
import qs from 'qs';

import {
  FETCH_PARKS
} from './types';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

const PARK_QUERY_PARAMS = {
  key: 'AIzaSyDl3wgOiDflGbUlR6aTuWkb0-VdaJC3PLY',
  location: '47.6097,-122.3331',
  radius: '100',
  type: 'park'
};

const buildUrl = () => {
  const query = qs.stringify({ ...PARK_QUERY_PARAMS });
  return `${ROOT_URL}${query}`;

}

export const fetchParks = (region) => async (dispatch) => {
let { data } = await axios.get(buildUrl);
dispatch({ type: FETCH_PARKS, payload: data });
console.log(data);
  };
