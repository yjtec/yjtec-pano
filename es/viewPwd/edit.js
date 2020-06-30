import "antd/es/input/style";
import _Input from "antd/es/input";

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
import { ItemBox, Help } from '@/components/';
import style from './style.less';
import { helpShow } from '@/utils/help';

var LoadsceneAction =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadsceneAction, _Component);

  function LoadsceneAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadsceneAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadsceneAction)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      view_pwd: '',
      tipsVisible: false
    };

    _this.setViewPwd = function (e) {
      var reg = /^\w+$/;

      if (reg.test(e.target.value) || e.target.value == '') {
        _this.setState({
          view_pwd: e.target.value,
          tipsVisible: false
        }, function () {
          _this.runChenge();
        });
      } else {
        _this.setState({
          view_pwd: _this.state.view_pwd,
          tipsVisible: true
        });
      }
    };

    _this.runChenge = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(LoadsceneAction, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        view_pwd: data ? data.view_pwd : ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          view_pwd = _this$state.view_pwd,
          tipsVisible = _this$state.tipsVisible;
      var helpShowFlag = false;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5BC6\u7801\u8BBF\u95EE"), helpShow && helpShowFlag && React.createElement("div", {
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
      })), React.createElement("div", {
        className: "".concat(style.inputDiv, " ").concat(tipsVisible && style.viewPwd)
      }, React.createElement(_Input.Password, {
        placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
        maxLength: 16,
        value: view_pwd,
        onChange: this.setViewPwd
      })), React.createElement("div", {
        className: style.tigs
      }, "\u6CE8\uFF1A\u4EC5\u652F\u6301 \u82F1\u6587\u5927\u5C0F\u5199\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF\u3002"), React.createElement("div", {
        className: style.mb20
      })));
    }
  }]);

  return LoadsceneAction;
}(Component);

export default LoadsceneAction;