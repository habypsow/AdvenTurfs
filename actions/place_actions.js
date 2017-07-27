import axios from 'axios';
import qs from 'qs';

import {
  FETCH_PLACES,
  LIKE_PLACE,
  CLEAR_LIKED_PLACES
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

export const fetchPlaces = (region, callback) => {

return ( dispatch ) => { axios.get(`http://api.brewerydb.com/v2/locations/?key=e14450a73af348f11170c33ec926ca08&postalCode=98122`)
.then((response) => {
    dispatch({
      type: FETCH_PLACES,
      payload: response.data
    });
    callback();
      console.log(response.data.data);
      console.log(response.status);
    });
  };
};

export const likePlace = (place) => {
  return {
    payload: place,
    type: LIKE_PLACE
  }
}

export const clearLikedPlaces = () => {
  return { type: CLEAR_LIKED_PLACES }
};
