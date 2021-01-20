import "antd/es/icon/style";
import _Icon from "antd/es/icon";

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
import { isUrl, isMark } from '@/utils/utils';
import IconFont from '@/components/IconFont';
import styles from './style.less';
import { mediaImgConfig } from '@/utils/oss.config';

var getIcon = function getIcon(icon) {
  if (typeof icon === 'string') {
    if (icon.startsWith('icon-')) {
      return React.createElement(IconFont, {
        type: icon,
        className: styles.icon
      });
    }

    if (isUrl(icon)) {
      return React.createElement(_Icon, {
        component: function component() {
          return React.createElement("img", {
            src: icon,
            alt: "icon",
            className: styles.icon
          });
        }
      });
    }

    return React.createElement(_Icon, {
      type: icon,
      className: styles.icon
    });
  }

  return icon;
};

var DetailsList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DetailsList, _React$Component);

  function DetailsList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DetailsList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DetailsList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.openEdit = function (id) {
      _this.props.getItem(id);
    };

    return _this;
  }

  _createClass(DetailsList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          list = _this$props.list,
          data = _this$props.data;
      return React.createElement("div", null, React.createElement("div", {
        className: styles.list
      }, list && list.map(function (item, index) {
        return React.createElement("div", {
          className: styles.item,
          key: index
        }, React.createElement("span", null, index + 1), item.url && React.createElement("img", {
          src: mediaImgConfig(item.url, 'img'),
          alt: item.title,
          onClick: function onClick() {
            return _this2.openEdit(item.id);
          }
        }), React.createElement("p", {
          onClick: function onClick() {
            return _this2.openEdit(item.id);
          }
        }, item.title), React.createElement("div", {
          onClick: function onClick() {
            return _this2.props.delItem(item.id);
          }
        }, getIcon('icon-huishouzhan')));
      })));
    }
  }]);

  return DetailsList;
}(React.Component);

export { DetailsList as default };