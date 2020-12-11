import "antd/es/switch/style";
import _Switch from "antd/es/switch";

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
import styles from './style.less';
import { helpShow } from '@/utils/help';
var actionData = [{
  title: '普通开场',
  type: 1
}, {
  title: '水平巡游开场',
  type: 2
}, {
  title: '小行星巡游开场',
  type: 3
}, {
  title: '小行星开场',
  type: 4
}, {
  title: '水晶球开场',
  type: 5
}];

var OpenAnimation =
/*#__PURE__*/
function (_Component) {
  _inherits(OpenAnimation, _Component);

  function OpenAnimation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OpenAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OpenAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: 1
    };

    _this.selectAction = function (value) {
      _this.setState({
        type: value
      }, function () {
        _this.runChenge();
      });
    };

    _this.runChenge = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(OpenAnimation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        type: data && data.type ? data.type : 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.state.type;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5F00\u573A\u52A8\u753B"), helpShow && React.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        link: 'open_animation',
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), actionData.map(function (item) {
        return React.createElement("div", {
          className: styles.itemBox,
          key: item.type,
          onClick: function onClick() {
            return _this2.selectAction(item.type);
          }
        }, React.createElement(_Switch, {
          size: "small",
          checked: item.type == type ? true : false,
          style: {
            float: 'right',
            marginTop: '8px'
          }
        }), item.title);
      })));
    }
  }]);

  return OpenAnimation;
}(Component);

export default OpenAnimation;