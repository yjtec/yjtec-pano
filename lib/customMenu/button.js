"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireDefault(require("react"));

var _popupType = _interopRequireDefault(require("../components/popupType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var InputGroup = _input.default.Group;
var Option = _select.default.Option;

var ButtonHtml =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonHtml, _React$Component);

  function ButtonHtml() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ButtonHtml);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ButtonHtml)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};
    return _this;
  }

  _createClass(ButtonHtml, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: styles.menu_icon
      }, _react.default.createElement("img", {
        src: "",
        alt: "1"
      }), _react.default.createElement("span", {
        style: {
          marginLeft: '10px',
          color: 'rgba(255,255,255,0.45)'
        }
      }, "\u5EFA\u8BAE\u5C3A\u5BF8100X100"), _react.default.createElement("div", {
        className: styles.menu_icon_btn
      }, _react.default.createElement(Button, {
        title: "\u7F16\u8F91\u56FE\u6807"
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: styles.menu_type,
        style: {
          marginTop: '10px'
        }
      }, _react.default.createElement(InputGroup, {
        compact: true
      }, _react.default.createElement(_select.default, {
        defaultValue: "url"
      }, _react.default.createElement(Option, {
        value: "url"
      }, "\u5916\u94FE"), _react.default.createElement(Option, {
        value: "phone"
      }, "\u7535\u8BDD")), _react.default.createElement(_input.default, {
        style: {
          width: 'calc(100% - 72px)'
        },
        placeholder: "\u8BF7\u6DFB\u52A0\u6807\u9898"
      }))), _react.default.createElement("div", {
        className: styles.menu_type_c
      }, _react.default.createElement(_popupType.default.Video, {
        data: ''
      })));
    }
  }]);

  return ButtonHtml;
}(_react.default.Component);

exports.default = ButtonHtml;