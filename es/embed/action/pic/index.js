import "antd/es/button/style";
import _Button from "antd/es/button";

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
import { InputNumber } from '@/components/Form';
import PicList from '@/components/PicList';
import style from '../style.less';
import { strRandom } from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';

var Pic =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pic, _React$Component);

  function Pic(props) {
    var _this;

    _classCallCheck(this, Pic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pic).call(this, props));

    _this.handleShow = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.selectImg = function (arr) {
      var img = _this.state.img;
      var newImg = [];

      if (arr) {
        newImg = arr.map(function (item) {
          return {
            id: strRandom(10, {
              letters: false
            }),
            url: item.path.path
          };
        });
      }

      img = img.concat(newImg);

      _this.setState({
        userMediaVisible: false,
        img: img
      }, function () {
        _this.runChange();
      });
    };

    _this.delImg = function (data) {
      var img = _this.state.img;
      var newImg = img.filter(function (item) {
        return item.id != data.id;
      });

      _this.setState({
        img: newImg
      }, function () {
        _this.runChange();
      });
    };

    _this.handleRotateTime = function (value) {
      _this.setState({
        time: value
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          img = _this$state.img,
          time = _this$state.time;

      _this.props.onChange({
        img: _this.state.img,
        time: _this.state.time
      });
    };

    var actionData = props.actionData;
    _this.state = {
      userMediaVisible: false,
      time: actionData && actionData.time ? actionData.time : 3,
      img: actionData && actionData.img ? actionData.img : []
      /*width:(actionData && actionData.width) ? actionData.width : 100,
      height:(actionData && actionData.height) ? actionData.height : 100,*/

    };
    return _this;
  }

  _createClass(Pic, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)) {
        if (this.props.actionData) {
          var actionData = this.props.actionData;
          this.setState({
            userMediaVisible: false,
            time: actionData.time,
            img: actionData.img
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          userMediaVisible = _this$state2.userMediaVisible,
          img = _this$state2.img,
          time = _this$state2.time;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", null, React.createElement("div", {
        className: style.pictitle
      }, "\u56FE\u7247\u5C55\u793A", React.createElement("p", null, "\u5EFA\u8BAE\u5927\u5C0F400X400"), React.createElement(_Button, {
        onClick: function onClick() {
          return _this2.handleShow();
        },
        className: style.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement("div", null, React.createElement(PicList, {
        data: img,
        onDel: this.delImg
      })))), React.createElement(ItemBox, null, React.createElement("div", null, React.createElement("div", {
        className: style.timeTitle,
        style: {
          marginTop: '20px'
        }
      }, React.createElement("span", null, "\u4EA4\u4E92\u65F6\u95F4")), React.createElement("div", {
        className: style.timeInput
      }, React.createElement("div", {
        className: style.input
      }, React.createElement(InputNumber, {
        inputNumberValue: time,
        max: 10,
        min: 1,
        name: '',
        onChange: function onChange(value) {
          return _this2.handleRotateTime(value);
        },
        style: {
          width: '40px'
        }
      })), React.createElement("p", null, "\u79D2\u540E\u81EA\u52A8\u64AD\u653E\u4E0B\u4E00\u5F20"))), React.createElement(UserMedia, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: true,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectImg,
        onCancel: this.closeMediaModal
      }), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })));
    }
  }]);

  return Pic;
}(React.Component);

export { Pic as default };