'use strict';

import React from 'react';

import Paper from 'material-ui/Paper';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { hidden } = this.props;

    const style = {
      height: "50px",
      width: "100%",
      marginTop: 40,
      textAlign: 'center',
      display: 'inline-block',
      backgroundColor: hidden ?
        this.context.muiTheme.palette.footerColor :
        this.context.muiTheme.palette.primary1Color
    };

    const zDepth = this.props.zDepth || 0;

    return (
      <Paper style={style} zDepth={zDepth}>
      </Paper>
    );
  }
}

Footer.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Footer;
