import "antd/es/icon/style";
import _Icon from "antd/es/icon";

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
import { connect } from 'dva';
import { ItemBox, Right, Help } from '@/components/';
import { AsyncLoadMap, loadBdMap, MapSearchField } from "@yjtec/bmap";
import BmapModal from './bmapModal';
import { helpShow } from '@/utils/help';
import style from './style.less';

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.bmapVisible = function () {
      _this.props.onBmapVisible();
    };

    _this.handlePoint = function (value) {
      _this.props.onHandlePoint(value);

      _this.refBmap.setPoint({
        lng: value.lng,
        lat: value.lat
      });
    };

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          bmapVisible = _this$props.bmapVisible,
          point = _this$props.point,
          data = _this$props.data;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement("a", {
        onClick: function onClick() {
          return _this2.bmapVisible();
        }
      }, "\u8BBE\u7F6E\u6807\u6CE8")), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u5BFC\u822A\u6807\u6CE8"), helpShow && React.createElement("div", {
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
        className: style.mapBox
      }, React.createElement("div", null, data.lng && data.lat || data.lng == '' || data.lat == '' ? React.createElement(MapSearchField, {
        id: "mapView",
        value: {
          lng: data.lng,
          lat: data.lat
        } //默认坐标
        // searchinput={"false"}                  //是否有输入框
        ,
        onChange: this.props.handleCoordinateInfo,
        ref: function ref(_ref) {
          return _this2.refBmap = _ref;
        } //把子组件的方法提到父组件中
        ,
        style: {
          width: '200px',
          height: '200px'
        }
      }) : '', React.createElement("p", {
        style: {
          display: data.lng && data.lat ? 'none' : 'block'
        }
      }, "\u5F53\u524D\u9879\u76EE", React.createElement("br", null), "\u6682\u672A\u8BBE\u7F6E\u5730\u56FE\u6807\u6CE8"), React.createElement("span", null), React.createElement("div", {
        className: style.delLocation,
        style: {
          display: data.lng && data.lat ? 'block' : 'none'
        },
        onClick: function onClick() {
          return _this2.props.delLocation();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      }))))), React.createElement(BmapModal, {
        visible: bmapVisible,
        point: {
          lng: data.lng,
          lat: data.lat
        },
        title: "\u5730\u56FE\u6807\u6CE8",
        onCancel: this.props.onCancelBmap,
        onOk: this.handlePoint
      }));
    }
  }]);

  return Index;
}(Component);

export default (function (props) {
  return React.createElement(AsyncLoadMap, {
    renderLoading: React.createElement("div", null, "\u52A0\u8F7D\u4E2D&&&")
  }, React.createElement(Index, props));
});