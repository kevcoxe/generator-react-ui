'use strict';

import React from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import ActionCode from 'material-ui/svg-icons/action/code';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import GithubIcon from 'material-ui-community-icons/icons/github-circle'

import MyCard from '../components/MyCard.jsx';
import CodeBlock from '../components/CodeBlock.jsx';

class Index extends React.Component {

  constructor(props) {
    super(props);
  }

  _openLink(src) {
    let win = window.open(src, "_blank");
    win.focus();
  }

  render() {

    const styles = {
      largeIcon: {
        width: 60,
        height: 60,
      },
      large: {
        width: 120,
        height: 120,
        padding: 30,
      },
    };


    return (
      <Grid>
        <br />
        <Row>
          <Col xs={12}>
            <MyCard title="Welcome!" subtitle="Welcome to the generator-react-ui" />
          </Col>

          <Col xs={12}>
            <MyCard title="Installation" subtitle="How to install generato-react-ui">

              <div>
                <p>Install yeoman globally</p>
                <CodeBlock>
                  npm install -g yo
                </CodeBlock>
              </div>

              <div>
                <p>Install generator-react-ui</p>
                <CodeBlock>
                  npm install -g generator-react-ui
                </CodeBlock>
              </div>

            </MyCard>
          </Col>

          <Col xs={12}>
            <MyCard title="Main Generator" subtitle="How to use generator-react-ui">

              <div>
                <p>Generate your app</p>
                <CodeBlock>
                  yo react-ui
                </CodeBlock>
              </div>

            </MyCard>
          </Col>

          <Col xs={12}>
            <MyCard title="Sub-generators" subtitle="How to use generator-react-ui sub-generators">

              <div>
                <h3>Action sub-generator</h3>
                <p>Generate new action file</p>
                <CodeBlock>
                  yo react-ui:action
                </CodeBlock>
                <strong>also generated from reducer</strong>
              </div>

              <div>
                <br />
                <br />
                <br />
                <h3>Reducer sub-generator</h3>
                <p>Generating new reducers</p>
                <CodeBlock>
                  yo react-ui:reducer
                </CodeBlock>
                <p>
                  This will prompt and ask if you want to generate an action. Uses a config file inside of <strong>js/config/redux.json</strong>.
                  Will look for a reducer inside of <strong>js/reducers/</strong> for each entry inside of the config file.
                </p>
              </div>

              <div>
                <br />
                <br />
                <br />
                <h3>Route sub-generator</h3>
                <p>Generating routes</p>
                <CodeBlock>
                  yo react-ui:route
                </CodeBlock>
                <p>
                  Uses a config file inside of <strong>js/config/routes.json</strong>.
                  Each each entry has a <strong>key</strong> which is the name of the route, <strong>path</strong>
                  which is the path, and <strong>label</strong> which is what will be displayed in the side navbar.
                </p>
                <CodeBlock>
                  {
                    `"index": {
  "path":  "/",
  "label": "Index"
}`
                  }
                </CodeBlock>
              </div>

            </MyCard>
          </Col>

          <Col xs={12}>
            <MyCard title="Links" subtitle="links about generator-react-ui">

              <List>
                <Subheader>Github</Subheader>
                <ListItem
                  primaryText="Github"
                  leftIcon={<GithubIcon />}
                  onClick={this._openLink.bind(this, "https://github.com/kevcoxe/generator-react-ui")}
                />
                <ListItem
                  primaryText="npm"
                  leftIcon={<ActionCode />}
                  onClick={this._openLink.bind(this, "https://www.npmjs.com/package/generator-react-ui")}
                />
              </List>

            </MyCard>
          </Col>

          <Col xs={12}>
            { this.props.children }
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Index;
