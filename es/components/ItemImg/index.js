import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/col/style";
import _Col from "antd/es/col";
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
import { Component } from 'react';
import { Help } from '@/components/';
import style from './style.less';
import { Obj } from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';
import { helpShow } from '@/utils/help';
import { mediaImgConfig } from '@/utils/oss.config';

var ItemImg =
/*#__PURE__*/
function (_Component) {
  _inherits(ItemImg, _Component);

  function ItemImg() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ItemImg);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItemImg)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userMediaVisible: false
    };

    _this.openMediaModal = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.selectMedia = function (arr) {
      _this.props.onChange(arr);

      _this.closeMediaModal();
    };

    _this.del = function () {
      _this.props.onDel();
    };

    return _this;
  }

  _createClass(ItemImg, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var url = this.props.url;
      var userMediaVisible = this.state.userMediaVisible;
      return React.createElement("div", null, React.createElement(_Row, null, React.createElement(_Col, {
        span: 24,
        className: style.mb10
      }, !Obj.isNull(url) ? React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("img", {
        alt: "aa",
        src: mediaImgConfig(url, 'img'),
        className: style.img
      }), React.createElement("div", {
        className: style.delimg,
        onClick: function onClick() {
          return _this2.del();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      }))) : React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("span", null, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500"))), React.createElement(_Col, {
        span: 12
      }, React.createElement(_Button, {
        type: "primary",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement(_Col, {
        span: 12,
        className: style.prompt
      }, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500")), React.createElement(UserMedia, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return ItemImg;
}(Component);

export default ItemImg;