"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _react = _interopRequireDefault(require("react"));

var _braftEditor = _interopRequireDefault(require("./braftEditor"));

var _style2 = _interopRequireDefault(require("./style.less"));

var _yjtecSupport = require("yjtec-support");

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
      htmlContent: ''
    };

    _this.getHtmlContent = function (data) {
      _this.setState({
        htmlContent: data
      });
    };

    _this.onSave = function () {
      _this.props.onChange(_this.state.htmlContent);
    };

    _this.setModalVisible = function () {
      _this.props.onClose();
    };

    return _this;
  }

  _createClass(modalEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        htmlContent: this.props.data
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;

        if (data) {
          this.setState({
            htmlContent: data
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var visible = this.props.visible;
      var htmlContent = this.state.htmlContent;
      return _react.default.createElement("div", null, _react.default.createElement(_modal.default, {
        title: "\u5BCC\u6587\u672C",
        centered: true,
        width: 1000,
        visible: visible,
        destroyOnClose: true,
        maskClosable: false,
        closable: false,
        okText: '保存',
        onOk: function onOk() {
          return _this2.onSave();
        },
        onCancel: function onCancel() {
          return _this2.setModalVisible();
        },
        className: _style2.default.editorMoadl
      }, _react.default.createElement(_braftEditor.default, {
        data: htmlContent,
        onChange: this.getHtmlContent
      })));
    }
  }]);

  return modalEditor;
}(_react.default.Component);

exports.default = modalEditor;