'use strict';

import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

import _ from 'lodash';
import UI from 'UI';

import MySnackbar from './MySnackbar.jsx';


class MyDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }


  _handleClose(showMessage) {
    if (showMessage) {
      this._handleSnackbarTouchTap();
    }
    this.props.handleClose();
  }


  _handleSnackbarTouchTap() {
    this.setState({
      open: true,
      message: "You have an alert!"
    });
  }


  _handleSnackbarRequestClose() {
    this.setState({
      open: false
    });
  }


  render() {

    const drawerNavStyle = {
      backgroundColor: this.context.muiTheme.palette.primary1Color
    }

    const { routes } = this.props;
    const routeNames = Object.keys(routes) || [];

    const routeLinks = routeNames.map((routeName, i) => {
      let route = routes[routeName];
      return (
        <Link
          to={route.path}
          onClick={this._handleClose.bind(this, false)}
          style={{ textDecoration: "none" }}
          key={i}
        >
          <MenuItem>{ route.label }</MenuItem>
        </Link>
      )
    });

    return (
      <div>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleDrawerEvent(open)}
        >
          <Toolbar style={drawerNavStyle}>
            <ToolbarGroup>
              <ToolbarTitle style={{color: this.context.muiTheme.palette.alternateTextColor}} text="Navbar" />
            </ToolbarGroup>
          </Toolbar>

          <Subheader>Routes</Subheader>

          { routeLinks }

          <Divider />

          <Subheader>Random</Subheader>
          <MenuItem onTouchTap={this._handleClose.bind(this, true)} style={{color: this.context.muiTheme.palette.accent1Color}}>Show Alert</MenuItem>
        </Drawer>
        <MySnackbar
          open={this.state.open}
          handleRequestClose={this._handleSnackbarRequestClose.bind(this)}
          message={this.state.message}
        />
      </div>
    );
  }
}

MyDrawer.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default MyDrawer;
