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
import style from './style.less';
import { helpShow } from '@/utils/help';
import ItemImg from '../components/ItemImg';
import { SliderSingle } from '@/components/Form';

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
      time: 5
    };

    _this.pcSelectMedia = function (arr) {
      _this.setState({
        pc_img: arr.join()
      }, function () {
        _this.save();
      });
    };

    _this.appSelectMedia = function (arr) {
      _this.setState({
        app_img: arr.join()
      }, function () {
        _this.save();
      });
    };

    _this.displayTime = function (value) {
      _this.setState({
        time: value
      }, function () {
        _this.save();
      });
    };

    _this.pcDel = function () {
      _this.setState({
        pc_img: ''
      }, function () {
        _this.save();
      });
    };

    _this.appDel = function () {
      _this.setState({
        app_img: ''
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
        time: data.time == 0 || data.item != '' || data.item != undefined ? data.time : 5
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          pc_img = _this$state.pc_img,
          app_img = _this$state.app_img,
          time = _this$state.time;
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
        url: pc_img,
        imgSize: "300X300",
        onChange: this.pcSelectMedia,
        onDel: this.pcDel
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
        url: app_img,
        imgSize: "300X300",
        onChange: this.appSelectMedia,
        onDel: this.appDel
      }), React.createElement("div", {
        className: style.mb10
      })), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.mb10
      }), React.createElement("div", {
        className: style.title
      }, "\u663E\u793A\u65F6\u95F4(S)"), React.createElement("div", {
        className: style.sliderDiv
      }, React.createElement(SliderSingle, {
        defaultValue: time,
        max: 10,
        min: 0,
        step: 1,
        onChange: function onChange(value) {
          return _this2.displayTime(value);
        }
      }))));
    }
  }]);

  return PromptEdit;
}(Component);

export default PromptEdit;