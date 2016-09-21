/**
 *  Entrance.js launch the application.
 *
 *  @author  <%= author %>
 *
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";

import routes from '../routes/app-routes.jsx';
import store from '../store.js';

class Entrance {

    constructor() {}

    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        injectTapEventPlugin();
    }

    launch() {
      ReactDOM.render(
        <Provider store={store}>
          <Router history={hashHistory}>
            { routes }
          </Router>
        </Provider>,
      document.querySelector('#view'));
    }

    run() {
        this.beforeStart();
        this.launch();
    }

}

export default Entrance;
