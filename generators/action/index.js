'use strict';

var yeoman = require('yeoman-generator');
var jsonfile = require('jsonfile');
var chalk = require('chalk');
var utils = require('../utils/index');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.argument('name', {
      type: String,
      required: false
    });

    this.skipBuild = false;
  },


  prompting: function () {
    var prompts = [
      {
        type: 'input',
        name: 'actionName',
        message: 'Name of your action',
        default: this.name || 'test'
      },
    ];

    if(this.name !== '' || typeof this.name !== 'undefined' ) {
      this.functionName = utils.camelCase(`get ${this.name}`);
      this.actionName = this.name.toUpperCase();
      this.path = `${this.name}Actions.js`;
      return;
    } else {
      return this.prompt(prompts).then(function (props) {
        this.props = props;

        if(this.props.reducerName !== '' || typeof this.props.reducerName !== 'undefined' ) {
          this.name = utils.camelCase(props.reducerName);
          this.functionName = utils.camelCase(`get ${this.name}`);
          this.actionName = this.name.toUpperCase()
          this.path = `${this.name}Actions.js`;
        } else {
          this.skipBuild = true;
        }

      }.bind(this));
    }
  },


  writing: {

    build: function() {

      if (!this.skipBuild) {
        /*
        * copy and replace files
        */

        // js/routes/app-routes.jsx
        this.fs.copyTpl(
          this.templatePath('actionTemplate.js'),
          this.destinationPath(`js/actions/${this.path}`),
          {
            functionName: this.functionName,
            actionName: this.actionName
          }
        );
      }
    },

    compose: function() {
    },

    postBuild: function() {
    },

  },


  install: function () {
  }
});
