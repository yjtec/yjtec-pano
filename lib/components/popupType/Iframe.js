"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireDefault(require("react"));

var _style3 = _interopRequireDefault(require("./style.less"));

var _utils = require("@/utils/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var HotspotIframe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HotspotIframe, _React$Component);

  function HotspotIframe(props) {
    var _this;

    _classCallCheck(this, HotspotIframe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HotspotIframe).call(this, props));

    _this.handleChange =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(key, value) {
        var _this$state, jumpUrl, jumpUrlTitle, jumpType, iframeUrl;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.setState(_defineProperty({}, key, value));

              case 2:
                _this$state = _this.state, jumpUrl = _this$state.jumpUrl, jumpUrlTitle = _this$state.jumpUrlTitle, jumpType = _this$state.jumpType, iframeUrl = _this$state.iframeUrl;

                _this.props.onChange({
                  jumpUrl: jumpUrl,
                  jumpUrlTitle: jumpUrlTitle,
                  jumpType: jumpType,
                  iframeUrl: iframeUrl
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.runChange = function () {
      var _this$state2 = _this.state,
          videoUrl = _this$state2.videoUrl,
          title = _this$state2.title,
          thumbUrl = _this$state2.thumbUrl,
          loop = _this$state2.loop,
          autoplay = _this$state2.autoplay;

      _this.props.onChange({
        videoUrl: videoUrl,
        title: title,
        thumbUrl: thumbUrl,
        loop: loop,
        autoplay: autoplay
      });
    };

    var data = props.data;
    _this.state = {
      jumpType: data && data.jumpType ? data.jumpType : 1,
      jumpUrlTitle: data && data.jumpUrlTitle ? data.jumpUrlTitle : "",
      jumpUrl: data && data.jumpUrl ? data.jumpUrl : "",
      iframeUrl: data && data.iframeUrl ? data.iframeUrl : ""
    };
    return _this;
  }

  _createClass(HotspotIframe, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          jumpType = _this$state3.jumpType,
          jumpUrlTitle = _this$state3.jumpUrlTitle,
          jumpUrl = _this$state3.jumpUrl,
          iframeUrl = _this$state3.iframeUrl;
      return _react.default.createElement("div", {
        className: _style3.default.box
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "title mb10"
      }, "\u7F51\u9875\u5730\u5740"), _react.default.createElement("div", {
        className: "mb10 setupInput"
      }, _react.default.createElement(_input.default.TextArea, {
        autosize: {
          minRows: 3,
          maxRows: 4
        },
        className: "input",
        value: iframeUrl,
        placeholder: "\u8BF7\u8F93\u5165\u7F51\u9875\u5730\u5740,\u6CE8:\u4F7F\u7528https\u7684\u7F51\u5740,\u5373\u53EF\u6B63\u5E38\u5C55\u793A\u3002",
        onChange: function onChange(e) {
          return _this2.handleChange("iframeUrl", e.target.value);
        },
        onBlur: function onBlur(e) {
          return _this2.handleChange("iframeUrl", (0, _utils.formatUrl)(e.target.value));
        },
        style: {
          borderRadius: 3
        }
      }), _react.default.createElement("span", {
        style: {
          lineHeight: '30px'
        }
      }, "\u6CE8:\u8BF7\u4F7F\u7528https\u7684\u7F51\u5740"))), _react.default.createElement("div", {
        className: "mb10"
      }, _react.default.createElement("div", {
        className: "title"
      }, _react.default.createElement("span", {
        className: "checkboxC"
      }, _react.default.createElement(_checkbox.default, {
        name: "isShow",
        checked: jumpType == 1 ? true : false,
        onChange: function onChange(e) {
          return _this2.handleChange("jumpType", e.target.checked ? 1 : 0);
        },
        className: "checkbox"
      }, "\u65B0\u7A97\u53E3\u6253\u5F00")), "\u66F4\u591A\u5185\u5BB9"), _react.default.createElement("div", {
        className: "mb10 setupInput"
      }, _react.default.createElement(_input.default, {
        name: "text",
        maxLength: 20,
        className: "input",
        value: jumpUrlTitle,
        placeholder: "\u6309\u94AE\u6807\u9898",
        onChange: function onChange(e) {
          return _this2.handleChange("jumpUrlTitle", e.target.value);
        }
      })), _react.default.createElement("div", {
        className: "mb10 setupInput"
      }, _react.default.createElement(_input.default, {
        name: "text",
        className: "input",
        value: jumpUrl,
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        onChange: function onChange(e) {
          return _this2.handleChange("jumpUrl", e.target.value);
        },
        onBlur: function onBlur(e) {
          return _this2.handleChange("jumpUrl", (0, _utils.formatUrl)(e.target.value));
        }
      }))));
    }
  }]);

  return HotspotIframe;
}(_react.default.Component);

var _default = HotspotIframe;
exports.default = _default;