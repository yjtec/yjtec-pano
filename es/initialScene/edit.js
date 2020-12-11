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
import { ItemBox, Help } from '@/components/';
import { Button } from '@/components/Form';
import styles from './style.less';
import { helpShow } from '@/utils/help';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';
import AllScene from '@/components/AllScene';

var InitialSceneEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(InitialSceneEdit, _Component);

  function InitialSceneEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InitialSceneEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InitialSceneEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      state: false,
      scene_id: '',
      visible: false,
      scenesArr: []
    };

    _this.initailSceneState = function (e) {
      _this.setState({
        state: e
      }, function () {
        return _this.save();
      });
    };

    _this.selectScene = function (sceneIds) {
      _this.setState({
        scene_id: sceneIds[0]
      }, function () {
        return _this.save();
      });
    };

    _this.showAllScene = function () {
      _this.setState({
        visible: true
      });
    };

    _this.closeModal = function () {
      _this.setState({
        visible: false
      });
    };

    _this.save = function () {
      _this.props.onChange({
        state: _this.state.state,
        scene_id: _this.state.scene_id
      });
    };

    return _this;
  }

  _createClass(InitialSceneEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          scenesArr = _this$props.scenesArr;
      this.setState(_objectSpread({}, data, {
        scenesArr: scenesArr
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          url = _this$state.url,
          state = _this$state.state,
          visible = _this$state.visible,
          scenesArr = _this$state.scenesArr,
          scene_id = _this$state.scene_id;
      var scene = scenesArr.filter(function (item) {
        return item.id == scene_id;
      });
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Switch, {
        size: "small",
        checked: state,
        onClick: function onClick(e) {
          return _this2.initailSceneState(e);
        }
      })), "\u81EA\u5B9A\u4E49\u521D\u59CB\u573A\u666F", React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement("div", {
        className: styles.tips
      }, "\u6CE8\uFF1A\u5F00\u542F\u540E\u53EF\u8BBE\u7F6E\u4F5C\u54C1\u6253\u5F00\u65F6\u8DF3\u8F6C\u81F3\u67D0\u4E00\u56FA\u5B9A\u573A\u666F")), state && React.createElement("div", null, React.createElement("div", {
        className: styles.selectBtn
      }, React.createElement(Button, {
        title: "\u9009\u62E9\u521D\u59CB\u573A\u666F",
        onClick: function onClick() {
          return _this2.showAllScene();
        }
      })), React.createElement("div", {
        className: styles.sceneList
      }, scene.length > 0 ? React.createElement("div", null, React.createElement("img", {
        src: scene[0].thumb.url,
        alt: scene[0].name
      }), React.createElement("p", null, scene[0].name)) : React.createElement("span", null, "\u8BF7\u9009\u62E9\u573A\u666F"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      }))), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement(AllScene, {
        title: "\u9009\u62E9\u573A\u666F",
        visible: visible,
        multiple: false,
        onCancel: this.closeModal,
        onOk: this.selectScene
      }));
    }
  }]);

  return InitialSceneEdit;
}(Component);

export default InitialSceneEdit;