function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { Drawer, ItemBox } from '@/components/';
import { EmbedType, Pic, Sequence, Text, Video } from '../action';
import style from './style.less';

var EmbedAction =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmbedAction, _React$Component);

  function EmbedAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmbedAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmbedAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.receiveData = function (data) {
      _this.props.onChange(data);
    };

    return _this;
  }

  _createClass(EmbedAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          embedType = _this$props.embedType,
          data = _this$props.data,
          isVip = _this$props.isVip;
      return React.createElement("div", null, embedType == 1 && React.createElement(Text, _extends({}, data, {
        onChange: this.receiveData
      })), embedType == 2 && React.createElement(Pic, _extends({}, data, {
        onChange: this.receiveData
      })), embedType == 3 && React.createElement(Sequence, _extends({}, data, {
        onChange: this.receiveData
      })), embedType == 4 && React.createElement(Video, _extends({}, data, {
        is_vip: isVip,
        onChange: this.receiveData
      })));
    }
  }]);

  return EmbedAction;
}(React.Component);

export { EmbedAction as default };