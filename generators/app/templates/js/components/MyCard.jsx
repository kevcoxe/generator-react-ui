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

    const { title, subtitle, content } = this.props

    const cardData = (
      <div>
        <CardTitle title={title} subtitle={subtitle} />
        <CardText>
          { content }
        </CardText>
      </div>
    );

    return (
      <Card>
        { cardData }
        { this.props.children }
      </Card>
    );
  }
}

export default MyCard;
