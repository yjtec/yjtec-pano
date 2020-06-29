"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconFont = _interopRequireDefault(require("@/components/IconFont"));

var _oss = require("@/utils/oss.config");

var _style = _interopRequireDefault(require("./style.less"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var EmbedList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmbedList, _React$Component);

  function EmbedList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmbedList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmbedList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.oneHandle = function (id) {
      _this.props.onChange(id);
    };

    return _this;
  }

  _createClass(EmbedList, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var typeData = [{
        type: 1,
        name: '文字标记'
      }, {
        type: 2,
        name: '图片轮播'
      }, {
        type: 3,
        name: '序列图'
      }, {
        type: 4,
        name: '视频'
      }];
      return _react.default.createElement("div", {
        className: _style.default.module
      }, data.map(function (item, index) {
        return _react.default.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this2.oneHandle(item.id);
          },
          className: _style.default.hotspotLists
        }, _react.default.createElement("span", {
          className: _style.default.delSelectdPano
        }, typeData.map(function (i) {
          if (i.type == item.type) {
            return i.name;
          }
        })), _react.default.createElement("div", {
          className: _style.default.thumb
        }, item.type == 1 && _react.default.createElement(_IconFont.default, {
          type: "icon-wenzi",
          style: {
            fontSize: '16px'
          }
        }), item.type == 2 && _react.default.createElement("img", {
          alt: "\u56FE\u7247",
          src: (0, _oss.mediaImgConfig)(item.actionData && item.actionData.img.length > 0 && item.actionData.img[0].url && item.actionData.img[0].url, 'img')
        }), item.type == 3 && _react.default.createElement("img", {
          alt: "\u5E8F\u5217\u56FE",
          src: (0, _oss.mediaImgConfig)(item.actionData && item.actionData.url && item.actionData.url, 'img')
        }), item.type == 4 && _react.default.createElement("img", {
          alt: "\u89C6\u9891",
          src: (0, _oss.mediaImgConfig)(item.actionData && item.actionData.thumbUrl && item.actionData.thumbUrl, 'img')
        })), _react.default.createElement("div", {
          className: _style.default.title
        }, item.type == 1 && item.actionData.text, item.type == 2 && '嵌入图片', item.type == 3 && '序列图', item.type == 4 && '嵌入视频'));
      }));
    }
  }]);

  return EmbedList;
}(_react.default.Component);

exports.default = EmbedList;