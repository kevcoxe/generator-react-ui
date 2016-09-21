
'use strict';

import React from 'react';
import { spacing } from 'material-ui/styles';


class CodeBlock extends React.Component {

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  shouldComponentUpdate({children}, nextState){
    return this.props.children !== children;
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {

    let borderColor = this.context.muiTheme.palette.borderColor;

    let styles = {
      padding: spacing.desktopGutter,
      margin: 0,
      borderRadius: '0 0 2px 2px',
      borderTop: 'solid 1px ' + borderColor,
    };

    return (
      <pre style={styles}>
        <code>{this.props.children}</code>
      </pre>
    );
  }
}

CodeBlock.contextTypes = {
  muiTheme: React.PropTypes.object
}

module.exports = CodeBlock;
