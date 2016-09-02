'use strict';

import React from 'react';

class <%= componentName %> extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1><%= name %></h1>
      </div>
    );
  }
}

export default <%= componentName %>;
