'use strict';

import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import _ from 'lodash';
import UI from 'UI';


class MyCard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const { title, subtitle } = this.props

    return (
      <Card>
        <CardTitle title={title} subtitle={subtitle} />

        <CardText>
          { this.props.children }
        </CardText>
      </Card>
    );
  }
}

export default MyCard;
