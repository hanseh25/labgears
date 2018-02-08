'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./styled/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import Base, { Label } from '@atlaskit/field-base';


var FieldText = function (_Component) {
  _inherits(FieldText, _Component);

  function FieldText() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FieldText);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FieldText.__proto__ || Object.getPrototypeOf(FieldText)).call.apply(_ref, [this].concat(args))), _this), _this.handleInputRef = function (input) {
      _this.input = input;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FieldText, [{
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.input.focus();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Input2.default, {
          autoComplete: this.props.autoComplete,
          autoFocus: this.props.autoFocus,
          disabled: this.props.disabled,
          form: this.props.form,
          id: this.props.id,
          innerRef: this.handleInputRef,
          maxLength: this.props.maxLength,
          min: this.props.min,
          max: this.props.max,
          name: this.props.name,
          onBlur: this.props.onBlur,
          onChange: this.props.onChange,
          onFocus: this.props.onFocus,
          onKeyDown: this.props.onKeyDown,
          onKeyPress: this.props.onKeyPress,
          onKeyUp: this.props.onKeyUp,
          pattern: this.props.pattern,
          placeholder: this.props.placeholder,
          readOnly: this.props.isReadOnly,
          required: this.props.required,
          spellCheck: this.props.isSpellCheckEnabled,
          type: this.props.type,
          value: this.props.value
        })
      );
    }
  }]);

  return FieldText;
}(_react.Component);

FieldText.defaultProps = {
  compact: false,
  disabled: false,
  isInvalid: false,
  isReadOnly: false,
  isSpellCheckEnabled: true,
  onChange: function onChange() {},
  required: false,
  type: 'text'
};
exports.default = FieldText;