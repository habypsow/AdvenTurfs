import axios from 'axios';
import qs from 'qs';

import {
  FETCH_PARKS
} from './types';

// const ROOT_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';
//
// const PARK_QUERY_PARAMS = {
//   key: 'AIzaSyDl3wgOiDflGbUlR6aTuWkb0-VdaJC3PLY',
//   location: '47.6097,-122.3331',
//   radius: '100',
//   type: 'park'
// };
//
// const buildUrl = () => {
//   const query = qs.stringify({ ...PARK_QUERY_PARAMS });
//   console.log(query);
//   return `${ROOT_URL}${query}`;
//
// }

export const fetchParks = () => {

return ( dispatch ) => { axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.6097,-122.3331&radius=1000&type=park&key=AIzaSyDl3wgOiDflGbUlR6aTuWkb0-VdaJC3PLY`)
.then((response) => {
    dispatch({
      type: FETCH_PARKS,
      payload: response.data
    });
      console.log(response.data);
      console.log(response.status);
    });
  };
};
