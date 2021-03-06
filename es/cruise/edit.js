import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";

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
import { SliderSingle } from '@/components/Form';
import styles from './style.less';
import { helpShow } from '@/utils/help';

var CruiseEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(CruiseEdit, _Component);

  function CruiseEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CruiseEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CruiseEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: 0,
      time: 30,
      speed: 5,
      switchScene: 1,
      angle_view: 1
    };

    _this.isOpen = function (e) {
      _this.setState({
        open: e.target.checked ? 1 : 0
      }, function () {
        _this.runChenge();
      });
    };

    _this.handleRotateTime = function (value) {
      _this.setState({
        time: value
      }, function () {
        _this.runChenge();
      });
    };

    _this.handleSpeed = function (value) {
      _this.setState({
        speed: value
      }, function () {
        _this.runChenge();
      });
    };

    _this.switchScene = function (e) {
      _this.setState({
        switchScene: e.target.checked ? 1 : 0
      }, function () {
        _this.runChenge();
      });
    };

    _this.angleView = function (e) {
      _this.setState({
        angle_view: e.target.checked ? 1 : 0
      }, function () {
        _this.runChenge();
      });
    };

    _this.runChenge = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(CruiseEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        open: data.open,
        time: data.time,
        speed: data.speed ? data.speed : 5,
        switchScene: data.switchScene,
        angle_view: data.angle_view != undefined ? data.angle_view : 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          open = _this$state.open,
          time = _this$state.time,
          speed = _this$state.speed,
          switchScene = _this$state.switchScene,
          angle_view = _this$state.angle_view;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: open == 1 ? true : false,
        onChange: this.isOpen,
        className: styles.checkbox
      })), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5F00\u542F\u81EA\u52A8\u5DE1\u6E38"), helpShow && React.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        link: 'cruise',
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: styles.mb20
      }), React.createElement("div", {
        className: styles.title
      }, "\u573A\u666F\u65CB\u8F6C\u65F6\u95F4(S)"), React.createElement("div", {
        className: styles.sliderDiv
      }, React.createElement(SliderSingle, {
        defaultValue: time,
        max: 180,
        min: 1,
        step: 1,
        onChange: function onChange(value) {
          return _this2.handleRotateTime(value);
        }
      })), React.createElement("div", {
        className: styles.mb20
      }), React.createElement("div", {
        className: styles.title
      }, "\u5DE1\u6E38\u901F\u5EA6(\u5EA6/S)"), React.createElement("div", {
        className: styles.sliderDiv
      }, React.createElement(SliderSingle, {
        defaultValue: speed,
        max: 100,
        min: 1,
        step: 1,
        onChange: function onChange(value) {
          return _this2.handleSpeed(value);
        }
      })), React.createElement("div", {
        className: styles.mb20
      }), React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: switchScene == 1 ? true : false,
        onChange: this.switchScene,
        className: styles.checkbox
      })), "\u65CB\u8F6C\u7ED3\u675F\u540E\u81EA\u52A8\u8DF3\u8F6C\u4E0B\u4E00\u4E2A\u573A\u666F"), React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: angle_view == 1 ? true : false,
        onChange: this.angleView,
        className: styles.checkbox
      })), "\u4F7F\u7528\u573A\u666F\u89C6\u89D2\u5DE1\u6E38")));
    }
  }]);

  return CruiseEdit;
}(Component);

export default CruiseEdit;