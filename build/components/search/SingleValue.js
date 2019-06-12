'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  singleValue: {
    fontSize: 16
  }
};

var SingleValue = function SingleValue(_ref) {
  var classes = _ref.classes,
      innerProps = _ref.innerProps,
      children = _ref.children;

  return _react2.default.createElement(
    _Typography2.default,
    _extends({ className: classes.singleValue }, innerProps),
    children
  );
};

exports.default = (0, _styles.withStyles)(styles)(SingleValue);