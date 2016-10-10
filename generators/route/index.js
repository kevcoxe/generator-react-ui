'use strict';

var yeoman = require('yeoman-generator');
var jsonfile = require('jsonfile');
var chalk = require('chalk');
var utils = require('../utils/index');

module.exports = yeoman.Base.extend({
  constructor: function() {
    yeoman.Base.apply(this, arguments);

    this.file = "js/config/routes.json";
    this.oldJson = jsonfile.readFileSync(this.file);
    this.newJson = Object.assign({}, this.oldJson);
    this.skipBuild = false;
  },


  prompting: function () {
    var self = this;

    var prompts = [
      {
        type: 'input',
        name: 'routeName',
        message: 'Enter your route (no child roots yet)',
        default: 'about',
        validate: function(name) {
          if (!name) {
            return 'Route name cannot be empty';
          }
          if (!/[\s\S]+/.test(name)) {
            return 'Route name should only consist of a~z, A~Z';
          }
          if (Object.keys(self.newJson).indexOf(name) !== -1) {
            return 'Route already exists';
          }
          return true;
        }
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;

      if(this.props.routeName !== ''|| typeof this.props.routeName !== 'undefined' ) {
        this.path = utils.camelCase(props.routeName);
        this.name = utils.capitalize(props.routeName);
      } else {
        this.skipBuild = true;
      }

    }.bind(this));
  },


  writing: {

    build: function() {

      if (!this.skipBuild) {
        /*
        * Add route to json file
        */

        this.newJson[this.path] = {
          "path": `/${this.path}`,
          "label": this.name
        };

        // write new obj
        jsonfile.writeFileSync(this.file, this.newJson, {spaces: 2});

        /*
        * copy and replace files
        */

        // js/routes/app-routes.jsx
        this.fs.copyTpl(
          this.templatePath('pageTemplate.jsx'),
          this.destinationPath(`js/pages/${this.path}.jsx`),
          {
            componentName: utils.capitalize(this.path),
            name: this.name
          }
        );
      }
    },

    compose: function() {

    },

    postBuild: function() {
      this.log("yolo");
    },

  },


  install: function () {
  }
});
