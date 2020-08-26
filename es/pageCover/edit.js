import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/message/style";
import _Message from "antd/es/message";
import "antd/es/select/style";
import _Select from "antd/es/select";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from "react";
import { Component } from "react";
import { ItemBox, Right, Content, Help } from '@/components/';
import { SliderSingle, Color } from '@/components/Form';
import style from './style.less';
import { helpShow } from '@/utils/help';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';
var optionData = [{
  id: 1,
  value: 1,
  label: '自动进入'
}, {
  id: 2,
  value: 2,
  label: '点击进入'
}];
var Option = _Select.Option;

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
          _Message.warning('类型错误！');

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
          _Message.warning('类型错误！');

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
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "PC\u7AEF"), helpShow && helpShowFlag && React.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(ItemImg, {
        url: pc_img ? mediaImgConfig(pc_img, 'img') : '',
        imgSize: "500X500",
        onChange: function onChange(arr) {
          return _this2.handleImg('pc_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('pc_img');
        }
      }), React.createElement("div", {
        className: style.mb10
      })), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.mb10
      }), React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u79FB\u52A8\u7AEF"), helpShow && helpShowFlag && React.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(ItemImg, {
        url: app_img ? mediaImgConfig(app_img, 'img') : '',
        imgSize: "300X300",
        onChange: function onChange(arr) {
          return _this2.handleImg('app_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('app_img');
        }
      }), React.createElement("div", {
        className: style.mb10
      })), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.mb10
      }), React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u8FDB\u5165\u65B9\u5F0F"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: style.selectDiv
      }, React.createElement(_Select, {
        placeholder: "\u9009\u62E9\u8FDB\u5165\u65B9\u5F0F",
        name: "imageurl",
        value: type,
        style: {
          width: '100%'
        },
        onChange: this.handleEntryMode
      }, optionData.map(function (item, index) {
        return React.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }))), React.createElement("div", {
        className: style.mb10
      }), type == 1 && React.createElement("div", null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u505C\u7559\u65F6\u957F"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: style.sliderDiv
      }, React.createElement(SliderSingle, {
        defaultValue: time,
        max: 60,
        min: 1,
        step: 1,
        onChange: function onChange(value) {
          return _this2.handleTime(value);
        }
      })), React.createElement("div", {
        className: style.mb10
      }))), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.mb10
      }), React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u80CC\u666F\u8272\u8BBE\u7F6E"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(Color, {
        color: bg_color,
        onChange: this.handleBgColor
      }), React.createElement("div", {
        className: style.mb10
      }), React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Checkbox, {
        checked: repeat == 1 ? true : false,
        onChange: this.setRepeat,
        className: style.checkbox
      }, "\u80CC\u666F\u5E73\u94FA")), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u80CC\u666F\u56FE\u8BBE\u7F6E"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(ItemImg, {
        url: bg_img ? mediaImgConfig(bg_img, 'img') : '',
        imgSize: "100X100",
        onChange: function onChange(arr) {
          return _this2.handleImg('bg_img', arr);
        },
        onDel: function onDel() {
          return _this2.handleDel('bg_img');
        }
      }), React.createElement("div", {
        className: style.mb10
      })));
    }
  }]);

  return PromptEdit;
}(Component);

export default PromptEdit;