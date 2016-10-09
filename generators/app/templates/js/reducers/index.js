
import { combineReducers } from "redux";

import reduxData from '../config/redux.json';
import test from './testReducer.js';
var utils = require('./utils/index');

const components = {};

function requireReducers(reducerName) {

  const componentName = utils.camelCase(reducerName) + "Reducer";
  components[reducerName] = require(`./${componentName}.js`).default;

};

reduxData.reducers.map((reducer) => {
  requireReducers(reducer);
});

export default combineReducers(components)
