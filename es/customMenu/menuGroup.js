import "antd/es/input/style";
import _Input from "antd/es/input";

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

import React from 'react';
import { Button } from '@/components/Form';
import styles from './style.less';
import Icon from './icon';
import MenuBtn from './menuBtn';
var defaultData = {
  title: '',
  icon: '/image/2019/07/24/icon_link.png',
  children: []
};
var defaultBtnData = {
  type: 'button'
};

var MenuGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuGroup, _React$Component);

  function MenuGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      index: '1',
      data: ''
    };

    _this.setIcon = function (url) {
      _this.setState({
        data: _objectSpread({}, _this.state.data, {
          icon: url
        })
      }, function () {
        return _this.save();
      });
    };

    _this.setTitle = function (e) {
      _this.setState({
        data: _objectSpread({}, _this.state.data, {
          title: e.target.value
        })
      }, function () {
        return _this.save();
      });
    };

    _this.addChildren = function () {
      var data = _this.state.data;
      var newChildren = [];

      if (data.children == undefined || data.children.length == 0) {
        newChildren.push(_objectSpread({}, defaultBtnData, {
          index: '1'
        }));
      } else {
        newChildren = data.children.concat(_objectSpread({}, defaultBtnData, {
          index: (data.children.length + 1).toString()
        }));
      }

      _this.setState({
        data: _objectSpread({}, _this.state.data, {
          children: newChildren
        })
      });
    };

    _this.editBtn = function (re) {
      var data = _this.state.data;
      var new_children = [];

      if (data.children.some(function (item) {
        return item.index == re.index;
      })) {
        data.children.map(function (item) {
          if (item.index == re.index) {
            new_children.push(re);
          } else {
            new_children.push(item);
          }
        });
      } else {
        new_children = data.children.concat(re);
      }

      _this.setState({
        data: _objectSpread({}, data, {
          children: new_children
        })
      }, function () {
        return _this.save();
      });
    };

    _this.del = function (index) {
      var new_children = _this.state.data.children.filter(function (item) {
        return item.index != index;
      }).map(function (item, i) {
        return _objectSpread({}, item, {
          index: (i + 1).toString()
        });
      });

      _this.setState({
        data: _objectSpread({}, _this.state.data, {
          children: new_children
        })
      }, function () {
        return _this.save();
      });
    };

    _this.save = function () {
      console.log(_this.state);

      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(MenuGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          index = _this$props.index,
          type = _this$props.type,
          data = _this$props.data;
      this.setState({
        index: index,
        type: type,
        data: data && JSON.stringify(data) != '[]' ? data : defaultData
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          index = _this$props2.index,
          type = _this$props2.type,
          data = _this$props2.data;

      if (JSON.stringify(this.props) != JSON.stringify(prevProps)) {
        if (this.props) {
          this.setState({
            index: index,
            type: type,
            data: data && JSON.stringify(data) != '[]' ? data : defaultData
          });
        }
      }
    } //选择素材返回值

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          index = _this$state.index,
          data = _this$state.data;
      return React.createElement("div", null, React.createElement(Icon, {
        url: data.icon,
        onChange: this.setIcon
      }), React.createElement("div", {
        className: styles.inputDiv,
        style: {
          marginTop: '10px'
        }
      }, React.createElement(_Input, {
        maxLength: 10,
        placeholder: "\u8BF7\u6DFB\u52A0\u5206\u7EC4\u540D\u79F0",
        value: data.title,
        onChange: this.setTitle,
        style: {
          marginBottom: '5px'
        }
      })), React.createElement("div", {
        className: styles.add_menu
      }, React.createElement(Button, {
        title: "\u6DFB\u52A0\u5B50\u83DC\u5355",
        disabled: data.children && data.children.length >= 5 ? true : false,
        style: {
          display: 'block'
        },
        onClick: function onClick() {
          return _this2.addChildren();
        }
      })), data.children && data.children.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          style: {
            marginTop: '15px'
          }
        }, React.createElement("div", {
          className: styles.title,
          style: {
            fontSize: '14px'
          }
        }, React.createElement("span", {
          className: styles.checkboxC,
          onClick: function onClick() {
            return _this2.del(item.index);
          }
        }, "\u5220\u9664"), "\u5B50\u83DC\u5355(", item.index, ")"), React.createElement(MenuBtn, {
          showIcon: false,
          index: item.index,
          type: item.type,
          data: JSON.stringify(item.data) != '{}' ? item.data : '',
          onChange: _this2.editBtn
        }), React.createElement("div", {
          className: styles.lineDefaultBottom,
          style: {
            margin: '10px 0 0 0'
          }
        }), React.createElement("div", {
          style: {
            clear: 'both'
          }
        }));
      }));
    }
  }]);

  return MenuGroup;
}(React.Component);

export { MenuGroup as default };