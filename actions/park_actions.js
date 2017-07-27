import axios from 'axios';
import qs from 'qs';

import {
  FETCH_PARKS,
  LIKE_PARK,
  CLEAR_LIKED_PARKS
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

export const fetchParks = (region, callback) => {

return ( dispatch ) => { axios.get(`http://api.brewerydb.com/v2/locations/?key=e14450a73af348f11170c33ec926ca08&postalCode=98103`)
.then((response) => {
    dispatch({
      type: FETCH_PARKS,
      payload: response.data
    });
    callback();
      console.log(response.data.data);
      console.log(response.status);
    });
  };
};

export const likePark = (park) => {
  return {
    payload: park,
    type: LIKE_PARK
  }
}

export const clearLikedParks = () => {
  return { type: CLEAR_LIKED_PARKS }
};
