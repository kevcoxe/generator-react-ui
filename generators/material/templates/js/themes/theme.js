'use strict';

import * as _colors from 'material-ui/styles/colors';
import * as _colorManipulator from 'material-ui/utils/colorManipulator';
import * as _spacing from 'material-ui/styles/spacing';

var _spacing2 = _interopRequireDefault(_spacing);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

export default {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: _colors.lightBlue500,
    primary2Color: _colors.lightBlue700,
    primary3Color: _colors.grey400,
    accent1Color: _colors.pinkA200,
    accent2Color: _colors.grey100,
    accent3Color: _colors.grey500,
    textColor: _colors.darkBlack,
    alternateTextColor: _colors.white,
    canvasColor: _colors.white,
    borderColor: _colors.grey300,
    disabledColor: _colorManipulator.fade(_colors.darkBlack, 0.3),
    pickerHeaderColor: _colors.lightBlue500,
    clockCircleColor: _colorManipulator.fade(_colors.darkBlack, 0.07),
    shadowColor: _colors.fullBlack,
  },
};
