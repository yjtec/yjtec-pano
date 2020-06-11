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
import IconFont from '@/components/IconFont';
import { ossImgMedia } from '@/utils/oss';
import style from './style.less';

var EmbedList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EmbedList, _React$Component);

  function EmbedList() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmbedList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmbedList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.oneHandle = function (id) {
      _this.props.onChange(id);
    };

    return _this;
  }

  _createClass(EmbedList, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.props.data;
      var typeData = [{
        type: 1,
        name: '文字标记'
      }, {
        type: 2,
        name: '图片轮播'
      }, {
        type: 3,
        name: '序列图'
      }, {
        type: 4,
        name: '视频'
      }];
      return React.createElement("div", {
        className: style.module
      }, data.map(function (item, index) {
        return React.createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this2.oneHandle(item.id);
          },
          className: style.hotspotLists
        }, React.createElement("span", {
          className: style.delSelectdPano
        }, typeData.map(function (i) {
          if (i.type == item.type) {
            return i.name;
          }
        })), React.createElement("div", {
          className: style.thumb
        }, item.type == 1 && React.createElement(IconFont, {
          type: "icon-wenzi",
          style: {
            fontSize: '16px'
          }
        }), item.type == 2 && React.createElement("img", {
          alt: "\u56FE\u7247",
          src: ossImgMedia(item.actionData && item.actionData.img.length > 0 && item.actionData.img[0].url && item.actionData.img[0].url, 'media')
        }), item.type == 3 && React.createElement("img", {
          alt: "\u5E8F\u5217\u56FE",
          src: ossImgMedia(item.actionData && item.actionData.url && item.actionData.url, 'media')
        }), item.type == 4 && React.createElement("img", {
          alt: "\u89C6\u9891",
          src: ossImgMedia(item.actionData && item.actionData.thumbUrl && item.actionData.thumbUrl, 'media')
        })), React.createElement("div", {
          className: style.title
        }, item.type == 1 && item.actionData.text, item.type == 2 && '嵌入图片', item.type == 3 && '序列图', item.type == 4 && '嵌入视频'));
      }));
    }
  }]);

  return EmbedList;
}(React.Component);

export { EmbedList as default };