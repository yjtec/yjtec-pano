"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/message/style");

var _message = _interopRequireDefault(require("antd/es/message"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _style4 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _oss = require("@/utils/oss.config");

var _ItemImg = _interopRequireDefault(require("../components/ItemImg"));

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

var optionData = [{
  id: 1,
  value: 1,
  label: '自动进入'
}, {
  id: 2,
  value: 2,
  label: '点击进入'
}];
var Option = _select.default.Option;

var PromptEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(PromptEdit, _Component);

  function PromptEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PromptEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PromptEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      pc_img: '',
      app_img: '',
      type: 1,
      time: 5,
      bg_color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.65
      },
      bg_img: '',
      repeat: 1
    };

    _this.handleImg = function (type, arr) {
      switch (type) {
        case 'pc_img':
          _this.setState({
            pc_img: arr[0].path.path
          }, function () {
            _this.save();
          });

          break;

        case 'app_img':
          _this.setState({
            app_img: arr[0].path.path
          }, function () {
            _this.save();
          });

          break;

        case 'bg_img':
          _this.setState({
            bg_img: arr[0].path.path
          }, function () {
            _this.save();
          });

          break;

        default:
          _message.default.warning('类型错误！');

      }
    };

    _this.handleDel = function (type) {
      switch (type) {
        case 'pc_img':
          _this.setState({
            pc_img: ''
          }, function () {
            _this.save();
          });

          break;

        case 'app_img':
          _this.setState({
            app_img: ''
          }, function () {
            _this.save();
          });

          break;

        case 'bg_img':
          _this.setState({
            bg_img: ''
          }, function () {
            _this.save();
          });

          break;

        default:
          _message.default.warning('类型错误！');

      }
    };

    _this.handleEntryMode = function (value) {
      _this.setState({
        type: value
      }, function () {
        _this.save();
      });
    };

    _this.handleTime = function (value) {
      _this.setState({
        time: value
      }, function () {
        _this.save();
      });
    };

    _this.handleBgColor = function (e) {
      _this.setState({
        bg_color: {
          r: e.rgb.r,
          g: e.rgb.g,
          b: e.rgb.b,
          a: e.rgb.a
        }
      }, function () {
        _this.save();
      });
    };

    _this.setRepeat = function (e) {
      _this.setState({
        repeat: e.target.checked ? 1 : 0
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state); // Message.success('保存成功');

    };

    return _this;
  }

  _createClass(PromptEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        pc_img: data.pc_img ? data.pc_img : '',
        app_img: data.app_img ? data.app_img : '',
        type: data.type ? data.type : 1,
        time: data.time ? data.time : 5,
        bg_color: data.bg_color ? data.bg_color : {
          r: 0,
          g: 0,
          b: 0,
          a: 0.65
        },
        bg_img: data.bg_img ? data.bg_img : '',
        repeat: data.repeat ? data.repeat : 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          pc_img = _this$state.pc_img,
          app_img = _this$state.app_img,
          type = _this$state.type,
          time = _this$state.time,
          bg_color = _this$state.bg_color,
          bg_img = _this$state.bg_img,
          repeat = _this$state.repeat;
      var helpShowFlag = false;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "PC\u7AEF"), _help.helpShow && helpShowFlag && _react.default.createElement("div", {
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
      })), _react.default.createElement(_ItemImg.default, {
        url: pc_img ? (0, _oss.mediaImgConfig)(pc_img, 'img') : '',
        imgSize: "500X500",
        onChange: function onChange(arr) {
          return _this2.handleImg('pc_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('pc_img');
        }
      }), _react.default.createElement("div", {
        className: _style4.default.mb10
      })), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style4.default.mb10
      }), _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u79FB\u52A8\u7AEF"), _help.helpShow && helpShowFlag && _react.default.createElement("div", {
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
      })), _react.default.createElement(_ItemImg.default, {
        url: app_img ? (0, _oss.mediaImgConfig)(app_img, 'img') : '',
        imgSize: "300X300",
        onChange: function onChange(arr) {
          return _this2.handleImg('app_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('app_img');
        }
      }), _react.default.createElement("div", {
        className: _style4.default.mb10
      })), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style4.default.mb10
      }), _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u8FDB\u5165\u65B9\u5F0F"), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _style4.default.selectDiv
      }, _react.default.createElement(_select.default, {
        placeholder: "\u9009\u62E9\u8FDB\u5165\u65B9\u5F0F",
        name: "imageurl",
        value: type,
        style: {
          width: '100%'
        },
        onChange: this.handleEntryMode
      }, optionData.map(function (item, index) {
        return _react.default.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }))), _react.default.createElement("div", {
        className: _style4.default.mb10
      }), type == 1 && _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u505C\u7559\u65F6\u957F"), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _style4.default.sliderDiv
      }, _react.default.createElement(_Form.SliderSingle, {
        defaultValue: time,
        max: 60,
        min: 1,
        step: 1,
        onChange: function onChange(value) {
          return _this2.handleTime(value);
        }
      })), _react.default.createElement("div", {
        className: _style4.default.mb10
      }))), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style4.default.mb10
      }), _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u80CC\u666F\u8272\u8BBE\u7F6E"), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement(_Form.Color, {
        color: bg_color,
        onChange: this.handleBgColor
      }), _react.default.createElement("div", {
        className: _style4.default.mb10
      }), _react.default.createElement("div", {
        className: _style4.default.title
      }, _react.default.createElement("span", {
        className: _style4.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: repeat == 1 ? true : false,
        onChange: this.setRepeat,
        className: _style4.default.checkbox
      }, "\u80CC\u666F\u5E73\u94FA")), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u80CC\u666F\u56FE\u8BBE\u7F6E"), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement(_ItemImg.default, {
        url: bg_img ? (0, _oss.mediaImgConfig)(bg_img, 'img') : '',
        imgSize: "100X100",
        onChange: function onChange(arr) {
          return _this2.handleImg('bg_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('bg_img');
        }
      }), _react.default.createElement("div", {
        className: _style4.default.mb10
      })));
    }
  }]);

  return PromptEdit;
}(_react.Component);

var _default = PromptEdit;
exports.default = _default;