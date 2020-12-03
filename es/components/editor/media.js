import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/input/style";
import _Input from "antd/es/input";

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
import BraftEditor from './braftEditor';
import { Obj } from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';
import styles from './media.less';
import { mediaImgConfig } from '@/utils/oss.config';

var modalEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(modalEditor, _React$Component);

  function modalEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, modalEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(modalEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: 'IMAGE',
      url: [],
      uploadType: 1,
      userMediaVisible: false,
      videoVisible: false
    };

    _this.selectType = function (type) {
      _this.setState({
        type: type
      });
    };

    _this.setInput = function (e) {
      // this.setUrl(e.target.value)
      _this.setState({
        url: [e.target.value]
      });
    };

    _this.openMediaModal = function () {
      if (_this.state.type != 'IMAGE') {
        _this.setState({
          url: []
        });
      }

      _this.setState({
        type: 'IMAGE',
        userMediaVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.selectMedia = function (arr) {
      _this.setUrl(arr);

      _this.closeMediaModal();
    };

    _this.handleVideoShow = function () {
      if (_this.state.type != 'VIDEO') {
        _this.setState({
          url: []
        });
      }

      _this.setState({
        type: 'VIDEO',
        videoVisible: true
      });
    };

    _this.handleVideoMedia = function (arr) {
      _this.setUrl(arr);

      _this.closeVideoMediaModal();
    };

    _this.closeVideoMediaModal = function () {
      _this.setState({
        videoVisible: false
      });
    };

    _this.setUploadType = function () {
      _this.setState({
        uploadType: _this.state.uploadType == 1 ? 2 : 1,
        url: []
      });
    };

    _this.setUrl = function (url) {
      var urlArr = _this.state.url;
      url.map(function (item) {
        urlArr.push(item.path.url);
      });

      _this.setState({
        url: urlArr
      });
    };

    _this.delImg = function (item) {
      var newUrl = _this.state.url.filter(function (j) {
        return j != item;
      });

      _this.setState({
        url: newUrl
      });
    };

    _this.onInsert = function () {
      var _this$state = _this.state,
          type = _this$state.type,
          url = _this$state.url;
      var newUrl = [];
      url.map(function (item) {
        newUrl.push({
          type: type,
          url: item
        });
      });

      _this.props.onChange(newUrl);

      _this.closeMedia();
    };

    _this.closeMedia = function () {
      _this.setState({
        type: 'IMAGE',
        url: [],
        uploadType: 1,
        userMediaVisible: false,
        videoVisible: false
      });

      _this.props.onClose();
    };

    return _this;
  }

  _createClass(modalEditor, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var visible = this.props.visible;
      var _this$state2 = this.state,
          type = _this$state2.type,
          url = _this$state2.url,
          uploadType = _this$state2.uploadType,
          userMediaVisible = _this$state2.userMediaVisible,
          videoVisible = _this$state2.videoVisible;
      var localResources = React.createElement("div", null, React.createElement("div", {
        className: styles.media_img
      }, url.length > 0 && url.map(function (item, index) {
        return React.createElement("div", {
          className: styles.img,
          key: index
        }, React.createElement("img", {
          src: type == 'IMAGE' ? item + '?x-oss-process=image/resize,m_pad,h_200,w_200,color_eeeeee' : item + '?x-oss-process=video/snapshot,t_1000,f_jpg,w_0,h_0,m_fast'
        }), React.createElement("span", {
          className: styles.img_del,
          onClick: function onClick() {
            return _this2.delImg(item);
          }
        }, "X"));
      }), React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), url.length == 0 && React.createElement("p", null, "\u6682\u65E0\u8D44\u6E90"), React.createElement("span", null, "\u6CE8\uFF1A\u8BF7\u70B9\u51FB\u53F3\u4E0B\u65B9 [\u63D2\u5165] \u6309\u94AE")), React.createElement("div", {
        className: styles.mediz_type
      }, React.createElement("span", {
        className: "".concat(styles.select),
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, "\u6DFB\u52A0\u56FE\u7247"), React.createElement("span", {
        className: "".concat(styles.select),
        onClick: function onClick() {
          return _this2.handleVideoShow();
        }
      }, "\u6DFB\u52A0\u89C6\u9891")));
      var networkResource = React.createElement("div", null, React.createElement("div", {
        className: styles.media_input
      }, React.createElement(_Input, {
        value: url,
        placeholder: "\u8BF7\u586B\u5199\u7F51\u7EDC\u5A92\u4F53\u8FDE\u63A5",
        onChange: this.setInput
      }), React.createElement("span", null, "\u6CE8\uFF1A\u94FE\u63A5\u8BF7\u4EE5https://\u6216http://\u5F00\u5934")), React.createElement("div", {
        className: styles.mediz_type
      }, React.createElement("span", {
        className: "".concat(type == 'IMAGE' && styles.select),
        onClick: function onClick() {
          return _this2.selectType('IMAGE');
        }
      }, "\u56FE\u7247"), React.createElement("span", {
        className: "".concat(type == 'VIDEO' && styles.select),
        onClick: function onClick() {
          return _this2.selectType('VIDEO');
        }
      }, "\u89C6\u9891"), React.createElement("span", {
        className: "".concat(type == 'EMBED' && styles.select),
        onClick: function onClick() {
          return _this2.selectType('EMBED');
        }
      }, "\u5D4C\u5165\u5F0F\u5A92\u4F53")));
      return React.createElement("div", null, React.createElement(_Modal, {
        title: "\u5A92\u4F53\u5E93",
        centered: true,
        width: 600,
        visible: visible,
        destroyOnClose: true,
        maskClosable: false,
        closable: false,
        okText: '插入所选资源',
        onOk: function onOk() {
          return _this2.onInsert();
        },
        onCancel: function onCancel() {
          return _this2.closeMedia();
        },
        className: styles.media_modal
      }, uploadType == 1 ? localResources : networkResource, React.createElement("div", {
        className: styles.upload_btn
      }, React.createElement("span", {
        onClick: function onClick() {
          return _this2.setUploadType();
        }
      }, uploadType == 1 ? '添加网络资源' : '添加本地资源'))), React.createElement(UserMedia, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: true,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }), React.createElement(UserMedia, {
        title: "\u89C6\u9891\u7D20\u6750\u5E93",
        mediaType: "3",
        multipleChoices: true,
        width: "900px",
        visible: videoVisible,
        onChange: this.handleVideoMedia,
        onCancel: this.closeVideoMediaModal
      }));
    }
  }]);

  return modalEditor;
}(React.Component);

export { modalEditor as default };