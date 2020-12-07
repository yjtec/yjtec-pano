import "antd/es/switch/style";
import _Switch from "antd/es/switch";

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

import React from "react";
import { Component } from "react";
import { ItemBox, Help } from '@/components/';
import style from './style.less';
import { helpShow } from '@/utils/help';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

var LoadingEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingEdit, _Component);

  function LoadingEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadingEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadingEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      state: false,
      url: ''
    };

    _this.loadingState = function (e) {
      _this.setState({
        state: e
      }, function () {
        _this.save();
      });
    };

    _this.selectImg = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, function () {
        _this.save();
      });
    };

    _this.delImg = function () {
      _this.setState({
        url: ''
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(LoadingEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          url = _this$state.url,
          state = _this$state.state;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Switch, {
        size: "small",
        checked: state,
        onClick: function onClick(e) {
          return _this2.loadingState(e);
        }
      })), "\u52A0\u8F7D\u52A8\u753B", React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement("div", {
        className: style.tips
      }, "\u6CE8\uFF1A\u5F00\u542F\u540E\u9879\u76EE\u52A0\u8F7D\u52A8\u753B\u5C06\u4F7F\u7528\u4F60\u81EA\u5B9A\u4E49\u7684\u52A8\u753B")), React.createElement(ItemImg, {
        url: url ? mediaImgConfig(url, 'img') : '',
        imgSize: "100X100",
        onChange: this.selectImg,
        onDel: this.delImg
      })));
    }
  }]);

  return LoadingEdit;
}(Component);

export default LoadingEdit;