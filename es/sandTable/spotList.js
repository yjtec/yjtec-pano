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
import { Component } from "react";
import styles from './style.less';
import { ossPanoUrl, ossMediaUrl } from '@/utils/url.config';

var spotList =
/*#__PURE__*/
function (_Component) {
  _inherits(spotList, _Component);

  function spotList() {
    _classCallCheck(this, spotList);

    return _possibleConstructorReturn(this, _getPrototypeOf(spotList).apply(this, arguments));
  }

  _createClass(spotList, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          data = _this$props.data,
          editSpotId = _this$props.editSpotId;
      return React.createElement("div", null, React.createElement("div", {
        className: styles.title
      }, "\u6807\u8BB0\u7BA1\u7406"), React.createElement("div", null, React.createElement(_Button, {
        type: "primary",
        className: styles.Button,
        style: {
          width: '100%'
        },
        onClick: function onClick() {
          return _this.props.addSpot();
        }
      }, "\u6DFB\u52A0\u6807\u8BB0")), React.createElement("div", {
        style: {
          marginTop: '20px'
        }
      }, data && data.map(function (item) {
        if (item.scene_thumb.indexOf('//') != -1) {
          return React.createElement("div", {
            key: item.scene_id,
            className: styles.selectdPanoList
          }, React.createElement("span", {
            className: styles.delSelectdPano,
            onClick: function onClick() {
              return _this.props.delSpot(item.scene_id);
            }
          }, "\u5220\u9664"), React.createElement("img", {
            className: editSpotId == item.scene_id ? style.click : '',
            alt: item.scene_name,
            src: item.scene_thumb
          }), React.createElement("div", {
            className: styles.title
          }, item.scene_name));
        } else if (item.scene_thumb.substring(0, 6) == '/panos') {
          return React.createElement("div", {
            key: item.scene_id,
            className: styles.selectdPanoList
          }, React.createElement("span", {
            className: styles.delSelectdPano,
            onClick: function onClick() {
              return _this.props.delSpot(item.scene_id);
            }
          }, "\u5220\u9664"), React.createElement("img", {
            className: editSpotId == item.scene_id ? style.click : '',
            alt: item.scene_name,
            src: ossPanoUrl + item.scene_thumb
          }), React.createElement("div", {
            className: styles.title
          }, item.scene_name));
        } else {
          return React.createElement("div", {
            key: item.scene_id,
            className: styles.selectdPanoList
          }, React.createElement("span", {
            className: styles.delSelectdPano,
            onClick: function onClick() {
              return _this.props.delSpot(item.scene_id);
            }
          }, "\u5220\u9664"), React.createElement("img", {
            className: editSpotId == item.scene_id ? style.click : '',
            alt: item.scene_name,
            src: ossMediaUrl + item.scene_thumb
          }), React.createElement("div", {
            className: styles.title
          }, item.scene_name));
        }
      })));
    }
  }]);

  return spotList;
}(Component);

export default spotList;