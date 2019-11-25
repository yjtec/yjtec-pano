import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/button/style";
import _Button from "antd/es/button";

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
import { Component } from 'react';
import style from './style.less';
import UploadImg from '@/components/Media';
import { ossImgMedia, ossPano } from '@/utils/oss';
import { Obj } from 'yjtec-support';
import Modal from '@/components/AllScene';

var Pic =
/*#__PURE__*/
function (_Component) {
  _inherits(Pic, _Component);

  function Pic() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pic)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      sceneListVisible: false
    };

    _this.delSkyImg = function () {
      _this.props.onDelSkyImg();
    };

    _this.mediaSky = function () {
      _this.props.onSelect();
    };

    _this.onCancel = function (url) {
      _this.props.onCancel(url);
    };

    _this.appliedToScene = function () {
      _this.setState({
        sceneListVisible: true
      });
    };

    _this.onCancelAppliedToScene = function () {
      _this.setState({
        sceneListVisible: false
      });
    };

    _this.setAllScene = function (data, sceneIds) {
      _this.props.apply(data, sceneIds);
    };

    return _this;
  }

  _createClass(Pic, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          visible = _this$props.visible,
          url = _this$props.url,
          categoryArr = _this$props.categoryArr,
          scenesArr = _this$props.scenesArr;
      var sceneListVisible = this.state.sceneListVisible;
      return React.createElement("div", null, React.createElement("div", {
        className: style.title,
        style: {
          margin: '10px 0 10px 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px',
          color: '#fff',
          borderColor: '#008aff'
        }
      }, "\u5E94\u7528\u5230")), title), React.createElement(_Row, null, React.createElement(_Col, {
        span: 24,
        className: style.mb10
      }, !Obj.isNull(url) ? React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("img", {
        alt: "aa",
        src: ossImgMedia(url, 'media'),
        className: style.img
      }), React.createElement("div", {
        className: style.delimg,
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      }))) : React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("span", null, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500"))), React.createElement(_Col, {
        span: 12
      }, React.createElement(_Button, {
        type: "primary",
        onClick: this.mediaSky
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement(_Col, {
        span: 12,
        className: style.prompt
      }, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500"), React.createElement(UploadImg, {
        title: "\u56FE\u7247",
        mediaType: "1",
        visible: visible,
        onCancel: this.onCancel,
        accept: ".jpg,.jpeg,.png"
      })), React.createElement(Modal, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: url,
        onOk: this.setAllScene
      }));
    }
  }]);

  return Pic;
}(Component);

export default Pic;