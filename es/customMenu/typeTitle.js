import "antd/es/select/style";
import _Select from "antd/es/select";
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
import styles from './style.less';
var InputGroup = _Input.Group;
var Option = _Select.Option;
var actionType = [{
  id: 1,
  value: 2,
  title: '外链'
}, {
  id: 2,
  value: 3,
  title: '电话'
}, {
  id: 3,
  value: 15,
  title: '导航'
}, {
  id: 4,
  value: 5,
  title: '图文'
}, {
  id: 5,
  value: 8,
  title: '视频'
}, {
  id: 6,
  value: 7,
  title: '环物'
}, {
  id: 7,
  value: 11,
  title: '模型'
}, {
  id: 8,
  value: 14,
  title: '文章'
}];

var typeTitle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(typeTitle, _React$Component);

  function typeTitle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, typeTitle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(typeTitle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      type: '',
      title: ''
    };

    _this.setType = function (e) {
      _this.setState({
        type: e
      }, function () {
        return _this.save();
      });
    };

    _this.setTitle = function (e) {
      _this.setState({
        title: e.target.value
      }, function () {
        return _this.save();
      });
    };

    _this.save = function () {
      var _this$state = _this.state,
          type = _this$state.type,
          title = _this$state.title;

      _this.props.onChange({
        type: type,
        title: title
      });
    };

    return _this;
  }

  _createClass(typeTitle, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          type = _this$props.type,
          title = _this$props.title;

      if (prevProps.type != type || prevProps.title != title) {
        if (type || title) {
          this.setState({
            type: Number(type),
            title: title
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          type = _this$state2.type,
          title = _this$state2.title;
      return React.createElement("div", {
        className: styles.menu_type,
        style: {
          marginTop: '10px'
        }
      }, React.createElement(InputGroup, {
        compact: true
      }, React.createElement(_Select, {
        style: {
          width: '72px'
        },
        value: type,
        onChange: this.setType
      }, actionType.map(function (item) {
        return React.createElement(Option, {
          key: item.id,
          value: item.value
        }, item.title);
      })), React.createElement(_Input, {
        maxLength: 10,
        style: {
          width: 'calc(100% - 72px)'
        },
        value: title,
        placeholder: "\u8BF7\u6DFB\u52A0\u6807\u9898",
        onChange: this.setTitle
      })));
    }
  }]);

  return typeTitle;
}(React.Component);

export { typeTitle as default };