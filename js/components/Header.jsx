'use strict';

import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import event from 'Event';
import _ from 'lodash';
import UI from 'UI';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
    };
    this._onResize = _.debounce(this._onResize, 150).bind(this);
  }

  _onLeftClick(e) {
    this.props.handleToggle();
    event.stop(e);
  }

  _onResize(e) {
    this.setState({
      zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
    });
  }

  componentWillMount() {
    window.addEventListener('resize', this._onResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize, false);
  }

  render() {

    const title = this.props.title || "React App";

    return (
      <AppBar title={title}
        iconElementLeft={
          <IconButton onMouseOver={ this._onLeftClick.bind(this) }>
            <NavigationMenu />
          </IconButton>
        }
        onLeftIconButtonTouchTap={ this._onLeftClick.bind(this) }
        zDepth={ this.state.zDepth } />
    );
  }
}

export default Header;
