"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/switch/style");

var _switch = _interopRequireDefault(require("antd/es/switch"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style2 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _temp = _interopRequireDefault(require("../assets/images/temp1.jpg"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var tempList = [{
  key: 1,
  type: 1,
  title: '系统模板',
  img: _temp.default,
  url: '',
  dec: '系统模板可自定义界面UI'
} // {key:2,type:2,title:'系统模板',img:Temp1,url:'',dec:'系统模板可自定义界面UI'},
];

var SysTempEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SysTempEdit, _React$Component);

  function SysTempEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SysTempEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SysTempEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: 1
    };

    _this.setType = function (e) {
      _this.setState({
        type: e
      }, function () {
        return _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(SysTempEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var type = this.state.type;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, tempList.map(function (item) {
        return _react.default.createElement("div", {
          key: item.key,
          style: {
            marginBottom: '20px'
          }
        }, _react.default.createElement("div", {
          className: _style2.default.title,
          onClick: function onClick() {
            return _this2.setType(item.type);
          }
        }, _react.default.createElement("span", {
          className: _style2.default.checkboxC
        }, _react.default.createElement(_switch.default, {
          size: "small",
          checked: type == item.type ? true : false
        })), item.title, _react.default.createElement("div", {
          style: {
            clear: 'both'
          }
        })), _react.default.createElement("div", {
          className: _style2.default.tempListC
        }, _react.default.createElement("div", {
          className: _style2.default.tempListImg
        }, _react.default.createElement("img", {
          src: item.img,
          alt: item.title
        })), _react.default.createElement("div", {
          className: _style2.default.tips
        }, item.dec)));
      })));
    }
  }]);

  return SysTempEdit;
}(_react.default.Component);

exports.default = SysTempEdit;