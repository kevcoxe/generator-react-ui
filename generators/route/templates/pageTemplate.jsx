'use strict';

import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MyCard from '../components/MyCard.jsx';

class <%= componentName %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Grid>
        <br />
        <Row>
          <Col xs={12}>
            <MyCard title={`<%= name %>`}/>
          </Col>

          <Col xs={12}>
            { this.props.children }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default <%= componentName %>;
