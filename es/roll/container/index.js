import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";

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

import React from "react";
import { Component } from "react";
import { ItemBox } from '@/components/';
import { InputNumber, Input, Button, Select, Color, SliderSingle } from '@/components/Form';
import styles from './style.less';
import { connect } from 'dva';
import { Obj } from 'yjtec-support';
import { hexToRgb } from '@/utils/utils';

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _this.configuration = function (id, value) {
      _this.setState({
        height: value
      }, function () {
        _this.runChange();
      });
    };

    _this.getContainerBgColor = function (e) {
      _this.setState({
        bgcolor: e.hex,
        bgalpha: e.rgb.a
      }, function () {
        _this.runChange();
      });
    };

    _this.handleSpeed = function (value) {
      _this.setState({
        speed: value
      }, function () {
        _this.runChange();
      });
    };

    _this.handleIntervalTime = function (value) {
      _this.setState({
        interval_time: value
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      _this.props.onChange(_this.state);
    };

    var data = props.data;
    _this.state = _objectSpread({}, data);
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;
        this.setState(_objectSpread({}, data));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          border = _this$state.border,
          borderRadius = _this$state.borderRadius,
          bgcolor = _this$state.bgcolor,
          borderColor = _this$state.borderColor,
          bgalpha = _this$state.bgalpha,
          speed = _this$state.speed,
          interval_time = _this$state.interval_time;
      var containerSize = [{
        id: 1,
        title: '高',
        name: '高',
        inputNumber: {
          min: 1,
          max: 500,
          inputNumberValue: this.state.height
        }
      }];
      var sliderSingleData = [{
        key: 1,
        title: '滚动速度',
        defaultValue: Number(speed),
        max: 200,
        min: 0,
        step: 5
      }, {
        key: 2,
        title: '间隔时间',
        defaultValue: Number(interval_time),
        max: 10,
        min: 0,
        step: 0.1
      }];
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title
      }, "\u5BB9\u5668\u5C3A\u5BF8"), React.createElement(_Row, {
        style: {
          margin: '0 -5px 10px'
        }
      }, containerSize.map(function (item) {
        return React.createElement(_Col, {
          key: item.id,
          span: 24,
          style: {
            padding: '0 5px'
          }
        }, React.createElement(InputNumber, _extends({}, item.inputNumber, {
          name: item.name,
          onChange: function onChange(value) {
            return _this2.configuration(item.id, value);
          }
        })));
      })), React.createElement("div", {
        className: styles.title
      }, "\u5BB9\u5668\u80CC\u666F"), React.createElement("div", null, React.createElement(Color, {
        color: bgcolor && _objectSpread({}, hexToRgb(bgcolor), {
          a: bgalpha
        }),
        onChange: this.getContainerBgColor
      })), sliderSingleData.map(function (item) {
        return React.createElement("div", {
          key: item.key
        }, React.createElement("div", {
          className: styles.title
        }, item.title), React.createElement("div", {
          className: styles.sliderDiv
        }, React.createElement(SliderSingle, {
          defaultValue: item.defaultValue,
          max: item.max,
          min: item.min,
          step: item.step,
          onChange: item.key == 1 ? function (value) {
            return _this2.handleSpeed(value);
          } : function (value) {
            return _this2.handleIntervalTime(value);
          }
        })));
      })));
    }
  }]);

  return Index;
}(Component);

export default Index;