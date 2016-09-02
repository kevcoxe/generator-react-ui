'use strict';

import _ from 'lodash';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Application from '../Application.jsx';
import Index from '../pages/index.jsx';

import routes from '../config/routes.json';


const components = {};

function requireComponents(routeName) {
  const route = this[routeName.split('/').pop()];

  const componentName   = routeName.split('/').map(_.camelCase).join('/');
  components[routeName] = require(`../pages/${componentName}.jsx`).default;

  if (_.isPlainObject(route.routes)) {
    Object.keys(route.routes)
      .map(subrouteName => `${routeName}/${subrouteName}`)
      .map(requireComponents, route.routes);
  }
};

function generateRoutes(routeName) {
  const route = this[routeName.split('/').pop()];

  return (
    <Route path={route.path} component={components[routeName]} key={routeName}>
      {_.isPlainObject(route.routes) ?
        Object.keys(route.routes)
        .map(subrouteName => `${routeName}/${subrouteName}`)
        .map(generateRoutes, route.routes)
        : null}
      </Route>
  )
}

Object.keys(routes).map(requireComponents, routes);


const AppRoutes = (
  <Route path="/" component={Application} title={'<%= title %>'}>
    {Object.keys(routes).map(generateRoutes, routes)}
    <IndexRoute component={Index} />
  </Route>
);

export default AppRoutes;

