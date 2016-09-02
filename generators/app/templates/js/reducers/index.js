
import { combineReducers } from "redux";

import reduxData from '../config/redux.json';
import test from './testReducer.js';

const components = {
  test
};

function requireReducers(reducerName) {

  const componentName = _.camelCase(reducerName) + "Reducer";
  components[reducerName] = require(`./${componentName}.js`).default;

};

reduxData.reducers.map((reducer) => {
  requireReducers(reducer);
});

export default combineReducers(components)
