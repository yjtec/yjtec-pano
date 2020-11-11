"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("@/utils/utils");

var _IconFont = _interopRequireDefault(require("@/components/IconFont"));

var _style2 = _interopRequireDefault(require("./style.less"));

var _edit = _interopRequireDefault(require("./edit"));

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

var getIcon = function getIcon(icon) {
  if (typeof icon === 'string') {
    if (icon.startsWith('icon-')) {
      return _react.default.createElement(_IconFont.default, {
        type: icon,
        className: _style2.default.icon
      });
    }

    if ((0, _utils.isUrl)(icon)) {
      return _react.default.createElement(_icon.default, {
        component: function component() {
          return _react.default.createElement("img", {
            src: icon,
            alt: "icon",
            className: _style2.default.icon
          });
        }
      });
    }

    return _react.default.createElement(_icon.default, {
      type: icon,
      className: _style2.default.icon
    });
  }

  return icon;
};

var DetailsList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailsList, _React$Component);

  function DetailsList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailsList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      visible: false
    };

    _this.openEdit = function (e) {
      _this.setState({
        visible: true
      });
    };

    return _this;
  }

  _createClass(DetailsList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var visible = this.state.visible;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style2.default.list
      }, _react.default.createElement("div", {
        className: _style2.default.item
      }, _react.default.createElement("span", null, "1"), _react.default.createElement("img", {
        src: "https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0",
        alt: "\u56FE\u7247",
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }), _react.default.createElement("p", {
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }, "\u8FD9\u91CC\u662F\u6807\u9898\u8FD9\u91CC\u662F\u6807\u9898"), getIcon('icon-huishouzhan')), _react.default.createElement("div", {
        className: _style2.default.item,
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }, _react.default.createElement("span", null, "2"), _react.default.createElement("img", {
        src: "https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0",
        alt: "\u56FE\u7247",
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }), _react.default.createElement("p", {
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }, "\u8FD9\u91CC\u662F\u6807\u9898\u8FD9\u91CC\u662F\u6807\u9898"), getIcon('icon-huishouzhan')), _react.default.createElement("div", {
        className: _style2.default.item,
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }, _react.default.createElement("span", null, "3"), _react.default.createElement("img", {
        src: "https://res.jsvry.cn/prod/head_img/2020/05/23/1947442cpzktf.jpg?x-oss-process=image/resize,m_fill,h_100,w_100,limit_0",
        alt: "\u56FE\u7247",
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }), _react.default.createElement("p", {
        onClick: function onClick() {
          return _this2.openEdit();
        }
      }, "\u8FD9\u91CC\u662F\u6807\u9898\u8FD9\u91CC\u662F\u6807\u9898"), getIcon('icon-huishouzhan'))), _react.default.createElement(_edit.default, {
        visible: visible,
        krpano: this.props.krpano
      }));
    }
  }]);

  return DetailsList;
}(_react.default.Component);

exports.default = DetailsList;