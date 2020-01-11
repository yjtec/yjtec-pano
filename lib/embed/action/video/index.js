"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _VipAuthority = _interopRequireDefault(require("@/components/VipAuthority"));

var _edit = _interopRequireDefault(require("./edit"));

var _style = _interopRequireDefault(require("../style.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Video =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Video).call(this, props));

    _this.handleVideo = function (data) {
      _this.setState(_objectSpread({}, data), function () {
        _this.props.onChange(_this.state);
      });
    };

    var actionData = props.actionData;
    _this.state = {
      videoUrl: actionData && actionData.videoUrl ? actionData.videoUrl : '',
      title: actionData && actionData.title ? actionData.title : '',
      thumbUrl: actionData && actionData.thumbUrl ? actionData.thumbUrl : '',
      loop: actionData && actionData.loop ? actionData.loop : 1,
      autoplay: actionData && actionData.autoplay ? actionData.autoplay : 1
    };
    return _this;
  }

  _createClass(Video, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)) {
        if (this.props.actionData) {
          var actionData = this.props.actionData;
          this.setState({
            videoUrl: actionData.videoUrl,
            title: actionData.title,
            thumbUrl: actionData.thumbUrl,
            loop: actionData.loop,
            autoplay: actionData.autoplay
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var is_vip = this.props.is_vip;
      return _react.default.createElement("div", null, is_vip == 0 && _react.default.createElement(_VipAuthority.default, null), is_vip == 1 && _react.default.createElement(_edit.default, _extends({}, this.state, {
        onChange: this.handleVideo
      })));
    }
  }]);

  return Video;
}(_react.default.Component);

exports.default = Video;