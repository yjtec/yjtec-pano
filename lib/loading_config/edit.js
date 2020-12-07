"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/switch/style");

var _switch = _interopRequireDefault(require("antd/es/switch"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style2 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _oss = require("@/utils/oss.config");

var _ItemImg = _interopRequireDefault(require("../components/ItemImg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadingEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingEdit, _Component);

  function LoadingEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadingEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadingEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      state: false,
      url: ''
    };

    _this.loadingState = function (e) {
      _this.setState({
        state: e
      }, function () {
        _this.save();
      });
    };

    _this.selectImg = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, function () {
        _this.save();
      });
    };

    _this.delImg = function () {
      _this.setState({
        url: ''
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(LoadingEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          url = _this$state.url,
          state = _this$state.state;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement(_switch.default, {
        size: "small",
        checked: state,
        onClick: function onClick(e) {
          return _this2.loadingState(e);
        }
      })), "\u52A0\u8F7D\u52A8\u753B", _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style2.default.tips
      }, "\u6CE8\uFF1A\u5F00\u542F\u540E\u9879\u76EE\u52A0\u8F7D\u52A8\u753B\u5C06\u4F7F\u7528\u4F60\u81EA\u5B9A\u4E49\u7684\u52A8\u753B")), _react.default.createElement(_ItemImg.default, {
        url: url ? (0, _oss.mediaImgConfig)(url, 'img') : '',
        imgSize: "100X100",
        onChange: this.selectImg,
        onDel: this.delImg
      })));
    }
  }]);

  return LoadingEdit;
}(_react.Component);

var _default = LoadingEdit;
exports.default = _default;