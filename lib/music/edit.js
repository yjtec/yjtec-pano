"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _style5 = _interopRequireDefault(require("./style.less"));

var _MediaModal = _interopRequireDefault(require("@/components/MediaModal"));

var _ApplyToScene = _interopRequireDefault(require("@/components/ApplyToScene"));

var _yjtecSupport = require("yjtec-support");

var _help = require("@/utils/help");

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

var defaultData = {
  media: false,
  musicUrl: '',
  musicTitle: '上传音乐格式为MP3',
  loop: 0,
  volume: 100
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
      userMediaVisible: false,
      musicUrl: '',
      musicTitle: '上传音乐格式为MP3',
      loop: 0,
      volume: 100,
      defaultPlay: true,
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
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
      _this.setState({
        musicUrl: arr[0].path.path,
        musicTitle: arr[0].name
      }, function () {
        _this.runChange();
      });

      _this.closeMediaModal();
    };

    _this.setVolume = function (value) {
      _this.setState({
        volume: value
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          musicUrl = _this$state.musicUrl,
          musicTitle = _this$state.musicTitle,
          loop = _this$state.loop,
          defaultPlay = _this$state.defaultPlay,
          volume = _this$state.volume;

      _this.props.onChange({
        musicUrl: musicUrl,
        musicTitle: musicTitle,
        loop: loop,
        defaultPlay: defaultPlay,
        volume: volume
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
      var categoryArr = scenes.data.category;
      var scenesArr = scenes.data.scenes;
      this.setState(_objectSpread({}, defaultData, {}, data, {
        categoryArr: categoryArr,
        scenesArr: scenesArr
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          data = _this$props2.data,
          scenes = _this$props2.scenes;
      var categoryArr = scenes.data.category;
      var scenesArr = scenes.data.scenes;

      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        this.setState(_objectSpread({}, defaultData, {}, this.props.data));
      }

      if (!_yjtecSupport.Obj.isEqual(prevState.categoryArr, categoryArr) || !_yjtecSupport.Obj.isEqual(prevState.scenesArr, scenesArr)) {
        this.setState(_objectSpread({}, this.state, {
          categoryArr: categoryArr,
          scenesArr: scenesArr
        }));
      }
    } //是否循环

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
          scenesArr = _this$state2.scenesArr,
          userMediaVisible = _this$state2.userMediaVisible,
          volume = _this$state2.volume;
      return _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style5.default.title
      }, _react.default.createElement("span", {
        className: _style5.default.checkboxC,
        onClick: function onClick() {
          return _this2.del();
        }
      }, "\u5220\u9664"), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, this.props.title), _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        link: 'music',
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
        className: _style5.default.musicBox
      }, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 8
      }, _react.default.createElement("div", {
        className: _style5.default.musicIcon
      }, musicUrl ? _react.default.createElement(_icon.default, {
        type: "customer-service"
      }) : _react.default.createElement(_icon.default, {
        type: "plus"
      }))), _react.default.createElement(_col.default, {
        span: 16
      }, _react.default.createElement("div", {
        className: _style5.default.musicRight
      }, _react.default.createElement("p", null, musicTitle ? musicTitle : '上传音乐格式为MP3'), _react.default.createElement("div", {
        onClick: this.openMediaModal
      }, _react.default.createElement(_Form.Button, {
        title: "\u9009\u62E9\u97F3\u4E50"
      }))))), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _style5.default.title,
        style: {
          marginTop: 10
        }
      }, "\u8BBE\u7F6E\u97F3\u91CF ", _react.default.createElement("i", {
        style: {
          color: '#999999'
        }
      }, "(\u4EC5PC\u548C\u5B89\u5353\u7AEF\u6709\u6548)")), _react.default.createElement("div", {
        className: _style5.default.sliderDiv
      }, _react.default.createElement(_Form.SliderSingle, {
        defaultValue: volume,
        max: 100,
        min: 1,
        step: 1,
        onChange: function onChange(value) {
          return _this2.setVolume(value);
        }
      })), _react.default.createElement("div", {
        className: _style5.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _style5.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: defaultPlay,
        onChange: this.handlePlay,
        className: _style5.default.checkbox
      })), "\u9ED8\u8BA4\u5F00\u542F ", _react.default.createElement("i", {
        style: {
          color: '#999999'
        }
      }, "(\u8FDB\u5165\u573A\u666F\u81EA\u52A8\u64AD\u653E)")), _react.default.createElement("div", {
        className: _style5.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _style5.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: loop == 0 ? true : false,
        onChange: this.onChange,
        className: _style5.default.checkbox
      })), "\u5FAA\u73AF\u64AD\u653E ", _react.default.createElement("i", {
        style: {
          color: '#999999'
        }
      }, "(\u4E0D\u52FE\u9009\u5219\u53EA\u64AD\u653E1\u6B21)")), _react.default.createElement("div", {
        className: _style5.default.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style5.default.checkboxC
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
      })), "\u5E94\u7528\u5230:"), _react.default.createElement(_ApplyToScene.default, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        style: {
          color: '#000000'
        },
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: {
          musicUrl: musicUrl,
          musicTitle: musicTitle,
          loop: loop,
          defaultPlay: defaultPlay,
          volume: volume
        },
        onOk: this.setAllScene
      }), _react.default.createElement(_MediaModal.default, {
        title: "\u97F3\u4E50\u7D20\u6750\u5E93",
        mediaType: 2,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return Music;
}(_react.Component);

var _default = Music;
exports.default = _default;