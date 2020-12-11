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
import { ItemBox, Content, Help } from '@/components/';
import styles from './style.less';
import { helpShow } from '@/utils/help';
import Temp1 from '../assets/images/temp1.jpg';
var tempList = [{
  key: 1,
  type: 1,
  title: '系统模板',
  img: Temp1,
  url: '',
  dec: '系统模板可自定义界面UI'
} // {key:2,type:2,title:'系统模板',img:Temp1,url:'',dec:'系统模板可自定义界面UI'},
];

var SysTempEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SysTempEdit, _React$Component);

  function SysTempEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SysTempEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SysTempEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: 1
    };

    _this.setType = function (e) {
      _this.setState({
        type: e
      }, function () {
        return _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(SysTempEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.state.type;
      return React.createElement("div", null, React.createElement(ItemBox, null, tempList.map(function (item) {
        return React.createElement("div", {
          key: item.key,
          style: {
            marginBottom: '20px'
          }
        }, React.createElement("div", {
          className: styles.title,
          onClick: function onClick() {
            return _this2.setType(item.type);
          }
        }, React.createElement("span", {
          className: styles.checkboxC
        }, React.createElement(_Switch, {
          size: "small",
          checked: type == item.type ? true : false
        })), item.title, React.createElement("div", {
          style: {
            clear: 'both'
          }
        })), React.createElement("div", {
          className: styles.tempListC
        }, React.createElement("div", {
          className: styles.tempListImg
        }, React.createElement("img", {
          src: item.img,
          alt: item.title
        })), React.createElement("div", {
          className: styles.tips
        }, item.dec)));
      })));
    }
  }]);

  return SysTempEdit;
}(React.Component);

export { SysTempEdit as default };