"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _style2 = _interopRequireDefault(require("./style.less"));

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

var CruiseEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(CruiseEdit, _Component);

  function CruiseEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CruiseEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CruiseEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: 0,
      time: 30,
      switchScene: 1
    };

    _this.isOpen = function (e) {
      _this.setState({
        open: e.target.checked ? 1 : 0
      }, function () {
        _this.runChenge();
      });
    };

    _this.handleRotateTime = function (value) {
      _this.setState({
        time: value
      }, function () {
        _this.runChenge();
      });
    };

    _this.switchScene = function (e) {
      _this.setState({
        switchScene: e.target.checked ? 1 : 0
      }, function () {
        _this.runChenge();
      });
    };

    _this.runChenge = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(CruiseEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        open: data.open,
        time: data.time,
        switchScene: data.switchScene
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          time = _this$state.time,
          switchScene = _this$state.switchScene;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: open == 1 ? true : false,
        onChange: this.isOpen,
        className: _style2.default.checkbox
      }, "\u662F\u5426\u5F00\u542F")), "\u81EA\u52A8\u5DE1\u6E38"), _react.default.createElement("div", {
        className: _style2.default.mb20
      }), _react.default.createElement("div", {
        className: _style2.default.title
      }, "\u573A\u666F\u65CB\u8F6C\u65F6\u95F4(S)"), _react.default.createElement("div", {
        className: _style2.default.sliderDiv
      }, _react.default.createElement(_Form.SliderSingle, {
        defaultValue: time,
        max: 180,
        min: 30,
        step: 30,
        onChange: function onChange(value) {
          return _this2.handleRotateTime(value);
        }
      })), _react.default.createElement("div", {
        className: _style2.default.mb20
      }), _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: switchScene == 1 ? true : false,
        onChange: this.switchScene,
        className: _style2.default.checkbox
      })), "\u65CB\u8F6C\u7ED3\u675F\u540E\u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u4E2A\u573A\u666F")));
    }
  }]);

  return CruiseEdit;
}(_react.Component);

var _default = CruiseEdit;
exports.default = _default;