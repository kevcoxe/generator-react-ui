[![Stories in Ready](https://badge.waffle.io/kevcoxe/generator-react-ui.svg?label=ready&title=Ready)](http://waffle.io/kevcoxe/generator-react-ui)
# generator-react-ui
 Yeoman generator for React with Material-UI and Redux


## Prerequisites ##
1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install this: `npm install -g generator-react-ui`


## Use `generator-react-ui` ##
To generate your app

`yo react-ui`


## Sub-generators

### Action sub-generator
Generate new action file

`yo react-ui:action`

*also generated from reducer*

### Reducer sub-generator
Generating new reducers

`yo react-ui:reducer`

This will prompt and ask if you want to generate an action.
Uses a config file inside of `js/config/redux.json`.
Will look for a reducer inside of `js/reducers/` for each entry inside of
the config file.

### Route sub-generator
Generating routes

`yo react-ui:route`

Uses a config file inside of `js/config/routes.json`.
Each each entry has a `key` which is the name of the route, `path` which is the path, and `label` which is what will be displayed in the side navbar.

```
"index": {
  "path":  "/",
  "label": "Index"
}
```


# Links
- [demo](https://kevcoxe.github.io/generator-react-ui)
- [npm](https://www.npmjs.com/package/generator-react-ui)
- [github](https://github.com/kevcoxe/generator-react-ui)


## References ##
1. [yeoman](http://yeoman.io/)
2. [react](http://facebook.github.io/react/)
3. [material-ui](http://material-ui.com)
4. [Redux](http://redux.js.org/)
5. [webpack](http://webpack.github.io/)
6. [es6-features](https://github.com/lukehoban/es6features)
7. [generator-material-react](https://github.com/leftstick/generator-material-react#readme)


# Authors
- [kevcoxe](https://github.com/kevcoxe)


## LICENSE ##
[MIT License](https://raw.githubusercontent.com/kevcoxe/generator-react-ui/master/LICENSE)
