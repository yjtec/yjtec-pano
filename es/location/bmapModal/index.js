import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/button/style";
import _Button from "antd/es/button";
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

import React, { Component } from "react";
import { AsyncLoadMap, loadBdMap, MapSearchField } from "@yjtec/bmap";
import './style.less';

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
    _this.state = {
      point: {},
      coordinateInfo: {},
      inputValue: '',
      localSearchArr: []
    };

    _this.handleInputValue = function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    };

    _this.search = function () {
      _this.ref.getRelationList(_this.state.inputValue);
    };

    _this.handlePoint = function (value) {
      _this.setState({
        coordinateInfo: value,
        point: {
          lng: value.lng,
          lat: value.lat
        },
        inputValue: value.keyword
      });
    };

    _this.onCancel = function () {
      _this.props.onCancel();
    };

    _this.onOk = function () {
      _this.onCancel();

      _this.props.onOk(_this.state.coordinateInfo);
    };

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var point = this.props.point;
      this.setState({
        point: point
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(newProps) {
      if (this.props.point.lng != newProps.point.lng) {
        if (JSON.stringify(this.props.point) != '{}') {
          this.setState({
            point: this.props.point
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var localSearchArr = this.state.localSearchArr;
      var _this$props = this.props,
          visible = _this$props.visible,
          title = _this$props.title;
      return React.createElement(_Modal, {
        title: title,
        onOk: this.onOk,
        onCancel: this.onCancel,
        visible: visible,
        width: 800,
        className: "selectScene",
        forceRender: true,
        destroyOnClose: true
      }, React.createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, React.createElement(_Input, {
        id: "mapSearchInput",
        value: this.state.inputValue,
        onChange: this.handleInputValue,
        style: {
          width: '200px',
          float: 'left'
        }
      }), React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.search();
        },
        style: {
          marginLeft: '10px'
        }
      }, "\u641C\u7D22")), React.createElement("div", null, React.createElement(MapSearchField, {
        id: 'mapsearch',
        value: this.props.point //默认坐标
        ,
        searchinput: 'true' //是否有输入框
        ,
        inputid: "mapSearchInput" //绑定input ID
        // getres={this.getRes}                //结果面板信息
        ,
        control: 'true' //是否显示 左上角，添加默认缩放平移控件
        ,
        onChange: this.handlePoint,
        ref: function ref(_ref) {
          return _this2.ref = _ref;
        } //把子组件的方法提到父组件中
        ,
        style: {
          width: '100%',
          minHeight: '400px',
          background: '#f5f5f5'
        }
      })));
    }
  }]);

  return Index;
}(Component);

export default (function (props) {
  return React.createElement(AsyncLoadMap, {
    renderLoading: React.createElement("div", null, "\u52A0\u8F7D\u4E2D&&&")
  }, React.createElement(Index, props));
});