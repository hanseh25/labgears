'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', ' overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n'], ['\n  ', ' overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  cursor: inherit;\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  width: 100%;\n  :invalid: {\n    boxshadow: none;\n  },\n'], ['\n  ', '\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  cursor: inherit;\n  line-height: inherit;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  width: 100%;\n  :invalid: {\n    boxshadow: none;\n  },\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var common = '\n  appearance: none;\n  color: inherit;\n  font-size: 12;\n  font-family: inherit;\n  letter-spacing: inherit;\n';

var ReadView = _styledComponents2.default.div(_templateObject, common);

var EditView = _styledComponents2.default.input(_templateObject2, common);

var SingleLineTextInput = function (_Component) {
  _inherits(SingleLineTextInput, _Component);

  function SingleLineTextInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SingleLineTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SingleLineTextInput.__proto__ || Object.getPrototypeOf(SingleLineTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event);
      }
      if (event.keyCode === (0, _keycode2.default)('enter')) {
        if (_this.props.onConfirm) _this.props.onConfirm(event);
      }
    }, _this.getInputProps = function () {
      var inputProps = _extends({}, _this.props, {
        type: 'text',
        onKeyDown: _this.onKeyDown
      });
      delete inputProps.style;
      delete inputProps.isEditing;
      delete inputProps.isInitiallySelected;
      delete inputProps.onConfirm;
      return inputProps;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SingleLineTextInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.selectInputIfNecessary();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isEditing) {
        this.selectInputIfNecessary();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.inputRef) {
        this.inputRef.select();
      }
    }
  }, {
    key: 'selectInputIfNecessary',
    value: function selectInputIfNecessary() {
      if (this.props.isEditing && this.props.isInitiallySelected) {
        this.select();
      }
    }
  }, {
    key: 'renderEditView',
    value: function renderEditView() {
      var _this2 = this;

      return _react2.default.createElement(EditView, _extends({
        style: this.props.style
      }, this.getInputProps(), {
        innerRef: function innerRef(ref) {
          _this2.inputRef = ref;
        }
      }));
    }
  }, {
    key: 'renderReadView',
    value: function renderReadView() {
      return _react2.default.createElement(
        ReadView,
        { style: this.props.style },
        this.props.value
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.isEditing ? this.renderEditView() : this.renderReadView();
    }
  }]);

  return SingleLineTextInput;
}(_react.Component);

SingleLineTextInput.defaultProps = {
  style: {},
  isInitiallySelected: false,
  onConfirm: function onConfirm() {},
  onKeyDown: function onKeyDown() {}
};
exports.default = SingleLineTextInput;