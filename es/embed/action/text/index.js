import "antd/es/input/style";
import _Input from "antd/es/input";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import { ItemBox } from '@/components/';
import style from '../style.less';

var Text =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Text, _React$Component);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, props));

    _this.textValue = function (e) {
      _this.setState({
        text: e.target.value
      }, function () {
        _this.props.onChange(_this.state);
      });
    };

    var actionData = props.actionData;
    _this.state = {
      text: actionData ? actionData.text : '请添加文字内容'
    };
    return _this;
  }

  _createClass(Text, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)) {
        if (this.props.actionData) {
          var actionData = this.props.actionData;
          this.setState({
            text: actionData.text
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.state.text;
      return React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, "\u6587\u672C\u4FE1\u606F"), React.createElement("div", {
        className: style.setupInput
      }, React.createElement(_Input.TextArea, {
        value: text,
        autosize: {
          minRows: 3,
          maxRows: 3
        },
        placeholder: "\u8BF7\u8F93\u5165\u6587\u5B57\u4FE1\u606F",
        style: {
          borderRadius: 3
        },
        onChange: this.textValue
      })));
    }
  }]);

  return Text;
}(React.Component);

export { Text as default };