'use strict';

import React from 'react';
import { connect } from "react-redux";

import MyCard from '../components/Card.jsx';

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const title = this.props.title || "Title"

    return (
      <div>
        <MyCard title={title}/>
        { this.props.children }
      </div>
    );
  }
}

export default Index;
