
import axios from 'axios';
import store from '../store.js';

export function getDownloads() {
  store.dispatch({type: "FETCH_DOWNLOADS_PENDING"});
  axios.get('https://api.npmjs.org/downloads/point/last-month/generator-react-ui')
    .then(function (response) {
      store.dispatch({type: "FETCH_DOWNLOADS_FULFILLED", payload: response});
    })
    .catch(function (error) {
      store.dispatch({type: "FETCH_DOWNLOADS_REJECTED", payload: error});
    });
};
