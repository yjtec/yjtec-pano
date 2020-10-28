"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form/");

var _pano = _interopRequireDefault(require("./pano"));

var _style2 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

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

var ViewEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ViewEdit, _React$Component);

  function ViewEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ViewEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ViewEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleView = function (k, v) {
      _this.props.editView(k, v);
    };

    return _this;
  }

  _createClass(ViewEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          viewdata = _this$props.viewdata,
          flag = _this$props.flag;
      return _react.default.createElement("div", {
        style: {
          height: "inherit"
        }
      }, _react.default.createElement("div", {
        style: {
          position: 'absolute',
          'left': '50%',
          marginLeft: '-196px',
          marginTop: '100px',
          top: '50%'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.props.setView
      }, "\u628A\u5F53\u524D\u89C6\u89D2\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u89C6\u89D2")), _react.default.createElement(_components.Right, null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        style: {
          marginBottom: '10px'
        }
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5F53\u524D\u521D\u59CB\u89C6\u89D2"), _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        link: 'view',
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), flag && _react.default.createElement(_pano.default, null)), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("p", null, "\u89C6\u89D2(FOV)\u8303\u56F4\u8BBE\u7F6E"), _react.default.createElement(_Form.Slider, {
        onChange: function onChange(value) {
          return _this2.handleView('fov', value);
        },
        min: 1,
        max: 179,
        label: ['最近', '初始', '最远'],
        defaultValue: [Number(viewdata.fovmin), Number(viewdata.fov), Number(viewdata.fovmax)],
        ref: function ref(_ref) {
          return _this2.fref = _ref;
        }
      })), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("p", null, "\u5782\u76F4\u89C6\u89D2\u9650\u5236"), _react.default.createElement(_Form.Slider, {
        onChange: function onChange(value) {
          return _this2.handleView('v', value);
        },
        min: -90,
        max: 90,
        defaultValue: [Number(viewdata.vlookatmin), Number(viewdata.vlookatmax)],
        label: ['最低', '最高']
      })), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("p", null, "\u6C34\u5E73\u89C6\u89D2\u9650\u5236"), _react.default.createElement(_Form.Slider, {
        onChange: function onChange(value) {
          return _this2.handleView('h', value);
        },
        min: -180,
        max: 180,
        defaultValue: [Number(viewdata.hlookatmin), Number(viewdata.hlookatmax)],
        label: ['最低', '最高']
      })), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        style: {
          textAlign: 'center'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.props.reset
      }, "\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E")))));
    }
  }]);

  return ViewEdit;
}(_react.default.Component);

exports.default = ViewEdit;