'use strict';

import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import _ from 'lodash';
import UI from 'UI';


class MySnackbar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const message = this.props.message || "new alert";

    return (
      <Snackbar
        open={this.props.open}
        message={message}
        autoHideDuration={4000}
        onRequestClose={this.props.handleRequestClose}
      />
    );
  }
}

export default MySnackbar;
