"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _style4 = _interopRequireDefault(require("./style.less"));

var _MediaModal = _interopRequireDefault(require("@/components/MediaModal"));

var _yjtecSupport = require("yjtec-support");

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

var defaultData = {
  media: false,
  musicUrl: '',
  musicTitle: '上传音乐格式为MP3',
  loop: 0
};

var Music =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Music, _React$Component);

  function Music() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Music);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Music)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userMediaVisible: false,
      musicUrl: '',
      musicTitle: '上传音乐格式为MP3',
      loop: 0
    };

    _this.openMediaModal = function () {
      //选择用户的素材
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.selectImg = function (arr) {
      _this.setState({
        media: false,
        musicUrl: arr[0].path.path,
        musicTitle: arr[0].name
      }, function () {
        _this.runChange();
      });

      _this.closeMediaModal();
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.onChange = function (e) {
      _this.setState({
        loop: e.target.checked == true ? 0 : 1
      }, function () {
        _this.runChange();
      });
    };

    _this.del = function () {
      _this.setState(_objectSpread({}, defaultData), function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      _this.props.onChange({
        musicUrl: _this.state.musicUrl,
        musicTitle: _this.state.musicTitle,
        loop: _this.state.loop
      });
    };

    return _this;
  }

  _createClass(Music, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, defaultData, {}, data));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        this.setState(_objectSpread({}, defaultData, {}, this.props.data));
      }
    } //打开选择素材

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          musicUrl = _this$state.musicUrl,
          musicTitle = _this$state.musicTitle,
          loop = _this$state.loop,
          userMediaVisible = _this$state.userMediaVisible;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        className: _style4.default.checkboxC,
        onClick: function onClick() {
          return _this2.del();
        }
      }, "\u5220\u9664"), "\u9009\u62E9\u97F3\u4E50"), _react.default.createElement("div", {
        className: _style4.default.musicBox
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 8
      }, _react.default.createElement("div", {
        className: _style4.default.musicIcon
      }, musicUrl ? _react.default.createElement(_icon.default, {
        type: "customer-service"
      }) : _react.default.createElement(_icon.default, {
        type: "plus"
      }))), _react.default.createElement(_col.default, {
        span: 16
      }, _react.default.createElement("div", {
        className: _style4.default.musicRight
      }, _react.default.createElement("p", null, musicTitle ? musicTitle : '上传音乐格式为MP3'), _react.default.createElement("div", {
        onClick: this.openMediaModal
      }, _react.default.createElement(_Form.Button, {
        title: "\u9009\u62E9\u97F3\u4E50"
      }))))), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement(_MediaModal.default, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: 2,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectImg,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return Music;
}(_react.default.Component);

exports.default = Music;