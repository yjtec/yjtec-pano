import "antd/es/switch/style";
import _Switch from "antd/es/switch";
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
import style from './style.less';
import { helpShow } from '@/utils/help';
import { SliderSingle, Button } from '@/components/Form';
var optionData = [{
  id: 1,
  value: 1,
  label: '场景嵌入式'
} // {id:2,value:2,label:'弹幕式'},
];
var Option = _Select.Option;

var CommentEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentEdit, _React$Component);

  function CommentEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      state: true,
      content_state: true,
      type: 1
    };

    _this.commentState = function (e) {
      _this.setState({
        state: e
      }, function () {
        _this.save();
      });
    };

    _this.commentContent = function (e) {
      _this.setState({
        content_state: e
      }, function () {
        _this.save();
      });
    };

    _this.handleEntryMode = function (value) {
      _this.setState({
        type: value
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(CommentEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          state = _this$state.state,
          content_state = _this$state.content_state,
          type = _this$state.type;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Switch, {
        size: "small",
        checked: state,
        onClick: function onClick(e) {
          return _this2.commentState(e);
        }
      })), "\u8BF4\u4E00\u8BF4\u529F\u80FD", React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement("div", {
        className: style.tips
      }, "\u6CE8\uFF1A\u5173\u95ED\u540E\u6240\u6709\u4EBA\u5C06\u4E0D\u80FD\u5BF9\u4F5C\u54C1\u53D1\u8868\u8BF4\u4E00\u8BF4\uFF0C\u9879\u76EE\u5185\u4EE5\u524D\u7684\u8BF4\u4E00\u8BF4\u5C06\u4E0D\u518D\u663E\u793A")), React.createElement("div", {
        className: style.title,
        style: {
          marginTop: '20px'
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Switch, {
        size: "small",
        checked: content_state,
        onClick: function onClick(e) {
          return _this2.commentContent(e);
        }
      })), "\u8BF4\u4E00\u8BF4\u5185\u5BB9", React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement("div", {
        className: style.tips
      }, "\u6CE8\uFF1A\u5173\u95ED\u8BE5\u529F\u80FD\u540E\uFF0C\u6D4F\u89C8\u4F5C\u54C1\u65F6\u8BF4\u4E00\u8BF4\u5185\u5BB9\u9ED8\u8BA4\u9690\u85CF")), React.createElement("div", {
        className: style.title,
        style: {
          marginTop: '20px'
        }
      }, "\u8BF4\u4E00\u8BF4\u5C55\u793A\u7C7B\u578B", React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement("div", {
        className: style.selectDiv,
        style: {
          marginTop: '10px'
        }
      }, React.createElement(_Select, {
        placeholder: "\u9009\u62E9\u5C55\u793A\u65B9\u5F0F",
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
      }))))));
    }
  }]);

  return CommentEdit;
}(React.Component);

export { CommentEdit as default };