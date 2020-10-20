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
import AppliedToScene from './appliedToScene';

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
      bmapVisible: false,
      lng: '',
      lat: '',
      province: '',
      city: '',
      district: '',
      address: ''
    };

    _this.showBmap = function () {
      _this.setState({
        bmapVisible: true
      });
    };

    _this.cancelBmap = function () {
      _this.setState({
        bmapVisible: false
      });
    };

    _this.handlePoint = function (e) {
      _this.setState({
        lng: e ? e.lng : '',
        lat: e ? e.lat : '',
        province: e ? e.province : '',
        city: e ? e.city : '',
        district: e ? e.district : '',
        address: e ? e.address : ''
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          lng = _this$state.lng,
          lat = _this$state.lat,
          province = _this$state.province,
          city = _this$state.city,
          district = _this$state.district,
          address = _this$state.address;
      var point = {
        lng: lng,
        lat: lat,
        province: province,
        city: city,
        district: district,
        address: address ? address : ''
      };

      _this.props.onChange(point);

      _this.refBmap.setPoint(point);
    };

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        lng: data && data.lng ? data.lng : '',
        lat: data && data.lat ? data.lat : '',
        province: data && data.province ? data.province : '',
        city: data && data.city ? data.city : '',
        district: data && data.district ? data.district : '',
        address: data && data.address ? data.address : ''
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var data = this.props.data;

      if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
        if (data) {
          this.setState({
            lng: data && data.lng ? data.lng : '',
            lat: data && data.lat ? data.lat : '',
            province: data && data.province ? data.province : '',
            city: data && data.city ? data.city : '',
            district: data && data.district ? data.district : '',
            address: data && data.address ? data.address : ''
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          title = _this$props.title;
      var _this$state2 = this.state,
          bmapVisible = _this$state2.bmapVisible,
          lng = _this$state2.lng,
          lat = _this$state2.lat,
          province = _this$state2.province,
          city = _this$state2.city,
          district = _this$state2.district,
          address = _this$state2.address;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement("a", {
        onClick: function onClick() {
          return _this2.showBmap();
        }
      }, "\u8BBE\u7F6E\u6807\u6CE8")), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, title), helpShow && React.createElement("div", {
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
      }, React.createElement("div", null, React.createElement(MapSearchField, {
        id: "mapView",
        value: {
          lng: data.lng,
          lat: data.lat
        } //默认坐标
        ,
        isposition: "false" // searchinput={"false"}             //是否有输入框
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
      }), React.createElement("p", {
        style: {
          display: lng && lat ? 'none' : 'block'
        }
      }, "\u5F53\u524D\u9879\u76EE", React.createElement("br", null), "\u6682\u672A\u8BBE\u7F6E\u5730\u56FE\u6807\u6CE8"), React.createElement("span", null), React.createElement("div", {
        className: style.delLocation,
        style: {
          display: lng && lat ? 'block' : 'none'
        },
        onClick: function onClick() {
          return _this2.handlePoint('');
        }
      }, React.createElement(_Icon, {
        type: "delete"
      }))))), this.props.applied && React.createElement(ItemBox, null, React.createElement("div", null, React.createElement("span", {
        style: {
          float: 'right'
        }
      }, React.createElement(AppliedToScene, {
        scenes: this.props.scenes,
        onSetAll: this.props.onSetAll
      })), "\u5E94\u7528\u5230\uFF1A")), React.createElement(BmapModal, {
        visible: bmapVisible,
        point: {
          lng: lng,
          lat: lat
        },
        title: "\u5730\u56FE\u6807\u6CE8",
        onCancel: this.cancelBmap,
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