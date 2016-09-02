'use strict';

import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import _ from 'lodash';
import UI from 'UI';


const styles = {
  tab: {
    padding: 10,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


class Tabed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
  }


  handleChange(value) {
    this.setState({
      slideIndex: value
    });
  }


  render() {

    const title = this.props.title || "Title"

    const tabList = this.props.content.map((data, i) => {
      return (
        <Tab label={data.title} value={i} key={i} />
      )
    });

    const swipeableTabs = this.props.content.map((data, i) => {
      return (
        <div key={i}>
          { data.content }
        </div>
      )
    });


    return (
      <div>
        <Tabs
          value={this.state.slideIndex}
          onChange={this.handleChange.bind(this)}
          style={styles.tab}
        >
          { tabList }
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange.bind(this)}
        >
          { swipeableTabs }
        </SwipeableViews>
      </div>
    );
  }
}

export default Tabed;
