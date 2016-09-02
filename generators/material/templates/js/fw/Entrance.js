/**
 *  Entrance.js launch the application.
 *
 *  @author  <%= author %>
 *
 */
'use strict';
import {Splash} from 'splash-screen';
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

    _destroySplash() {
        let _this = this;
        Splash.destroy();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
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
        this._destroySplash();
        this.launch();
    }

}

export default Entrance;
