"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _antd = require("antd");

var _style = _interopRequireDefault(require("./style.less"));

var _Media = _interopRequireDefault(require("@/components/Media"));

var _AllScene = _interopRequireDefault(require("@/components/AllScene"));

var _yjtecSupport = require("yjtec-support");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
function (_Component) {
  _inherits(Music, _Component);

  function Music() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Music);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Music)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      media: false,
      musicUrl: '',
      musicTitle: '上传音乐格式为MP3',
      loop: 0,
      defaultPlay: true,
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
    };

    _this.media = function () {
      //选择用户的素材
      _this.setState({
        media: true
      });
    };

    _this.onCancel = function (url, name) {
      if (url == undefined) {
        _this.setState({
          media: false
        });
      } else {
        _this.setState({
          media: false,
          musicUrl: url,
          musicTitle: name
        }, function () {
          _this.runChange();
        });
      }
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
        _this.props.onDel();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          musicUrl = _this$state.musicUrl,
          musicTitle = _this$state.musicTitle,
          loop = _this$state.loop,
          defaultPlay = _this$state.defaultPlay;

      _this.props.onChange({
        musicUrl: musicUrl,
        musicTitle: musicTitle,
        loop: loop,
        defaultPlay: defaultPlay
      });
    };

    _this.appliedToScene = function () {
      _this.setState({
        sceneListVisible: true
      });
    };

    _this.onCancelAppliedToScene = function () {
      _this.setState({
        sceneListVisible: false
      });
    };

    _this.setAllScene = function (url, sceneIds) {
      _this.props.setAllScene(url, sceneIds);
    };

    _this.handlePlay = function (e) {
      _this.setState({
        defaultPlay: e.target.checked
      }, function () {
        _this.runChange();
      });
    };

    return _this;
  }

  _createClass(Music, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          scenes = _this$props.scenes;
      var categoryArr = scenes.category;
      var scenesArr = scenes.scenes;
      this.setState(_objectSpread({}, defaultData, {}, data, {
        categoryArr: categoryArr,
        scenesArr: scenesArr
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        this.setState(_objectSpread({}, defaultData, {}, this.props.data));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          musicUrl = _this$state2.musicUrl,
          musicTitle = _this$state2.musicTitle,
          loop = _this$state2.loop,
          defaultPlay = _this$state2.defaultPlay,
          sceneListVisible = _this$state2.sceneListVisible,
          categoryArr = _this$state2.categoryArr,
          scenesArr = _this$state2.scenesArr;
      return _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style.default.title
      }, _react.default.createElement("span", {
        className: _style.default.checkboxC,
        onClick: function onClick() {
          return _this2.del();
        }
      }, "\u5220\u9664"), this.props.title), _react.default.createElement("div", {
        className: _style.default.musicBox
      }, _react.default.createElement(_antd.Row, null, _react.default.createElement(_antd.Col, {
        span: 8
      }, _react.default.createElement("div", {
        className: _style.default.musicIcon
      }, musicUrl ? _react.default.createElement(_antd.Icon, {
        type: "customer-service"
      }) : _react.default.createElement(_antd.Icon, {
        type: "plus"
      }))), _react.default.createElement(_antd.Col, {
        span: 16
      }, _react.default.createElement("div", {
        className: _style.default.musicRight
      }, _react.default.createElement("p", null, musicTitle ? musicTitle : '上传音乐格式为MP3'), _react.default.createElement("div", {
        onClick: this.media
      }, _react.default.createElement(_Form.Button, {
        title: "\u9009\u62E9\u97F3\u4E50"
      }))))), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _style.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _style.default.checkboxC
      }, _react.default.createElement(_antd.Checkbox, {
        checked: loop == 0 ? true : false,
        onChange: this.onChange,
        className: _style.default.checkbox
      }, "\u662F\u5426\u5FAA\u73AF")), "\u5FAA\u73AF\u64AD\u653E"), _react.default.createElement("div", {
        className: _style.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _style.default.checkboxC
      }, _react.default.createElement(_antd.Checkbox, {
        checked: defaultPlay,
        onChange: this.handlePlay,
        className: _style.default.checkbox
      }, "\u662F\u5426\u64AD\u653E")), "\u9ED8\u8BA4\u64AD\u653E"), _react.default.createElement("div", {
        className: _style.default.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style.default.checkboxC
      }, _react.default.createElement(_Form.Button, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px'
        },
        title: "\u9009\u62E9\u573A\u666F"
      })), "\u5E94\u7528\u5230:"), _react.default.createElement(_AllScene.default, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: {
          musicUrl: musicUrl,
          musicTitle: musicTitle,
          loop: loop,
          defaultPlay: defaultPlay
        },
        onOk: this.setAllScene
      }), _react.default.createElement(_Media.default, {
        title: "\u97F3\u4E50",
        mediaType: "2",
        visible: this.state.media,
        onCancel: this.onCancel,
        accept: ".mp3"
      }));
    }
  }]);

  return Music;
}(_react.Component);

var _default = Music;
exports.default = _default;