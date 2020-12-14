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
import { Button } from '@/components/Form';
import styles from './style.less';
import { mediaImgConfig } from '@/utils/oss.config';
import Media from '@/components/MediaModal';

var icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(icon, _React$Component);

  function icon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(icon)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userMediaVisible: false,
      url: ''
    };

    _this.openMediaModal = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.selectMedia = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, function () {
        return _this.save();
      });

      _this.closeMediaModal();
    };

    _this.save = function () {
      var url = _this.state.url;

      _this.props.onChange(url);
    };

    return _this;
  }

  _createClass(icon, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var url = this.props.url;

      if (prevProps.url != url) {
        if (url) {
          this.setState({
            url: url
          });
        }
      }
    } //打开素材库选择窗口

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          userMediaVisible = _this$state.userMediaVisible,
          url = _this$state.url;
      return React.createElement("div", {
        className: styles.menu_icon
      }, React.createElement("img", {
        src: url ? mediaImgConfig(url, 'img') : '',
        alt: "\u56FE\u6807"
      }), React.createElement("span", {
        style: {
          marginLeft: '10px',
          color: 'rgba(255,255,255,0.45)'
        }
      }, "\u5EFA\u8BAE\u5C3A\u5BF8", React.createElement("br", null), "100X100"), React.createElement("div", {
        className: styles.menu_icon_btn,
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, "\u7F16\u8F91\u56FE\u6807"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      }), React.createElement(Media, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: 1,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return icon;
}(React.Component);

export { icon as default };