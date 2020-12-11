import "antd/es/input/style";
import _Input from "antd/es/input";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

import React from 'react';
import Media from './Media';
import styles from './style.less';
import { Obj, isArray } from 'yjtec-support';
var TextArea = _Input.TextArea;

var MediaMul =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MediaMul, _React$Component);

  function MediaMul() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MediaMul);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MediaMul)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      list: [],
      activeId: 0
    };

    _this.handleChange = function (list) {
      _this.setState({
        list: list
      });
    };

    _this.handleClick = function (item) {
      _this.setState({
        activeId: item.id
      });
    };

    _this.handleText = function (e) {
      var activeId = _this.state.activeId;

      var list = _this.state.list.map(function (item) {
        return item.id == activeId ? _objectSpread({}, item, {
          text: e.target.value
        }) : item;
      });

      _this.setState({
        list: list
      });
    };

    _this.handleSetAllText = function () {
      var _this$state = _this.state,
          list = _this$state.list,
          activeId = _this$state.activeId;

      var _list$filter = list.filter(function (item) {
        return item.id == activeId;
      }),
          _list$filter2 = _slicedToArray(_list$filter, 1),
          current = _list$filter2[0];

      var re = list.map(function (item) {
        return _objectSpread({}, item, {
          text: current.text
        });
      });

      _this.setState({
        list: re
      });
    };

    return _this;
  }

  _createClass(MediaMul, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;

      if (isArray(data) && data.length > 0) {
        this.setState({
          list: data
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.activeId == 0 && nextState.list.length > 0) {
        this.setState({
          activeId: nextState.list[0].id
        });
      }

      if (nextState.activeId != 0 && nextState.list.length > 0 && !nextState.list.some(function (item) {
        return item.id == nextState.activeId;
      })) {
        //如果当前activeID呗删除了
        this.setState({
          activeId: nextState.list[0].id
        });
      } //触发改变


      if (!Obj.isEqual(nextState.list, this.state.list) && !Obj.isEqual(nextState.list, nextProps.data)) {
        var onChange = this.props.onChange;
        if (onChange) onChange(nextState.list);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          list = _this$state2.list,
          activeId = _this$state2.activeId;

      var _list$filter3 = list.filter(function (item) {
        return item.id == activeId;
      }),
          _list$filter4 = _slicedToArray(_list$filter3, 1),
          current = _list$filter4[0];

      return React.createElement("div", null, React.createElement(Media, {
        activeId: activeId,
        data: list,
        onChange: this.handleChange,
        onClick: this.handleClick
      }), React.createElement("div", {
        className: styles.mb10
      }), current && React.createElement("div", null, React.createElement("p", null, "\u6587\u5B57\u5185\u5BB9", React.createElement("a", {
        href: "javascript:void(0)",
        style: {
          float: 'right',
          fontWeight: 'bold'
        },
        onClick: this.handleSetAllText
      }, "\u5E94\u7528\u5230\u6240\u6709")), React.createElement("div", {
        className: styles.textAreaDiv
      }, React.createElement(TextArea, {
        rows: 3,
        maxLength: "1000",
        value: current.text,
        onChange: this.handleText,
        placeholder: "\u4E3A\u56FE\u7247\u6DFB\u52A0\u6587\u5B57\u63CF\u8FF0"
      }))));
    }
  }]);

  return MediaMul;
}(React.Component);

export { MediaMul as default };