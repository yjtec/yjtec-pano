"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style2 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

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

var LoadsceneAction =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadsceneAction, _Component);

  function LoadsceneAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadsceneAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadsceneAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      view_pwd: '',
      tipsVisible: false
    };

    _this.setViewPwd = function (e) {
      var reg = /^\w+$/;

      if (reg.test(e.target.value) || e.target.value == '') {
        _this.setState({
          view_pwd: e.target.value,
          tipsVisible: false
        }, function () {
          _this.runChenge();
        });
      } else {
        _this.setState({
          view_pwd: _this.state.view_pwd,
          tipsVisible: true
        });
      }
    };

    _this.runChenge = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(LoadsceneAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        view_pwd: data ? data.view_pwd : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          view_pwd = _this$state.view_pwd,
          tipsVisible = _this$state.tipsVisible;
      var helpShowFlag = false;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5BC6\u7801\u8BBF\u95EE"), _help.helpShow && helpShowFlag && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: "".concat(_style2.default.inputDiv, " ").concat(tipsVisible && style.viewPwd)
      }, _react.default.createElement(_input.default.Password, {
        placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
        maxLength: 16,
        value: view_pwd,
        onChange: this.setViewPwd
      })), _react.default.createElement("div", {
        className: _style2.default.tigs
      }, "\u6CE8\uFF1A\u4EC5\u652F\u6301 \u82F1\u6587\u5927\u5C0F\u5199\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3002"), _react.default.createElement("div", {
        className: _style2.default.mb20
      })));
    }
  }]);

  return LoadsceneAction;
}(_react.Component);

var _default = LoadsceneAction;
exports.default = _default;