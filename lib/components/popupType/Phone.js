"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireWildcard(require("react"));

var _yjtecSupport = require("yjtec-support");

var _Form = require("@/components/Form");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Phone =
/*#__PURE__*/
function (_Component) {
  _inherits(Phone, _Component);

  function Phone() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Phone);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Phone)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleChange = function (value) {
      _this.props.onChange(value);
    };

    _this.inputOnBlur = function (e) {
      var str = e.target.value;
      var r = str.match(/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3456789]\d{9})$)|(^(400)-(\d{3})-(\d{4}$))|(^(400)-(\d{4})-(\d{3}$))|(^(800)-(\d{4})-(\d{3}$))|(^(800)-(\d{3})-(\d{4}$))/);

      if (r == null) {
        _message2.default.error('请输入正确的手机或电话号码');
      } else {
        _this.handleChange(str);
      }
    };

    return _this;
  }

  _createClass(Phone, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var phone = this.props.phone;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        style: {
          marginBottom: '5px'
        }
      }, "\u7535\u8BDD\u53F7\u7801"), _react.default.createElement(_Form.Input, {
        placeholder: "\u8BF7\u8F93\u5165\u5EA7\u673A/\u624B\u673A\u53F7",
        onChange: function onChange(value) {
          return _this2.handleChange(value);
        },
        value: phone.phone,
        onBlur: this.inputOnBlur,
        style: {
          marginBottom: '5px'
        }
      }), _react.default.createElement("div", null, "\u4F8B:400-6111-360\u62160371-56666020\u621613888889999"));
    }
  }]);

  return Phone;
}(_react.Component);

exports.default = Phone;