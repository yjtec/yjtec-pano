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
import { mediaImgConfig } from '@/utils/oss.config';
import Media from '@/components/MediaModal';
import { Obj } from 'yjtec-support';
import styles from './style.less';
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

    _this.handleVideoMedia = function (arr) {
      if (!Obj.isNull(arr)) {
        _this.setState({
          videoUrl: arr[0].path.path,
          title: arr[0].name,
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

    _this.handleImgMedia = function (arr) {
      if (!Obj.isNull(arr)) {
        _this.setState({
          thumbUrl: arr[0].path.path,
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

    _this.closeVideoMediaModal = function () {
      _this.setState({
        videoVisible: false
      });
    };

    _this.closeImgMediaModal = function () {
      _this.setState({
        imgVisible: false
      });
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
        autoplay: e.target.checked == true ? 1 : 0
      }, function () {
        _this.runChange();
      });
    };

    _this.handleLoop = function (e) {
      _this.setState({
        loop: e.target.checked == true ? 1 : 0
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

    var data = props.data;
    _this.state = {
      videoUrl: data && data.videoUrl ? data.videoUrl : '',
      title: data && data.title ? data.title : '',
      thumbUrl: data && data.thumbUrl ? data.thumbUrl : '',
      loop: data && data.loop == 1 ? 1 : 0,
      autoplay: data && data.autoplay == 1 ? 1 : 0,
      imgVisible: false,

      /*width:(data && data.width) ? data.width : 300,
      height:(data && data.height) ? data.height : 180,*/
      videoVisible: false
    };
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
        if (this.props.data) {
          var data = this.props.data;
          this.setState({
            videoUrl: data.videoUrl,
            title: data.title,
            thumbUrl: data.thumbUrl,
            loop: data.loop,
            autoplay: data.autoplay
            /*width:actionData.width,
            height:actionData.height*/

          });
        }
      }
    } //弹出选择视频

  }, {
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
        className: styles.videoList
      }, React.createElement(_Icon, {
        type: "play-square",
        className: styles.icon
      }), React.createElement("p", null, title));
      var defaultVideoBox = React.createElement("div", {
        className: styles.videoList
      }, React.createElement("span", null, "\u683C\u5F0FMP4 \u7F16\u7801:H.264"), React.createElement("span", null, "\u89C6\u9891\u9650\u523650M\u4EE5\u5185"));
      var thumbBox = React.createElement("div", null, React.createElement("img", {
        alt: "\u5D4C\u5165\u89C6\u9891\u5C01\u9762",
        src: mediaImgConfig(thumbUrl, 'img'),
        className: styles.img
      }), React.createElement("div", {
        className: styles.delimg,
        onClick: function onClick() {
          return _this2.delImg();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      })));
      var defaultThumbBox = React.createElement("div", null, React.createElement("div", {
        className: styles.tips
      }, React.createElement("p", null, "\u5C01\u9762\u8BF7\u4E0E\u89C6\u9891\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")));
      return React.createElement("div", {
        className: styles.box
      }, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.boxtitle
      }, "\u5D4C\u5165\u89C6\u9891", React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.handleVideoShow();
        },
        className: styles.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u89C6\u9891")), videoUrl && title ? videoBox : defaultVideoBox), React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.boxtitle,
        style: {
          marginTop: '10px'
        }
      }, "\u79FB\u52A8\u7AEF\u5C01\u9762", React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.handleImgShow();
        },
        className: styles.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement("div", {
        className: styles.thumb
      }, thumbUrl ? thumbBox : defaultThumbBox), thumbUrl && React.createElement("div", {
        className: styles.notes
      }, "\u6CE8\uFF1A\u5C01\u9762\u8BF7\u4E0E\u89C6\u9891\u5C3A\u5BF8\u4FDD\u6301\u4E00\u81F4")), React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: autoplay == 1 ? true : false,
        onChange: this.handlePlay,
        className: styles.checkbox
      })), "\u662F\u5426\u81EA\u52A8\u64AD\u653E(PC\u6709\u6548)"), React.createElement("div", {
        className: styles.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: loop == 1 ? true : false,
        onChange: this.handleLoop,
        className: styles.checkbox
      })), "\u662F\u5426\u5FAA\u73AF\u64AD\u653E")), React.createElement(Media, {
        title: "\u89C6\u9891\u7D20\u6750\u5E93",
        mediaType: 3,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: videoVisible,
        onChange: this.handleVideoMedia,
        onCancel: this.closeVideoMediaModal
      }), React.createElement(Media, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: 1,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: imgVisible,
        onChange: this.handleImgMedia,
        onCancel: this.closeImgMediaModal
      }));
    }
  }]);

  return Edit;
}(React.Component);

export { Edit as default };