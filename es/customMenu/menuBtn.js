function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import PopupType from '../components/popupType';
import { Button } from '@/components/Form';
import styles from './style.less';
import Icon from './icon';
import TypeTitle from './typeTitle';
import Location from '../location';
var defaultData = {
  type: 1,
  title: '',
  icon: '/image/2019/07/24/icon_link.png',
  action_data: ''
};

var MenuBtn =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuBtn, _React$Component);

  function MenuBtn() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuBtn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuBtn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      index: '1',
      data: {}
    };

    _this.setIcon = function (url) {
      _this.setState(_objectSpread({}, _this.state, {
        data: _objectSpread({}, _this.state.data, {
          icon: url
        })
      }), function () {
        return _this.save();
      });
    };

    _this.setTypeTitle = function (obj) {
      _this.setState(_objectSpread({}, _this.state, {
        data: _objectSpread({}, _this.state.data, {}, obj)
      }), function () {
        return _this.save();
      });
    };

    _this.handleData = function (data, type) {
      var newData = '';

      if (type == 'phone') {
        newData = {
          phone: data
        };
      } else {
        newData = data;
      }

      _this.setState(_objectSpread({}, _this.state, {
        data: _objectSpread({}, _this.state.data, {
          action_data: newData
        })
      }), function () {
        return _this.save();
      });
    };

    _this.save = function () {
      _this.props.onChange(_this.state);
    };

    return _this;
  }

  _createClass(MenuBtn, [{
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
      return React.createElement("div", null, this.props.showIcon && React.createElement(Icon, {
        url: data.icon,
        onChange: this.setIcon
      }), React.createElement(TypeTitle, {
        type: data.type,
        title: data.title,
        onChange: this.setTypeTitle
      }), React.createElement("div", {
        className: styles.menu_type_c
      }, data.type == 2 && React.createElement(PopupType.Url, _extends({}, data.action_data, {
        onChange: function onChange(e) {
          return _this2.handleData(e, 'url');
        }
      })), data.type == 3 && React.createElement(PopupType.Phone, {
        phone: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'phone');
        }
      }), data.type == 1 && React.createElement(Location.Bmap, {
        help: 'location',
        title: '导航标注',
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'bmap');
        }
      }), data.type == 4 && React.createElement(PopupType.MediaMul, {
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'mediamul');
        }
      }), data.type == 8 && React.createElement(PopupType.Video, {
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'video');
        }
      }), data.type == 7 && React.createElement(PopupType.Rings, {
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'rings');
        }
      }), data.type == 11 && React.createElement(PopupType.Model, {
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'model');
        }
      }), data.type == 14 && React.createElement(PopupType.RichText, {
        data: data.action_data,
        onChange: function onChange(e) {
          return _this2.handleData(e, 'richtext');
        }
      })));
    }
  }]);

  return MenuBtn;
}(React.Component);

export { MenuBtn as default };