"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style2 = _interopRequireDefault(require("./style.less"));

var _oss = require("@/utils/oss.config");

var _ItemImg = _interopRequireDefault(require("../components/ItemImg"));

var _yjtecSupport = require("yjtec-support");

var _AllScene = _interopRequireDefault(require("@/components/AllScene"));

var _help = require("@/utils/help");

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

var Pic =
/*#__PURE__*/
function (_Component) {
  _inherits(Pic, _Component);

  function Pic() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Pic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Pic)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      sceneListVisible: false
    };

    _this.delImg = function () {
      _this.props.onDelImg();
    };

    _this.selectImg = function (arr) {
      _this.props.selectImg(arr[0].path.path);
    };

    _this.appliedToScene = function () {
      _this.setState({
        sceneListVisible: true
      });
    };

    _this.onCancelAppliedToScene = function () {
      _this.setState({
        sceneListVisible: false
      });
    };

    _this.setAllScene = function (data, sceneIds) {
      _this.props.apply(data, sceneIds);
    };

    return _this;
  }

  _createClass(Pic, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          visible = _this$props.visible,
          url = _this$props.url,
          categoryArr = _this$props.categoryArr,
          scenesArr = _this$props.scenesArr;
      var sceneListVisible = this.state.sceneListVisible;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style2.default.title,
        style: {
          margin: '10px 0 10px 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px',
          color: '#fff',
          borderColor: '#008aff'
        }
      }, "\u5E94\u7528\u5230")), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, title), _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '20px',
          height: '20px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement(_ItemImg.default, {
        url: url ? (0, _oss.mediaImgConfig)(url, 'img') : '',
        imgSize: "500X500",
        onChange: this.selectImg,
        onDel: this.delImg
      }), _react.default.createElement(_AllScene.default, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: url,
        onOk: this.setAllScene
      }));
    }
  }]);

  return Pic;
}(_react.Component);

var _default = Pic;
exports.default = _default;