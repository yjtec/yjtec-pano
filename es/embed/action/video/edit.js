import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/button/style";
import _Button from "antd/es/button";
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

import React from 'react';
import { ItemBox } from '@/components/';
import { ossImgMedia } from '@/utils/oss';
import Media from '@/components/Media';
import { Obj } from 'yjtec-support';
import style from './style.less';
import { InputNumber } from '@/components/Form';

var Edit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Edit, _React$Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this, props));

    _this.handleVideoShow = function () {
      _this.setState({
        videoVisible: true
      });
    };

    _this.handleVideoMedia = function (url, name) {
      if (!Obj.isNull(url)) {
        _this.setState({
          videoUrl: url,
          title: name,
          videoVisible: false
        }, function () {
          _this.runChange();
        });
      } else {
        _this.setState({
          videoVisible: false
        });
      }
    };

    _this.handleImgShow = function () {
      _this.setState({
        imgVisible: true
      });
    };

    _this.handleImgMedia = function (url) {
      if (!Obj.isNull(url)) {
        _this.setState({
          thumbUrl: url,
          imgVisible: false
        }, function () {
          _this.runChange();
        });
      } else {
        _this.setState({
          imgVisible: false
        });
      }
    };

    _this.delImg = function () {
      _this.setState({
        thumbUrl: ''
      }, function () {
        _this.runChange();
      });
    };

    _this.handlePlay = function (e) {
      _this.setState({
        autoplay: e.target.checked ? 1 : 0
      }, function () {
        _this.runChange();
      });
    };

    _this.handleLoop = function (e) {
      _this.setState({
        loop: e.target.checked ? 1 : 0
      }, function () {
        _this.runChange();
      });
    };

    _this.handleW = function (value) {
      _this.setState({
        width: value
      }, function () {
        _this.runChange();
      });
    };

    _this.handleH = function (value) {
      _this.setState({
        height: value
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          videoUrl = _this$state.videoUrl,
          title = _this$state.title,
          thumbUrl = _this$state.thumbUrl,
          loop = _this$state.loop,
          autoplay = _this$state.autoplay,
          width = _this$state.width,
          height = _this$state.height;

      _this.props.onChange({
        videoUrl: videoUrl,
        title: title,
        thumbUrl: thumbUrl,
        loop: loop,
        autoplay: autoplay,
        width: width,
        height: height
      });
    };

    var _videoUrl = props.videoUrl,
        _title = props.title,
        _thumbUrl = props.thumbUrl,
        _loop = props.loop,
        _autoplay = props.autoplay,
        _width = props.width,
        _height = props.height;
    _this.state = {
      videoUrl: _videoUrl ? _videoUrl : '',
      title: _title ? _title : '',
      thumbUrl: _thumbUrl ? _thumbUrl : '',
      loop: _loop ? _loop : 1,
      autoplay: _autoplay ? _autoplay : 1,
      imgVisible: false,
      width: _width ? _width : 300,
      height: _height ? _height : 180,
      videoVisible: false
    };
    return _this;
  } //弹出选择视频


  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          videoUrl = _this$state2.videoUrl,
          title = _this$state2.title,
          thumbUrl = _this$state2.thumbUrl,
          loop = _this$state2.loop,
          autoplay = _this$state2.autoplay,
          videoVisible = _this$state2.videoVisible,
          imgVisible = _this$state2.imgVisible,
          width = _this$state2.width,
          height = _this$state2.height;
      var videoBox = React.createElement("div", {
        className: style.videoList
      }, React.createElement(_Icon, {
        type: "play-square",
        className: style.icon
      }), React.createElement("p", null, title));
      var defaultVideoBox = React.createElement("div", {
        className: style.videoList
      }, React.createElement("span", null, "\u683C\u5F0FMP4 \u7F16\u7801:H.264"), React.createElement("span", null, "\u89C6\u9891\u9650\u523650M\u4EE5\u5185"));
      var thumbBox = React.createElement("div", null, React.createElement("img", {
        alt: "url",
        src: ossImgMedia(thumbUrl, 'media'),
        className: style.imgss
      }), React.createElement("div", {
        className: style.delimg,
        onClick: function onClick() {
          return _this2.delImg();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      })));
      var defaultThumbBox = React.createElement("div", null, React.createElement("div", {
        className: style.tips
      }, React.createElement("p", null, "\u5C01\u9762\u8BF7\u4E0E\u89C6\u9891\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")));
      return React.createElement("div", {
        className: style.box
      }, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.boxtitle
      }, "\u5D4C\u5165\u89C6\u9891", React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.handleVideoShow();
        },
        className: style.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u89C6\u9891")), videoUrl && title ? videoBox : defaultVideoBox), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.boxtitle,
        style: {
          marginTop: '10px'
        }
      }, "\u79FB\u52A8\u7AEF\u5C01\u9762", React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.handleImgShow();
        },
        className: style.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement("div", {
        className: style.thumb
      }, thumbUrl ? thumbBox : defaultThumbBox), thumbUrl && React.createElement("div", {
        className: style.notes
      }, "\u6CE8\uFF1A\u5C01\u9762\u8BF7\u4E0E\u89C6\u9891\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.boxtitle
      }, "\u89C6\u9891\u5BBD\u9AD8"), React.createElement("div", {
        style: {
          marginBottom: '10px'
        }
      }, React.createElement(InputNumber, {
        inputNumberValue: width,
        max: 1000,
        min: 1,
        name: '宽',
        onChange: function onChange(value) {
          return _this2.handleW(value);
        }
      })), React.createElement("div", null, React.createElement(InputNumber, {
        inputNumberValue: height,
        max: 1000,
        min: 1,
        name: '高',
        onChange: function onChange(value) {
          return _this2.handleH(value);
        }
      }))), React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Checkbox, {
        checked: autoplay == 1 ? true : false,
        onChange: this.handlePlay,
        className: style.checkbox
      }, "\u662F\u5426")), "\u81EA\u52A8\u64AD\u653E(PC\u6709\u6548)"), React.createElement("div", {
        className: style.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(_Checkbox, {
        checked: loop == 1 ? true : false,
        onChange: this.handleLoop,
        className: style.checkbox
      }, "\u662F\u5426")), "\u5FAA\u73AF\u64AD\u653E")), React.createElement(Media, {
        title: "\u89C6\u9891",
        visible: videoVisible,
        onCancel: this.handleVideoMedia,
        mediaType: "3",
        accept: ".mp4"
      }), React.createElement(Media, {
        title: "\u56FE\u7247",
        visible: imgVisible,
        onCancel: this.handleImgMedia,
        mediaType: "1",
        accept: ".jpg,.jpeg,.png"
      }));
    }
  }]);

  return Edit;
}(React.Component);

export { Edit as default };