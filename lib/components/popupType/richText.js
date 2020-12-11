"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/skeleton/style");

var _skeleton = _interopRequireDefault(require("antd/es/skeleton"));

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _Form = require("@/components/Form");

var _yjtecSupport = require("yjtec-support");

var _richText = _interopRequireDefault(require("./richText.less"));

var _utils = require("@/utils/utils");

var _oss = require("@/utils/oss.config");

var _uuid = require("uuid");

var _VipAuthority = _interopRequireDefault(require("@/components/VipAuthority"));

var _yjtecPano = require("yjtec-pano");

var _dec, _class, _temp;

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

var RichText = (_dec = (0, _dva.connect)(function (_ref) {
  var global = _ref.global;
  return {
    global: global
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RichText, _React$Component);

  function RichText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RichText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RichText)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: '',
      describe: '',
      jumpUrlTitle: '',
      jumpUrl: '',
      jumpType: 1,
      editorVisible: false,
      htmlContent: '',
      richTextId: '',
      uuid: ''
    };

    _this.openMediaModal = function () {
      //选择用户的素材
      _this.setState({
        editorVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        editorVisible: false
      });
    };

    _this.setHtmlContent = function (data) {
      _this.setState({
        htmlContent: data
      }, function () {
        _this.closeMediaModal();

        _this.runOnChange();
      });
    };

    _this.setJumpType = function (e) {
      _this.setState({
        jumpType: e.target.checked == true ? 1 : 0
      }, function () {
        _this.runOnChange();
      });
    };

    _this.setJumpUrlTitle = function (e) {
      _this.setState({
        jumpUrlTitle: e.target.value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.setJumpUrl = function (e) {
      var value = e.target.value;

      _this.setState({
        jumpUrl: value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.formatJumpUrl = function (e) {
      var value = (0, _utils.formatUrl)(e.target.value);

      _this.setState({
        jumpUrl: value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.runOnChange = function () {
      var _this$state = _this.state,
          title = _this$state.title,
          describe = _this$state.describe,
          jumpUrlTitle = _this$state.jumpUrlTitle,
          jumpUrl = _this$state.jumpUrl,
          jumpType = _this$state.jumpType,
          htmlContent = _this$state.htmlContent,
          richTextId = _this$state.richTextId,
          uuid = _this$state.uuid;
      var data = {
        title: title,
        describe: describe,
        jumpUrlTitle: jumpUrlTitle,
        jumpUrl: jumpUrl,
        jumpType: jumpType,
        htmlContent: htmlContent,
        richTextId: richTextId,
        uuid: uuid
      };

      _this.props.onChange(data);
    };

    return _this;
  }

  _createClass(RichText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data, {
        richTextId: data.richTextId ? data.richTextId : '',
        uuid: data.uuid ? data.uuid : (0, _uuid.v4)()
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;

        if (data) {
          this.setState(_objectSpread({}, data, {
            richTextId: data.richTextId ? data.richTextId : '',
            uuid: data.uuid ? data.uuid : (0, _uuid.v4)()
          }));
        }
      }
    } //打开文章编辑框

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          imgUrl = _this$state2.imgUrl,
          imgType = _this$state2.imgType,
          imgNumber = _this$state2.imgNumber,
          title = _this$state2.title,
          describe = _this$state2.describe,
          jumpType = _this$state2.jumpType,
          jumpUrlTitle = _this$state2.jumpUrlTitle,
          jumpUrl = _this$state2.jumpUrl,
          editorVisible = _this$state2.editorVisible,
          htmlContent = _this$state2.htmlContent;
      var isVip = this.props.global.data.info.is_vip;
      return _react.default.createElement("div", null, isVip == 0 ? _react.default.createElement(_VipAuthority.default, null) : _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _richText.default.title
      }, _react.default.createElement("div", {
        className: _richText.default.uploadButton
      }, _react.default.createElement(_Form.Button, {
        type: "primary",
        size: "small",
        title: "\u7F16\u8F91\u6587\u7AE0",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      })), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u6587\u7AE0\u5185\u5BB9"), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _richText.default.desc,
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, htmlContent != '<p></p>' && htmlContent != '' ? _react.default.createElement(_skeleton.default, {
        active: "true"
      }) : _react.default.createElement("span", null, "\u6682\u65E0\u5185\u5BB9")), _react.default.createElement("div", {
        className: _richText.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _richText.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: jumpType == 1 ? true : false,
        onChange: this.setJumpType,
        className: _richText.default.checkbox
      }, "\u65B0\u7A97\u53E3\u6253\u5F00")), "\u66F4\u591A\u5185\u5BB9"), _react.default.createElement("div", {
        className: _richText.default.jumpUrl
      }, _react.default.createElement(_input.default, {
        placeholder: "\u6309\u94AE\u6807\u9898",
        value: jumpUrlTitle,
        onChange: this.setJumpUrlTitle,
        style: {
          marginBottom: '5px'
        }
      }), _react.default.createElement(_input.default, {
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        value: jumpUrl,
        onBlur: this.formatJumpUrl,
        onChange: this.setJumpUrl
      })), _react.default.createElement(_yjtecPano.Editor, {
        visible: editorVisible,
        data: htmlContent,
        onChange: this.setHtmlContent,
        onClose: this.closeMediaModal
      })));
    }
  }]);

  return RichText;
}(_react.default.Component), _temp)) || _class);
exports.default = RichText;