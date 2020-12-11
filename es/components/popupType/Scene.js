import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import styles from './style.less';
import { connect } from 'dva';
import { panoImgConfig } from '@/utils/oss.config';
var Scene = (_dec = connect(function (_ref) {
  var loading = _ref.loading,
      scene = _ref.scene;
  return {
    loading: loading,
    scene: scene.all
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scene, _React$Component);

  function Scene() {
    _classCallCheck(this, Scene);

    return _possibleConstructorReturn(this, _getPrototypeOf(Scene).apply(this, arguments));
  }

  _createClass(Scene, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          scene = _this$props.scene,
          data = _this$props.data,
          onChange = _this$props.onChange;
      return React.createElement("div", null, React.createElement("div", {
        className: styles.title
      }, "\u9009\u62E9\u76EE\u6807\u573A\u666F"), React.createElement("div", {
        className: styles.panoLists
      }, React.createElement(_Row, null, scene.map(function (item) {
        return React.createElement(_Col, {
          key: item.id,
          span: 8,
          className: styles.panoList,
          onClick: function onClick() {
            return onChange(item);
          }
        }, React.createElement("div", null, React.createElement("img", {
          alt: "img",
          src: panoImgConfig(item.thumb.path),
          style: {
            width: '100%',
            height: '62px',
            border: data && data.sceneId == item.id ? '2px solid #008aff' : ''
          }
        })), React.createElement("span", null, item.name));
      }))));
    }
  }]);

  return Scene;
}(React.Component)) || _class);
export { Scene as default };