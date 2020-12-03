import "antd/es/button/style";
import _Button from "antd/es/button";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React from 'react'; // 引入编辑器组件 引入编辑器样式

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { ContentUtils } from 'braft-utils';
import Media from './media.js';

var braftEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(braftEditor, _React$Component);

  function braftEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, braftEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(braftEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      // 创建一个空的editorState作为初始值
      editorState: BraftEditor.createEditorState(null),
      htmlShow: false,
      mediaVisible: false
    };

    _this.handleMediaShow = function () {
      _this.setState({
        mediaVisible: true
      });
    };

    _this.mediaClose = function () {
      _this.setState({
        mediaVisible: false
      });
    };

    _this.mediaHandler = function (url) {
      if (url.length == 0) {
        return false;
      }

      _this.setState({
        editorState: ContentUtils.insertMedias(_this.state.editorState, url)
      });
    };

    _this.handleEditorChange = function (editorState) {
      var htmlContent = editorState.toHTML();

      _this.setState({
        editorState: editorState
      }, function () {
        _this.props.onChange(htmlContent);
      });
    };

    return _this;
  }

  _createClass(braftEditor, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var htmlContent;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 假设此处从服务端获取html格式的编辑器内容
                htmlContent = this.props.data; // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat

                this.setState({
                  editorState: BraftEditor.createEditorState(htmlContent)
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          editorState = _this$state.editorState,
          mediaVisible = _this$state.mediaVisible;
      var controls = ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'link', 'separator', 'hr', 'separator', 'separator', 'clear'];
      var extendControls = [{
        key: 'antd-uploader',
        type: 'component',
        component: React.createElement("div", null, React.createElement(_Button, {
          type: "button",
          className: "control-item button upload-button",
          onClick: function onClick() {
            return _this2.handleMediaShow();
          },
          "data-title": "\u63D2\u5165\u5A92\u4F53"
        }, "\u63D2\u5165\u5A92\u4F53"))
      }];
      return React.createElement("div", {
        className: "my-component"
      }, React.createElement(BraftEditor, {
        value: editorState,
        controls: controls,
        extendControls: extendControls,
        onChange: this.handleEditorChange
      }), React.createElement(Media, {
        visible: mediaVisible,
        onChange: this.mediaHandler,
        onClose: this.mediaClose
      }));
    }
  }]);

  return braftEditor;
}(React.Component);

export { braftEditor as default };