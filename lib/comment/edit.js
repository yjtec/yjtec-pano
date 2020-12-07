"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/switch/style");

var _switch = _interopRequireDefault(require("antd/es/switch"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style3 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _Form = require("@/components/Form");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var optionData = [{
  id: 1,
  value: 1,
  label: '场景嵌入式'
} // {id:2,value:2,label:'弹幕式'},
];
var Option = _select.default.Option;

var CommentEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CommentEdit, _React$Component);

  function CommentEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CommentEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CommentEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      state: true,
      content_state: true,
      type: 1
    };

    _this.commentState = function (e) {
      _this.setState({
        state: e
      }, function () {
        _this.save();
      });
    };

    _this.commentContent = function (e) {
      _this.setState({
        content_state: e
      }, function () {
        _this.save();
      });
    };

    _this.handleEntryMode = function (value) {
      _this.setState({
        type: value
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(CommentEdit, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          state = _this$state.state,
          content_state = _this$state.content_state,
          type = _this$state.type;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style3.default.title
      }, _react.default.createElement("span", {
        className: _style3.default.checkboxC
      }, _react.default.createElement(_switch.default, {
        size: "small",
        checked: state,
        onClick: function onClick(e) {
          return _this2.commentState(e);
        }
      })), "\u8BF4\u4E00\u8BF4\u529F\u80FD", _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style3.default.tips
      }, "\u6CE8\uFF1A\u5173\u95ED\u540E\u6240\u6709\u4EBA\u5C06\u4E0D\u80FD\u5BF9\u4F5C\u54C1\u53D1\u8868\u8BF4\u4E00\u8BF4\uFF0C\u9879\u76EE\u5185\u4EE5\u524D\u7684\u8BF4\u4E00\u8BF4\u5C06\u4E0D\u518D\u663E\u793A")), _react.default.createElement("div", {
        className: _style3.default.title,
        style: {
          marginTop: '20px'
        }
      }, _react.default.createElement("span", {
        className: _style3.default.checkboxC
      }, _react.default.createElement(_switch.default, {
        size: "small",
        checked: content_state,
        onClick: function onClick(e) {
          return _this2.commentContent(e);
        }
      })), "\u8BF4\u4E00\u8BF4\u5185\u5BB9", _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style3.default.tips
      }, "\u6CE8\uFF1A\u5173\u95ED\u8BE5\u529F\u80FD\u540E\uFF0C\u6D4F\u89C8\u4F5C\u54C1\u65F6\u8BF4\u4E00\u8BF4\u5185\u5BB9\u9ED8\u8BA4\u9690\u85CF")), _react.default.createElement("div", {
        className: _style3.default.title,
        style: {
          marginTop: '20px'
        }
      }, "\u8BF4\u4E00\u8BF4\u5C55\u793A\u7C7B\u578B", _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style3.default.selectDiv,
        style: {
          marginTop: '10px'
        }
      }, _react.default.createElement(_select.default, {
        placeholder: "\u9009\u62E9\u5C55\u793A\u65B9\u5F0F",
        name: "imageurl",
        value: type,
        style: {
          width: '100%'
        },
        onChange: this.handleEntryMode
      }, optionData.map(function (item, index) {
        return _react.default.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }))))));
    }
  }]);

  return CommentEdit;
}(_react.default.Component);

exports.default = CommentEdit;