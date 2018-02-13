'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ', ';\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ', ' opacity: 1;\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ', ' opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ', ';\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ', ';\n  }\n'], ['\n  &::-webkit-input-placeholder {\n    /* WebKit, Blink, Edge */\n    ', ';\n  }\n  &:-moz-placeholder {\n    /* Mozilla Firefox 4 to 18 */\n    ', ' opacity: 1;\n  }\n  &::-moz-placeholder {\n    /* Mozilla Firefox 19+ */\n    ', ' opacity: 1;\n  }\n  &:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    ', ';\n  }\n  &::-ms-input-placeholder {\n    /* Microsoft Edge */\n    ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: black;\n'], ['\n  color: black;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  background: blue;\n  border: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: inherit;\n  font-size: 14px;\n  outline: none;\n  width: 100%;\n\n  &::-ms-clear {\n    display: none;\n  }\n\n  &:invalid {\n    box-shadow: none;\n  }\n  ', ';\n'], ['\n  background: blue;\n  border: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: inherit;\n  font-size: 14px;\n  outline: none;\n  width: 100%;\n\n  &::-ms-clear {\n    display: none;\n  }\n\n  &:invalid {\n    box-shadow: none;\n  }\n  ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import { colors } from '@atlaskit/theme';

var getPlaceholderStyle = function getPlaceholderStyle(style) {
  return (0, _styledComponents.css)(_templateObject, style, style, style, style, style);
};
// const getPlaceholderColor = css`
//   color: ${colors.placeholderText};
// `;

var getPlaceholderColor = (0, _styledComponents.css)(_templateObject2);

var InputElement = _styledComponents2.default.input(_templateObject3, getPlaceholderStyle(getPlaceholderColor));

exports.default = InputElement;