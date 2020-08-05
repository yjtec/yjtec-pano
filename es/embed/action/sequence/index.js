function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import Animate from './animate';
import style from '../style.less';
var defaultPlayTime = {
  total: 1,
  time: 1,
  pertime: 1,
  fwidth: 100,
  fheight: 100
};

var Sequence =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sequence, _React$Component);

  function Sequence(props) {
    var _this;

    _classCallCheck(this, Sequence);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sequence).call(this, props));

    _this.handleAnimate = function (_ref) {
      var url = _ref.url,
          playTime = _ref.playTime;
      var total = playTime.total,
          time = playTime.time,
          pertime = playTime.pertime,
          fwidth = playTime.fwidth,
          fheight = playTime.fheight;

      _this.setState({
        url: url,
        playTime: {
          total: total,
          time: time,
          pertime: pertime,
          fwidth: fwidth,
          fheight: fheight
        }
      }, function () {
        _this.props.onChange(_this.state);
      });
    };

    var actionData = props.actionData;
    _this.state = {
      url: actionData && actionData.url ? actionData.url : '',
      playTime: actionData && actionData.playTime ? actionData.playTime : defaultPlayTime
    };
    return _this;
  }

  _createClass(Sequence, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.actionData) !== JSON.stringify(this.props.actionData)) {
        if (this.props.actionData) {
          var actionData = this.props.actionData;
          this.setState({
            url: actionData.url,
            playTime: actionData.playTime
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, "\u5E8F\u5217\u56FE"), React.createElement(Animate, _extends({}, this.state, {
        onChange: this.handleAnimate
      }))));
    }
  }]);

  return Sequence;
}(React.Component);

export { Sequence as default };