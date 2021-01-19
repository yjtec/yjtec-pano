import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
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
import { Help } from '@/components/';
import styles from './style.less';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';
import { Obj } from 'yjtec-support';
import Modal from '@/components/ApplyToScene';
import { helpShow } from '@/utils/help';
import { SliderSingle } from '@/components/Form';
var defaultData = {
  scale: 1,
  distorted: false
};

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

    _this.selectImg = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, function () {
        return _this.save();
      });
    };

    _this.setScale = function (value) {
      _this.setState({
        scale: value
      }, function () {
        return _this.save();
      });
    };

    _this.setDistorted = function (e) {
      _this.setState({
        distorted: e.target.checked
      }, function () {
        return _this.save();
      });
    };

    _this.delImg = function () {
      _this.setState({
        url: '',
        scale: defaultData.scale,
        distorted: defaultData.distorted
      }, function () {
        return _this.save();
      });
    };

    _this.save = function () {
      var _this$state = _this.state,
          url = _this$state.url,
          scale = _this$state.scale,
          distorted = _this$state.distorted;

      _this.props.onEdit({
        url: url,
        scale: scale,
        distorted: distorted
      });
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;

      if (data) {
        this.setState({
          url: data.url ? data.url : '',
          scale: data.scale ? data.scale : defaultData.scale,
          distorted: data.distorted ? data.distorted : defaultData.distorted
        });
      } else {
        this.setState({
          url: '',
          scale: defaultData.scale,
          distorted: defaultData.distorted
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var data = this.props.data;

      if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
        if (data) {
          this.setState({
            url: data.url ? data.url : '',
            scale: data.scale ? data.scale : defaultData.scale,
            distorted: data.distorted ? data.distorted : defaultData.distorted
          });
        } else {
          this.setState({
            url: '',
            scale: defaultData.scale,
            distorted: defaultData.distorted
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          visible = _this$props.visible,
          categoryArr = _this$props.categoryArr,
          scenesArr = _this$props.scenesArr;
      var _this$state2 = this.state,
          sceneListVisible = _this$state2.sceneListVisible,
          url = _this$state2.url,
          scale = _this$state2.scale,
          distorted = _this$state2.distorted;
      return React.createElement("div", null, React.createElement("div", {
        className: styles.title,
        style: {
          margin: '10px 0 10px 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: styles.checkboxC
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
      }, "\u5E94\u7528\u5230")), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, title), helpShow && React.createElement("div", {
        style: {
          float: 'left',
          width: '20px',
          height: '20px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        link: 'mask',
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(ItemImg, {
        url: url ? mediaImgConfig(url, 'img') : '',
        imgSize: "500X500",
        onChange: this.selectImg,
        onDel: this.delImg
      }), url && React.createElement("div", null, React.createElement("div", {
        className: styles.title,
        style: {
          marginBottom: '4px',
          marginTop: '10px'
        }
      }, "\u8C03\u6574\u5927\u5C0F(\u500D)"), React.createElement("div", {
        className: styles.sliderDiv
      }, React.createElement(SliderSingle, {
        defaultValue: scale,
        max: 1.5,
        min: 0.2,
        step: 0.01,
        onChange: function onChange(value) {
          return _this2.setScale(value);
        }
      })), React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: distorted,
        onChange: this.setDistorted,
        className: styles.checkbox
      })), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u8DDF\u968F\u5168\u666F\u8F6C\u52A8"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      }))), React.createElement(Modal, {
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