'use strict';

import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import myTheme from './themes/theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subheader from 'material-ui/Subheader';

import {Grid, Row, Col} from 'react-flexbox-grid';
import myFlexStyle from './styles/myFlexStyle.scss';

import Header from './components/Header.jsx';
import MyDrawer from './components/MyDrawer.jsx';
import MyCard from './components/Card.jsx';

import routes from './config/routes.json';


class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }


  getChildContext() {
    return {muiTheme: getMuiTheme(myTheme)};
  }


  _handleDrawerEvent(open) {
    this.setState({ open });
  }


  _handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }


  _handleClose() {
    this.setState({
      open: false
    })
  }


  render() {
    const { route } = this.props;
    const title = route.title || "Title"

    return (
      <div>
        <Header title={title} handleToggle={this._handleToggle.bind(this)}/>
        <Grid>
          <Row>
            <Col md={12} >
              { this.props.children }
            </Col>
          </Row>
        </Grid>
        <MyDrawer
          handleClose={this._handleClose.bind(this)}
          handleToggle={this._handleToggle.bind(this)}
          handleDrawerEvent={this._handleDrawerEvent.bind(this)}
          open={this.state.open}
          routes={routes}
        />
      </div>
    );
  }
}

Application.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};

export default Application;
