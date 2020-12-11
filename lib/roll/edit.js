"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@/components/");

var _ApplyToScene = _interopRequireDefault(require("@/components/ApplyToScene"));

var _container = _interopRequireDefault(require("./container"));

var _style3 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

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
  height: '30',
  bgcolor: '#000000',
  bgalpha: '0.6',
  speed: '50',
  interval_time: '1'
};
var defaultCssData = {
  fontFamily: '微软雅黑',
  fontSize: '12px',
  color: {
    r: 255,
    g: 255,
    b: 255,
    a: 1
  },
  fontWeight: 'normal',
  fontStyle: 'none',
  textDecoration: 'none',
  textAlign: 'center',
  lineHeight: '30px',
  textIndent: '0px',
  letterSpacing: '0px'
};

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, props));

    _this.textValue = function (e) {
      _this.setState({
        text: e.target.value
      }, function () {
        _this.runChange();
      });
    };

    _this.text = function (re) {
      var newCss = '';

      if (re.colorRgba) {
        newCss = _objectSpread({}, re, {
          color: re.colorRgba
        });
      } else {
        newCss = _objectSpread({}, re);
      }

      delete newCss.colorRgba;

      _this.setState({
        css: newCss
      }, function () {
        _this.runChange();
      });
    };

    _this.container = function (re) {
      _this.setState({
        height: re.height,
        bgcolor: re.bgcolor,
        bgalpha: re.bgalpha,
        speed: re.speed,
        interval_time: re.interval_time
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          text = _this$state.text,
          css = _this$state.css,
          height = _this$state.height,
          bgcolor = _this$state.bgcolor,
          bgalpha = _this$state.bgalpha,
          speed = _this$state.speed,
          interval_time = _this$state.interval_time;

      _this.props.onChange({
        text: text,
        height: height,
        bgcolor: bgcolor,
        bgalpha: bgalpha,
        speed: speed,
        interval_time: interval_time,
        css: css
      });
    };

    _this.appliedToScene = function () {
      _this.setState({
        selectSceneVisible: true
      });
    };

    _this.onCancelAppliedToScene = function () {
      _this.setState({
        selectSceneVisible: false
      });
    };

    _this.setAllScene = function (data, sceneIds) {
      _this.props.onSetAll(data, sceneIds);
    };

    var scenes = props.scenes,
        _data = props.data;
    _this.state = {
      selectSceneVisible: false,
      categoryArr: scenes ? scenes.data.category : [],
      scenesArr: scenes ? scenes.data.scenes : [],
      text: _data ? _data.text : '',
      css: _data && _data.css ? _data.css : defaultCssData,
      height: _data && _data.height ? _data.height : defaultData.height,
      bgcolor: _data && _data.bgcolor ? _data.bgcolor : defaultData.bgcolor,
      bgalpha: _data && _data.bgalpha ? _data.bgalpha : defaultData.bgalpha,
      speed: _data && _data.speed ? _data.speed : defaultData.speed,
      interval_time: _data && _data.interval_time ? _data.interval_time : defaultData.interval_time
    };
    return _this;
  }

  _createClass(Text, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          data = _this$props.data,
          scenes = _this$props.scenes;

      if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
        if (this.props.data) {
          this.setState({
            text: data.text,
            css: data && data.css ? data.css : defaultCssData,
            height: data && data.height ? data.height : defaultData.height,
            bgcolor: data && data.bgcolor ? data.bgcolor : defaultData.bgcolor,
            bgalpha: data && data.bgalpha ? data.bgalpha : defaultData.bgalpha,
            speed: data && data.speed ? data.speed : defaultData.speed,
            interval_time: data && data.interval_time ? data.interval_time : defaultData.interval_time
          });
        }
      }

      if (!_yjtecSupport.Obj.isEqual(prevState.categoryArr, scenes.data.category) || !_yjtecSupport.Obj.isEqual(prevState.scenesArr, scenes.data.scenes)) {
        this.setState(_objectSpread({}, this.state, {
          categoryArr: scenes.data.category,
          scenesArr: scenes.data.scenes
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          text = _this$state2.text,
          css = _this$state2.css,
          height = _this$state2.height,
          bgcolor = _this$state2.bgcolor,
          bgalpha = _this$state2.bgalpha,
          speed = _this$state2.speed,
          interval_time = _this$state2.interval_time,
          selectSceneVisible = _this$state2.selectSceneVisible,
          categoryArr = _this$state2.categoryArr,
          scenesArr = _this$state2.scenesArr;
      var containerData = {
        height: height,
        bgcolor: bgcolor,
        bgalpha: bgalpha,
        speed: speed,
        interval_time: interval_time
      };
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style3.default.title,
        style: {
          margin: '0 0 10px 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style3.default.checkboxC
      }, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px',
          color: '#fff',
          borderColor: '#008aff'
        }
      }, "\u5E94\u7528\u5230")), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u6EDA\u52A8\u5B57\u5E55"), _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '20px',
          height: '20px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        link: 'roll',
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
        className: _style3.default.setupInput
      }, _react.default.createElement(_input.default.TextArea, {
        value: text,
        autosize: {
          minRows: 3,
          maxRows: 3
        },
        placeholder: "\u8BF7\u8F93\u5165\u6587\u5B57\u4FE1\u606F",
        style: {
          borderRadius: 3
        },
        onChange: this.textValue
      }))), _react.default.createElement(_container.default, {
        data: containerData,
        onChange: this.container
      }), _react.default.createElement(_components.TextCss, {
        data: css,
        onChange: this.text
      }), _react.default.createElement(_ApplyToScene.default, {
        visible: selectSceneVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: '',
        onOk: this.setAllScene
      }));
    }
  }]);

  return Text;
}(_react.default.Component);

exports.default = Text;