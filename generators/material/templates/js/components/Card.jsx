'use strict';

import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';

import _ from 'lodash';
import UI from 'UI';

import Tabed from './Tabed.jsx';


class MyCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardStyle: this._getCardStyle()
    };
    this._onResize = _.debounce(this._onResize, 150).bind(this);
  }


  _getCardStyle() {
    let style = {
      margin: '5px auto 0 auto',
    };

    if (UI.windowWidth() <= UI.BREAK_POINT) {
      style.width = '100%';
    } else {
      style.width = UI.BREAK_POINT + 'px';
    }
    return style;
  }


  _onResize(e) {
    this.setState({
      cardStyle: this._getCardStyle(),
    });
  }


  componentWillMount() {
    window.addEventListener('resize', this._onResize, false);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this._onResize, false);
  }


  render() {

    const title = this.props.title || "Title"

    const cardList = [
      {
        title: "First Tab",
        content: <div>
            <CardHeader
              title={title}
              subtitle="card header"
            />
            <CardTitle title="Welcome!" subtitle="card title" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </div>,
      },
      {
        title: "Second Tab",
        content: <div>
            <CardHeader
              title="Another header"
              subtitle="card header"
            />
            <CardTitle title="Welcome Again!" subtitle="card title" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </div>,
      },
    ];

    return (
      <Card>
        <Tabed content={cardList}/>
      </Card>
    );
  }
}

export default MyCard;
