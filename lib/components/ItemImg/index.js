"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style5 = _interopRequireDefault(require("./style.less"));

var _yjtecSupport = require("yjtec-support");

var _UserMedia = _interopRequireDefault(require("@/components/MediaModal/UserMedia"));

var _help = require("@/utils/help");

var _oss = require("@/utils/oss.config");

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

var ItemImg =
/*#__PURE__*/
function (_Component) {
  _inherits(ItemImg, _Component);

  function ItemImg() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ItemImg);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItemImg)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userMediaVisible: false
    };

    _this.openMediaModal = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.selectMedia = function (arr) {
      _this.props.onChange(arr);

      _this.closeMediaModal();
    };

    _this.del = function () {
      _this.props.onDel();
    };

    return _this;
  }

  _createClass(ItemImg, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          url = _this$props.url,
          imgSize = _this$props.imgSize;
      var userMediaVisible = this.state.userMediaVisible;
      return _react.default.createElement("div", null, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 24,
        className: _style5.default.mb10
      }, !_yjtecSupport.Obj.isNull(url) ? _react.default.createElement("div", {
        className: _style5.default.defaultImg
      }, _react.default.createElement("img", {
        alt: "aa",
        src: (0, _oss.mediaImgConfig)(url, 'img'),
        className: _style5.default.img
      }), _react.default.createElement("div", {
        className: _style5.default.delimg,
        onClick: function onClick() {
          return _this2.del();
        }
      }, _react.default.createElement(_icon.default, {
        type: "delete"
      }))) : _react.default.createElement("div", {
        className: _style5.default.defaultImg
      }, _react.default.createElement("span", null, "\u5EFA\u8BAE\u5927\u5C0F", _react.default.createElement("br", null), imgSize))), _react.default.createElement(_col.default, {
        span: 12
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, "\u9009\u62E9\u56FE\u7247")), _react.default.createElement(_col.default, {
        span: 12,
        className: _style5.default.prompt
      }, "\u5EFA\u8BAE\u5927\u5C0F", _react.default.createElement("br", null), imgSize)), _react.default.createElement(_UserMedia.default, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return ItemImg;
}(_react.Component);

var _default = ItemImg;
exports.default = _default;