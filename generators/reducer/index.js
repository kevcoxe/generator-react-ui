'use strict';

var yeoman = require('yeoman-generator');
var jsonfile = require('jsonfile');
var _ = require('lodash');
var chalk = require('chalk');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.file = "js/config/redux.json";
    this.oldJson = jsonfile.readFileSync(this.file);
    this.newJson = _.extend({}, this.oldJson);
    this.skipBuild = false;
  },


  prompting: function () {
    var prompts = [
      {
        type: 'input',
        name: 'reducerName',
        message: 'Name of your reducer',
        default: 'test'
      },
      {
        type: 'confirm',
        name: 'createAction',
        message: 'Would you like to create an action?',
        default: true
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.createAction = this.props.createAction;

      if(this.props.reducerName !== ''|| !_.isUndefined(this.props.reducerName)) {
        this.name = _.camelCase(props.reducerName) || "test";
        this.path = `${this.name}Reducer.js`;
      } else {
        this.skipBuild = true;
      }

    }.bind(this));
  },


  writing: {

    build: function() {
    },

    compose: function() {
      if (this.createAction) {
        this.composeWith('react-ui:action', { args: [
          this.name
        ]});
      }
    },

    postBuild: function() {

      if (!this.skipBuild) {
        /*
        * Add route to json file
        */

        this.newJson.reducers.push(this.name);

        // write new obj
        jsonfile.writeFileSync(this.file, this.newJson, {spaces: 2});

        /*
        * copy and replace files
        */

        this.fs.copyTpl(
          this.templatePath('reducerTemplate.js'),
          this.destinationPath(`js/reducers/${this.path}`),
          {
            name: this.name,
            actionName: _.upperCase(this.name)
          }
        );
      }
    },

  },


  install: function () {
  }
});
