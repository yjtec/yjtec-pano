import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/message/style";
import _message from "antd/es/message";

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
import { Drawer, ItemBox } from '@/components/';
import { Button } from '@/components/Form';
import style from './style.less';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';

var DetailsEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailsEdit, _React$Component);

  function DetailsEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailsEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailsEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: '',
      url: '',
      fov: '',
      ath: '',
      atv: ''
    };

    _this.scrollFunc = function () {
      var krpano = _this.props.krpano;

      _this.setState({
        fov: krpano.get('view.fov')
      }, function () {
        _this.saveOne();
      });
    };

    _this.setTitle = function (e) {
      _this.setState({
        title: e.target.value
      }, function () {
        _this.saveOne();
      });
    };

    _this.delImg = function () {
      _this.setState({
        url: ''
      }, function () {
        _this.saveOne();
      });
    };

    _this.selectImg = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, function () {
        _this.saveOne();
      });
    };

    _this.saveOne = function () {
      var _this$state = _this.state,
          title = _this$state.title,
          url = _this$state.url,
          fov = _this$state.fov,
          ath = _this$state.ath,
          atv = _this$state.atv;
      var data = {
        title: title,
        url: url,
        fov: fov,
        ath: ath,
        atv: atv
      };

      _this.props.saveOne(data);
    };

    _this.save = function () {
      var _this$state2 = _this.state,
          title = _this$state2.title,
          url = _this$state2.url,
          fov = _this$state2.fov,
          ath = _this$state2.ath,
          atv = _this$state2.atv;

      if (!title) {
        _message.warning('请输入标题');

        return;
      }

      var data = {
        title: title,
        url: url,
        fov: fov,
        ath: ath,
        atv: atv
      };

      _this.props.saveList(data);
    };

    _this.onCancel = function () {
      _this.props.onCloseEdit();
    };

    return _this;
  }

  _createClass(DetailsEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          visible = _this$props.visible,
          data = _this$props.data;
      this.setState(_objectSpread({}, data));
      this.scrollFunc(); //注册监听事件

      if (document.addEventListener) {
        //火狐使用DOMMouseScroll绑定
        document.addEventListener('DOMMouseScroll', this.scrollFunc, false);
      } //其他浏览器直接绑定滚动事件


      window.onmousewheel = document.onmousewheel = this.scrollFunc;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (JSON.stringify(this.props.data) != JSON.stringify(prevProps.data)) {
        if (this.props.data) {
          var _this$props2 = this.props,
              visible = _this$props2.visible,
              data = _this$props2.data;
          this.setState(_objectSpread({}, data));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state3 = this.state,
          title = _this$state3.title,
          url = _this$state3.url,
          fov = _this$state3.fov;
      var visible = this.props.visible;
      return React.createElement(Drawer, {
        visible: visible,
        title: '细节设置',
        destroyOnClose: false,
        onCancel: this.onCancel
      }, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.detailsEdit
      }, React.createElement("div", {
        className: style.tips
      }, React.createElement("p", null, React.createElement("span", null, "\u5F53\u524D\u89C6\u89D2\u8303\u56F4\uFF08FOV\uFF09: ", parseInt(fov)), "\u901A\u8FC7\u653E\u5927\u6216\u7F29\u5C0F\u5168\u666F\uFF0C\u8BBE\u7F6E\u6700\u7EC8\u7684\u89C6\u89D2\u663E\u793A\u8303\u56F4")))), React.createElement(ItemBox, {
        style: {
          padding: '10px 0'
        }
      }, React.createElement("div", {
        className: style.itemTitle
      }, "\u6807\u9898"), React.createElement("div", {
        className: style.inputDiv
      }, React.createElement(_Input, {
        placeholder: "\u8BF7\u8F93\u5165\u6807\u9898",
        maxLength: 16,
        value: title,
        onChange: this.setTitle
      })), React.createElement("div", {
        className: style.mb20
      }), React.createElement("div", {
        className: style.itemTitle
      }, "\u5C01\u9762"), React.createElement(ItemImg, {
        url: url ? mediaImgConfig(url, 'img') : '',
        imgSize: "200X200",
        onChange: this.selectImg,
        onDel: this.delImg
      })), React.createElement(ItemBox, null, React.createElement(Button, {
        title: "\u4FDD\u5B58",
        onClick: function onClick() {
          return _this2.save();
        },
        style: {
          margin: '10px 0'
        }
      })));
    }
  }]);

  return DetailsEdit;
}(React.Component);

export { DetailsEdit as default };