'use strict';

var yeoman = require('yeoman-generator');
var jsonfile = require('jsonfile');
var _ = require('lodash');
var chalk = require('chalk');
var utils = require('./utils/index');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.file = "js/config/redux.json";
    this.oldJson = jsonfile.readFileSync(this.file);
    this.newJson = _.extend({}, this.oldJson);
    this.skipBuild = false;
  },


  prompting: function () {
    var self = this;

    var prompts = [
      {
        type: 'input',
        name: 'reducerName',
        message: 'Name of your reducer',
        default: 'test',
        validate: function(name) {
          if (!name) {
            return 'Reducer name cannot be empty';
          }
          if (!/[\s\S]+/.test(name)) {
            return 'Reducer name should only consist of a~z, A~Z';
          }
          if (self.newJson.reducers.indexOf(name) !== -1) {
            return 'Reducer already exists';
          }
          return true;
        }
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

      if(this.props.reducerName !== '' || typeof this.props.reducerName !== 'undefined' ) {
        this.name = utils.camelCase(props.reducerName) || "test";
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
            actionName: this.name.toUpperCase()
          }
        );
      }
    },

  },


  install: function () {
  }
});
