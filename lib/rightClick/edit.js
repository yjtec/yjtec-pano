"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style3 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _Form = require("@/components/Form");

var _utils = require("@/utils/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultData = [{
  title: '',
  url: ''
}];
var maxNumber = 3; //可添加的最大数量

var RightClickEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(RightClickEdit, _Component);

  function RightClickEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RightClickEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RightClickEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      data: []
    };

    _this.handleAdd = function () {
      if (_this.state.data.length < maxNumber) {
        _this.setState({
          data: [].concat(_toConsumableArray(_this.state.data), defaultData)
        });
      } else {
        _message2.default.warning('最多可添加' + maxNumber + '个链接');
      }
    };

    _this.editItem = function (e, index, type) {
      var data = _this.state.data;
      var new_data = [];
      data.map(function (item, i) {
        if (index != i) {
          new_data.push(item);
        } else {
          if (type == 'title') {
            new_data.push({
              title: e.target.value,
              url: item.url
            });
          } else {
            new_data.push({
              title: item.title,
              url: e.target.value.length >= 8 ? (0, _utils.formatUrl)(e.target.value) : e.target.value
            });
          }
        }
      });

      _this.setState({
        data: new_data
      }, function () {
        _this.save();
      });
    };

    _this.del = function (index) {
      var new_data = [];

      _this.state.data.map(function (item, i) {
        if (i != index) {
          new_data.push(item);
        }
      });

      _this.setState({
        data: new_data
      }, function () {
        _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state.data);
    };

    return _this;
  }

  _createClass(RightClickEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        data: data.length != 0 ? data : defaultData
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;
      var helpShow = false;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        style: {
          padding: '10px 0'
        }
      }, helpShow && _react.default.createElement("div", {
        style: {
          float: 'right',
          width: '32px',
          height: '32px',
          position: 'relative'
        }
      }, _react.default.createElement(_components.Help, {
        link: 'rightClick',
        style: {
          fontSize: '24px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          width: helpShow ? '80%' : '100%',
          float: 'left'
        }
      }, _react.default.createElement(_Form.Button, {
        title: "\u6DFB\u52A0\u81EA\u5B9A\u4E49\u94FE\u63A5",
        disabled: data.length >= 3 ? true : false,
        style: {
          backgroundColor: '#008aff',
          color: '#fff',
          borderColor: '#008aff'
        },
        onClick: function onClick() {
          return _this2.handleAdd();
        }
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style3.default.tips
      }, "\u6CE8\uFF1A\u6700\u591A\u53EF\u6DFB\u52A03\u4E2A\u81EA\u5B9A\u4E49\u94FE\u63A5"))), _react.default.createElement(_components.ItemBox, null, data.map(function (item, index) {
        return _react.default.createElement("div", {
          key: index,
          className: _style3.default.rightClickItem
        }, _react.default.createElement("div", {
          className: _style3.default.title
        }, _react.default.createElement("span", {
          className: _style3.default.checkboxC,
          onClick: function onClick() {
            return _this2.del(index);
          }
        }, "\u5220\u9664"), "\u81EA\u5B9A\u4E49\u94FE\u63A5(", index + 1, ")"), _react.default.createElement(_input.default, {
          placeholder: "\u6309\u94AE\u6807\u9898",
          value: item.title,
          onChange: function onChange(e) {
            return _this2.editItem(e, index, 'title');
          },
          style: {
            marginBottom: '5px'
          }
        }), _react.default.createElement(_input.default, {
          placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
          value: item.url,
          onBlur: function onBlur(e) {
            return _this2.editItem(e, index, 'url');
          },
          onChange: function onChange(e) {
            return _this2.editItem(e, index, 'url');
          }
        }));
      })));
    }
  }]);

  return RightClickEdit;
}(_react.Component);

var _default = RightClickEdit;
exports.default = _default;