import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";

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
import { connect } from 'dva';
import { ItemBox, Drawer } from '@/components/';
import { Button } from '@/components/Form';
import style from './style.less';
import Scene from './scene';

var residualArr = function residualArr(arr1, arr2) {
  var new_arr = [];
  arr1.map(function (item) {
    if (!arr2.some(function (j) {
      return item.id == j.scene_id && item.x !== '' && item.x !== null;
    })) {
      new_arr.push(item);
    }
  });
  return new_arr;
};

var SceneList =
/*#__PURE__*/
function (_Component) {
  _inherits(SceneList, _Component);

  function SceneList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SceneList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SceneList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: {
        heading: 0,
        align: 'topleft',
        x: 0,
        y: 0
      }
    };

    _this.handleScene = function (scene) {
      //选择场景后返回的sceneId 和 scene.name
      var data = _this.state.data;

      _this.setState({
        data: _objectSpread({}, data, {
          scene_name: scene.name,
          scene_id: scene.id,
          scene_thumb: scene.thumb.path,
          domain: scene.domain
        })
      });
    };

    _this.handleSave = function () {
      var data = _this.state.data;

      if (data.scene_id) {
        _this.props.onCancel(data);

        _this.setState({
          data: {
            heading: 0,
            align: 'topleft',
            x: 0,
            y: 0
          }
        });
      }
    };

    _this.handleCancel = function () {
      _this.props.onCancel();
    };

    return _this;
  }

  _createClass(SceneList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          spots = _this$props.spots,
          scene = _this$props.scene;
      var data = this.state.data;
      return React.createElement(Drawer, {
        visible: visible,
        title: "\u9009\u62E9\u573A\u666F",
        destroyOnClose: false,
        onCancel: this.handleCancel
      }, React.createElement(ItemBox, null, React.createElement(Scene, {
        data: data,
        spots: spots,
        onChange: this.handleScene
      })), React.createElement(ItemBox, null, React.createElement(_Row, {
        style: {
          margin: '0 -10px'
        }
      }, React.createElement(_Col, {
        span: 24,
        className: style.panoList
      }, React.createElement(Button, {
        disabled: residualArr(scene, spots).length > 0 ? false : true,
        style: {
          backgroundColor: '#008aff',
          borderColor: '#008aff',
          color: 'rgba(255,255,255,1)'
        },
        title: "\u5B8C\u6210",
        onClick: this.handleSave
      })))));
    }
  }]);

  return SceneList;
}(Component);

export default connect(function (_ref) {
  var scene = _ref.scene;
  return {
    scene: scene.all
  };
})(SceneList);