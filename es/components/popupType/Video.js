import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
import "antd/es/modal/style";
import _Modal from "antd/es/modal";

var _dec, _class, _temp;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from "react";
import VideoThumb from "@/components/VideoThumb";
import VipAuthority from "@/components/VipAuthority";
import { formatUrl } from '@/utils/utils';
import { connect } from "dva";
var HotspotVideo = (_dec = connect(function (_ref) {
  var global = _ref.global;
  return {
    global: global
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HotspotVideo, _React$Component);

  function HotspotVideo(props) {
    var _this;

    _classCallCheck(this, HotspotVideo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HotspotVideo).call(this, props));

    _this.handleVideoChange =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(data) {
        var videoUrl, title, thumbUrl, loop, autoplay;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                videoUrl = data.videoUrl, title = data.title, thumbUrl = data.thumbUrl, loop = data.loop, autoplay = data.autoplay;
                _context.next = 3;
                return _this.setState({
                  videoUrl: videoUrl,
                  title: title,
                  thumbUrl: thumbUrl,
                  loop: loop,
                  autoplay: autoplay
                });

              case 3:
                _this.handleChange();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.handleStateChange =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(key, value) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.setState(_defineProperty({}, key, value));

              case 2:
                _this.handleChange();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.addHttp = function (value) {
      var url = value.trim();
      if (!url) return;

      if (value.slice(0, 7) == "http://" || value.slice(0, 8) == "https://" || value.slice(0, 2) == "//" || value.slice(0, 3) == "://") {
        url = url.replace('http://', '//');
        url = url.replace('https://', '//');
        return url;
      } else {
        url = "//" + url;
        return url;
      }
    };

    _this.handleChangeVideoType =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(value) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (value == 1 && _this.state.IframeVideo || value == 2 && _this.state.videoUrl) {
                  _Modal.confirm({
                    okText: "确定",
                    cancelText: "取消",
                    content: "只能添加一种视频类型，已输入内容将不保存",
                    title: "提示",
                    onOk: function onOk() {
                      _this.setState({
                        videoUrl: "",
                        title: "",
                        thumbUrl: "",
                        loop: 0,
                        autoplay: 0,
                        IframeVideo: "",
                        videoType: value
                      });
                    }
                  });
                } else {
                  _this.setState({
                    videoType: value
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }();

    var _data = props.data;
    _this.state = {
      videoType: _data && _data.videoType ? _data.videoType : 2,
      jumpType: _data && _data.jumpType ? _data.jumpType : 1,
      jumpUrlTitle: _data && _data.jumpUrlTitle ? _data.jumpUrlTitle : "",
      jumpUrl: _data && _data.jumpUrl ? _data.jumpUrl : "",
      IframeVideo: _data && _data.IframeVideo ? _data.IframeVideo : "",
      videoUrl: _data && _data.videoUrl ? _data.videoUrl : "",
      title: _data && _data.title ? _data.title : "",
      thumbUrl: _data && _data.thumbUrl ? _data.thumbUrl : "",
      loop: _data && _data.loop == 1 ? 1 : 0,
      autoplay: _data && _data.autoplay == 1 ? 1 : 0
    };
    return _this;
  }

  _createClass(HotspotVideo, [{
    key: "handleChange",
    value: function handleChange() {
      this.props.onChange(_objectSpread({}, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var _this$state = this.state,
          videoType = _this$state.videoType,
          jumpType = _this$state.jumpType,
          jumpUrlTitle = _this$state.jumpUrlTitle,
          jumpUrl = _this$state.jumpUrl,
          IframeVideo = _this$state.IframeVideo,
          videoUrl = _this$state.videoUrl,
          title = _this$state.title,
          thumbUrl = _this$state.thumbUrl,
          loop = _this$state.loop,
          autoplay = _this$state.autoplay;
      var isVip = this.props.global.data.info.is_vip;
      return React.createElement("div", null, React.createElement(_Radio.Group, {
        onChange: function onChange(e) {
          return _this2.handleChangeVideoType(e.target.value);
        },
        value: videoType,
        style: {
          width: "100%",
          marginTop: 10
        },
        className: "mb10"
      }, React.createElement(_Radio.Button, {
        value: 2,
        style: {
          width: "50%",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          textAlign: "center"
        }
      }, "\u4E09\u65B9\u89C6\u9891"), React.createElement(_Radio.Button, {
        value: 1,
        style: {
          width: "50%",
          background: "#333",
          color: "#fff",
          fontSize: "12px",
          textAlign: "center"
        }
      }, "\u672C\u5730\u89C6\u9891")), videoType == 1 && React.createElement("div", null, isVip == 0 ? React.createElement(VipAuthority, null) : React.createElement("div", {
        className: "mb20"
      }, React.createElement(VideoThumb, {
        data: {
          videoUrl: videoUrl,
          title: title,
          thumbUrl: thumbUrl,
          loop: loop,
          autoplay: autoplay
        },
        onChange: this.handleVideoChange
      }))), videoType == 2 && React.createElement("div", null, React.createElement("div", {
        className: "title mb10"
      }, "\u901A\u7528\u4EE3\u7801"), React.createElement("div", {
        className: "mb10 setupInput"
      }, React.createElement(_Input.TextArea, {
        autosize: {
          minRows: 3,
          maxRows: 10
        },
        className: "input",
        onChange: function onChange(e) {
          return _this2.handleStateChange("IframeVideo", e.target.value);
        },
        value: IframeVideo,
        placeholder: "\u8BF7\u8F93\u5165\u7B2C\u4E09\u65B9\u89C6\u9891\u5E73\u53F0\u901A\u7528\u4EE3\u7801:<iframe ...></iframe>,\u5982\u4E0D\u80FD\u6B63\u5E38\u89C2\u770B\u8BF7\u628A\u4EE3\u7801\u4E2D\u7684http\u6539\u4E3Ahttps,\u5373\u53EF\u6B63\u5E38\u89C2\u770B\u3002",
        style: {
          borderRadius: 3,
          lineHeight: "18px"
        }
      }))), videoType == 2 || isVip == 1 && videoType == 1 ? React.createElement("div", {
        className: "mb10"
      }, React.createElement("div", {
        className: "title"
      }, React.createElement("span", {
        className: "checkboxC"
      }, React.createElement(_Checkbox, {
        name: "isShow",
        checked: jumpType == 1 ? true : false,
        onChange: function onChange(e) {
          return _this2.handleStateChange("jumpType", e.target.checked ? 1 : 0);
        },
        className: "checkbox"
      }, "\u65B0\u7A97\u53E3\u6253\u5F00")), "\u66F4\u591A\u5185\u5BB9"), React.createElement("div", {
        className: "mb10 setupInput"
      }, React.createElement(_Input, {
        name: "text",
        maxLength: 20,
        className: "input",
        value: jumpUrlTitle,
        placeholder: "\u6309\u94AE\u6807\u9898",
        onChange: function onChange(e) {
          return _this2.handleStateChange("jumpUrlTitle", e.target.value);
        }
      })), React.createElement("div", {
        className: "mb10 setupInput"
      }, React.createElement(_Input, {
        name: "text",
        className: "input",
        value: jumpUrl,
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        onChange: function onChange(e) {
          return _this2.handleStateChange("jumpUrl", e.target.value);
        },
        onBlur: function onBlur(e) {
          return _this2.handleStateChange("jumpUrl", formatUrl(e.target.value));
        }
      }))) : null);
    }
  }]);

  return HotspotVideo;
}(React.Component), _temp)) || _class);
export default HotspotVideo;