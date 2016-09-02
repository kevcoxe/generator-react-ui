'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({

  initializing: function() {
    try {
      this.username =this.user.git.name() || process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2];
    } catch (e) {
      this.username = '';
    }

    try {
      this.email = this.user.git.email();
    } catch (e) {
      this.email = '';
    }
  },


  prompting: function() {
    var done = this.async();
    var self = this;

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-react-material-redux') + ' generator!'
    ));


    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        validate: function(name) {
          if (!name) {
            return 'Project name cannot be empty';
          }
          if (!/\w+/.test(name)) {
            return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
          }

          var fs = require('fs');
          if (!fs.existsSync(self.destinationPath(name))) {
            return true;
          }
          if (fs.statSync(self.destinationPath(name)).isDirectory()) {
            return 'Project already exist';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description',
        default: ''
      },
      {
        type: 'input',
        name: 'version',
        message: 'Your project version',
        default: '0.0.1'
      },
      {
        type: 'input',
        name: 'username',
        message: 'Your name',
        default: this.username
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email',
        default: this.email
      },
    ])
      .then(function(answers) {
        self.answers = answers;
        self.obj = {answers: self.answers};
        done();
      });
  },


  default: function () {
    if (path.basename(this.destinationPath()) !== this.answers.name) {
      var kebabed = _.kebabCase(this.answers.name);

      this.log(
        'Your app must be inside a folder named ' + kebabed + '\n' +
        'I\'ll automatically create this folder.'
      );
      mkdirp(kebabed);
      this.destinationRoot(this.destinationPath(kebabed));
    }
  },


  writing: {

    build: function() {

      /*
       * copy files
       */

      // index.html_vm
      this.fs.copy(
        this.templatePath('index.html_vm'),
        this.destinationPath('index.html_vm')
      );

      // img/
      this.fs.copy(
        this.templatePath('img/'),
        this.destinationPath('img/')
      );

      // font/
      this.fs.copy(
        this.templatePath('font/'),
        this.destinationPath('font/')
      );

      // less/
      this.fs.copy(
        this.templatePath('less/'),
        this.destinationPath('less/')
      );

      // js/
      this.fs.copy(
        this.templatePath('js/'),
        this.destinationPath('js/')
      );

      // .babelrc
      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
      );


      /*
       * copy and replace files
       */

      // package.json
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: _.camelCase(this.answers.name),
          version: this.answers.version,
          description: this.description,
          author: this.answers.username,
        }
      );

      // webpack dev
      this.fs.copyTpl(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js'),
        {
          title: this.answers.name,
          description: this.answers.description,
          author: this.answers.username
        }
      );

      // webpack prod
      this.fs.copyTpl(
        this.templatePath('webpack.prod.config.js'),
        this.destinationPath('webpack.prod.config.js'),
        {
          title: this.answers.name,
          description: this.answers.description,
          author: this.answers.username
        }
      );

      // js/index.js
      this.fs.copyTpl(
        this.templatePath('js/index.js'),
        this.destinationPath('js/index.js'),
        {
          author: this.answers.username
        }
      );

      // js/routes/app-routes.jsx
      this.fs.copyTpl(
        this.templatePath('js/routes/app-routes.jsx'),
        this.destinationPath('js/routes/app-routes.jsx'),
        {
          title: this.answers.name
        }
      );
    },

    compose: function() {
    },

  },


  install: function () {
    this.installDependencies({
      bower: false
    });
  },


  end: function() {
    this.log.ok('Project ' + this.answers.name + ' generated!!!');
  },


});


