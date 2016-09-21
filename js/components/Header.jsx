'use strict';

import React from 'react';
import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import event from 'Event';
import _ from 'lodash';
import UI from 'UI';

import * as downloadActions from "../actions/downloadsActions.js";

@connect((store) => {
  return {
    downloadData: store.downloads.downloads
  };
})
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      zDepth: UI.windowWidth() <= UI.BREAK_POINT ? 0 : 1
    };
    this._onResize = _.debounce(this._onResize, 150).bind(this);
  }

  componentDidMount() {
    downloadActions.getDownloads();
  }

  componentWillMount() {
    window.addEventListener('resize', this._onResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize, false);
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

  _openLink(src) {
    let win = window.open(src, "_blank");
    win.focus();
  }

  render() {

    const title = this.props.title || "React App";
    const { downloadData } = this.props;
    const downloads = downloadData.downloads || 750;

    return (
      <AppBar title={title}
        iconElementLeft={
          <IconButton onMouseOver={ this._onLeftClick.bind(this) }>
            <NavigationMenu />
          </IconButton>
        }
        iconElementRight={
          <Badge
            badgeContent={downloads}
            primary={true}
            badgeStyle={{top: 12, right: 12}}
          >
            <IconButton>
              <FileFileDownload
                color={"white"}
                onClick={this._openLink.bind(this, "https://www.npmjs.com/package/generator-react-ui")}
              />
            </IconButton>
          </Badge>
        }
        onLeftIconButtonTouchTap={ this._onLeftClick.bind(this) }
        zDepth={ this.state.zDepth } />
    );
  }
}

Header.contextTypes = {
  store: React.PropTypes.object.isRequired,
}
export default Header;
