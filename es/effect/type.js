import "antd/es/select/style";
import _Select from "antd/es/select";

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
var Option = _Select.Option;

var Type =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Type, _React$Component);

  function Type() {
    _classCallCheck(this, Type);

    return _possibleConstructorReturn(this, _getPrototypeOf(Type).apply(this, arguments));
  }

  _createClass(Type, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          effectList = _this$props.effectList;
      return React.createElement("div", null, React.createElement(_Select, {
        value: value,
        name: "imageurl",
        placeholder: "\u8BF7\u9009\u62E9\u7279\u6548",
        style: {
          width: '100%'
        },
        onChange: this.props.onChange
      }, effectList.map(function (item, index) {
        return React.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }), React.createElement(Option, {
        value: "sunlight"
      }, "\u592A\u9633\u5149"), React.createElement(Option, {
        value: "custom"
      }, "\u81EA\u5B9A\u4E49")));
    }
  }]);

  return Type;
}(React.Component);

export default Type;