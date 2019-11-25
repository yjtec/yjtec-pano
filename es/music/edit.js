import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";

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
import { ItemBox, Right, Content } from '@/components/';
import { Button, Select } from '@/components/Form';
import style from './style.less';
import UploadMusic from '@/components/Media';
import Modal from '@/components/AllScene';
import { Obj } from 'yjtec-support';
var defaultData = {
  media: false,
  musicUrl: '',
  musicTitle: '上传音乐格式为MP3',
  loop: 0
};

var Music =
/*#__PURE__*/
function (_Component) {
  _inherits(Music, _Component);

  function Music() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Music);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Music)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      media: false,
      musicUrl: '',
      musicTitle: '上传音乐格式为MP3',
      loop: 0,
      defaultPlay: true,
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
    };

    _this.media = function () {
      //选择用户的素材
      _this.setState({
        media: true
      });
    };

    _this.onCancel = function (url, name) {
      if (url == undefined) {
        _this.setState({
          media: false
        });
      } else {
        _this.setState({
          media: false,
          musicUrl: url,
          musicTitle: name
        }, function () {
          _this.runChange();
        });
      }
    };

    _this.onChange = function (e) {
      _this.setState({
        loop: e.target.checked == true ? 0 : 1
      }, function () {
        _this.runChange();
      });
    };

    _this.del = function () {
      _this.setState(_objectSpread({}, defaultData), function () {
        _this.props.onDel();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          musicUrl = _this$state.musicUrl,
          musicTitle = _this$state.musicTitle,
          loop = _this$state.loop,
          defaultPlay = _this$state.defaultPlay;

      _this.props.onChange({
        musicUrl: musicUrl,
        musicTitle: musicTitle,
        loop: loop,
        defaultPlay: defaultPlay
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

    _this.setAllScene = function (url, sceneIds) {
      _this.props.setAllScene(url, sceneIds);
    };

    _this.handlePlay = function (e) {
      _this.setState({
        defaultPlay: e.target.checked
      }, function () {
        _this.runChange();
      });
    };

    return _this;
  }

  _createClass(Music, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          scenes = _this$props.scenes;
      var categoryArr = scenes.category;
      var scenesArr = scenes.scenes;
      this.setState(_objectSpread({}, defaultData, {}, data, {
        categoryArr: categoryArr,
        scenesArr: scenesArr
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Obj.isEqual(prevProps.data, this.props.data)) {
        this.setState(_objectSpread({}, defaultData, {}, this.props.data));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          musicUrl = _this$state2.musicUrl,
          musicTitle = _this$state2.musicTitle,
          loop = _this$state2.loop,
          defaultPlay = _this$state2.defaultPlay,
          sceneListVisible = _this$state2.sceneListVisible,
          categoryArr = _this$state2.categoryArr,
          scenesArr = _this$state2.scenesArr;
      return React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC,
        onClick: function onClick() {
          return _this2.del();
        }
      }, "\u5220\u9664"), this.props.title), React.createElement("div", {
        className: style.musicBox
      }, React.createElement(_Row, null, React.createElement(_Col, {
        span: 8
      }, React.createElement("div", {
        className: style.musicIcon
      }, musicUrl ? React.createElement(_Icon, {
        type: "customer-service"
      }) : React.createElement(_Icon, {
        type: "plus"
      }))), React.createElement(_Col, {
        span: 16
      }, React.createElement("div", {
        className: style.musicRight
      }, React.createElement("p", null, musicTitle ? musicTitle : '上传音乐格式为MP3'), React.createElement("div", {
        onClick: this.media
      }, React.createElement(Button, {
        title: "\u9009\u62E9\u97F3\u4E50"
      }))))), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: style.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Checkbox, {
        checked: loop == 0 ? true : false,
        onChange: this.onChange,
        className: style.checkbox
      }, "\u662F\u5426\u5FAA\u73AF")), "\u5FAA\u73AF\u64AD\u653E"), React.createElement("div", {
        className: style.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Checkbox, {
        checked: defaultPlay,
        onChange: this.handlePlay,
        className: style.checkbox
      }, "\u662F\u5426\u64AD\u653E")), "\u9ED8\u8BA4\u64AD\u653E"), React.createElement("div", {
        className: style.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(Button, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px'
        },
        title: "\u9009\u62E9\u573A\u666F"
      })), "\u5E94\u7528\u5230:"), React.createElement(Modal, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: {
          musicUrl: musicUrl,
          musicTitle: musicTitle,
          loop: loop,
          defaultPlay: defaultPlay
        },
        onOk: this.setAllScene
      }), React.createElement(UploadMusic, {
        title: "\u97F3\u4E50",
        mediaType: "2",
        visible: this.state.media,
        onCancel: this.onCancel,
        accept: ".mp3"
      }));
    }
  }]);

  return Music;
}(Component);

export default Music;