import "antd/es/button/style";
import _Button from "antd/es/button";
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

import React, { Fragment } from 'react';
import IconFont from '@/components/IconFont';
import style from './style.less';
import LangTap from '@/utils/langTap';
import { schoolUrl } from '@/utils/url.config';
var defaultData = {
  ath: 0,
  //左右
  atv: 0,
  //上下
  rx: 0,
  ry: 0,
  rz: 0,
  scale: 0.99
};

function moveOperator(k, operator, num) {
  if (operator == 'plus') {
    return (k * 10 + num * 10) / 10;
  } else {
    var newData = {};
    return (k * 10 - num * 10) / 10;
  }
}

var FineTuning =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FineTuning, _React$Component);

  function FineTuning(props) {
    var _this;

    _classCallCheck(this, FineTuning);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FineTuning).call(this, props));

    _this.moveHotspot = function (type) {
      var _this$state = _this.state,
          atv = _this$state.atv,
          ath = _this$state.ath,
          scale = _this$state.scale;
      var newData = {};

      if (type == 'top') {
        newData = {
          atv: moveOperator(atv, 'reduce', 0.1)
        };
      }

      if (type == 'bottom') {
        newData = {
          atv: moveOperator(atv, 'plus', 0.1)
        };
      }

      if (type == 'right') {
        newData = {
          ath: moveOperator(ath, 'plus', 0.1)
        };
      }

      if (type == 'left') {
        newData = {
          ath: moveOperator(ath, 'reduce', 0.1)
        };
      }

      _this.setState(_objectSpread({}, newData), function () {
        _this.runChange();
      });
    };

    _this.setRy = function (type, direction) {
      var _this$state2 = _this.state,
          rx = _this$state2.rx,
          ry = _this$state2.ry,
          rz = _this$state2.rz;
      var newData = {};

      if (type == 'rx') {
        if (direction == 1) {
          newData = {
            rx: moveOperator(rx, 'plus', 0.5)
          };
        } else {
          newData = {
            rx: moveOperator(rx, 'reduce', 0.5)
          };
        }
      }

      if (type == 'ry') {
        if (direction == 1) {
          newData = {
            ry: moveOperator(ry, 'reduce', 0.5)
          };
        } else {
          newData = {
            ry: moveOperator(ry, 'plus', 0.5)
          };
        }
      }

      if (type == 'rz') {
        if (direction == 1) {
          newData = {
            rz: moveOperator(rz, 'plus', 0.5)
          };
        } else {
          newData = {
            rz: moveOperator(rz, 'reduce', 0.5)
          };
        }
      }

      _this.setState(_objectSpread({}, newData), function () {
        _this.runChange();
      });
    };

    _this.setScale = function (direction) {
      var scale = _this.state.scale;
      var newData = {};

      if (direction == 1) {
        newData = {
          scale: moveOperator(scale, 'plus', 0.005)
        };
      } else {
        newData = {
          scale: moveOperator(scale, 'reduce', 0.005)
        };
      }

      _this.setState(_objectSpread({}, newData), function () {
        _this.runChange();
      });
    };

    _this.reset = function () {
      var data = _this.state;

      var newData = _objectSpread({}, data, {
        rx: defaultData.rx,
        ry: defaultData.ry,
        rz: defaultData.rz,
        scale: defaultData.scale
      });

      _this.props.onChange(newData);
    };

    _this.renderDirection = function () {
      var direction = [{
        label: '上',
        icon: 'icon-xiangshang',
        type: 'top',
        position: 1
      }, {
        label: '右',
        icon: 'icon-xiangyou',
        type: 'right',
        position: 0
      }, {
        label: '下',
        icon: 'icon-xiangxia',
        type: 'bottom',
        position: 0
      }, {
        label: '左',
        icon: 'icon-xiangzuo',
        type: 'left',
        position: 1
      }];
      return direction.map(function (item, index) {
        var className = style[item.type];
        var Move = LangTap(React.createElement(IconFont, {
          type: item.icon,
          className: style.directionIcon
        }), function () {
          _this.moveHotspot(item.type);
        }, 100);
        return React.createElement("div", {
          key: item.type,
          className: className
        }, item.position ? React.createElement(Fragment, null, React.createElement("span", null, item.label), React.createElement(Move, null)) : React.createElement(Fragment, null, React.createElement(Move, null), React.createElement("span", null, item.label)));
      });
    };

    _this.renderRotate = function () {
      var rotate = [{
        icon: 'icon-zuozhuan',
        type: 'ry',
        operator: 2
      }, {
        icon: 'icon-youzhuan',
        type: 'ry',
        operator: 1
      }, {
        icon: 'icon-shangfanzhuan',
        type: 'rx',
        operator: 2
      }, {
        icon: 'icon-xiafanzhuan',
        type: 'rx',
        operator: 1
      }, {
        icon: 'icon-zuoxuanzhuan',
        type: 'rz',
        operator: 1
      }, {
        icon: 'icon-youxuanzhuan',
        type: 'rz',
        operator: 2
      }];
      return rotate.map(function (item, index) {
        var Rotate = LangTap(React.createElement(IconFont, {
          type: item.icon,
          className: style.rotateIcon
        }), function () {
          _this.setRy(item.type, item.operator);
        }, 100);
        return React.createElement("li", {
          key: index
        }, React.createElement(Rotate, null));
      });
    };

    _this.renderBlooming = function () {
      var blooming = [{
        label: '放大',
        icon: 'icon-fangda',
        operator: 1
      }, {
        label: '缩小',
        icon: 'icon-suoxiao',
        operator: 2
      }];
      return blooming.map(function (item, index) {
        var Blooming = LangTap(React.createElement(IconFont, {
          type: item.icon,
          className: style.bloomingIcon
        }), function () {
          _this.setScale(item.operator);
        }, 100);
        return React.createElement("li", {
          key: index
        }, React.createElement(Blooming, null), React.createElement("span", null, item.label));
      });
    };

    _this.editCoordinate = function (type, e) {
      switch (type) {
        case 'rx':
          _this.setState({
            rx: e.target.value
          }, function () {
            _this.runChange();
          });

          break;

        case 'ry':
          _this.setState({
            ry: e.target.value
          }, function () {
            _this.runChange();
          });

          break;

        case 'rz':
          _this.setState({
            rz: e.target.value
          }, function () {
            _this.runChange();
          });

          break;

        case 'scale':
          _this.setState({
            scale: e.target.value
          }, function () {
            _this.runChange();
          });

          break;

        default:
          return;
      }
    };

    _this.switch = function (value) {
      _this.setState({
        editType: value
      });
    };

    _this.runChange = function () {
      _this.props.onChange(_this.state);
    };

    var _data = props.data;
    _this.state = {
      ath: _data ? _data.ath : defaultData.ath,
      atv: _data ? _data.atv : defaultData.atv,
      rx: _data ? _data.rx : defaultData.rx,
      ry: _data ? _data.ry : defaultData.ry,
      rz: _data ? _data.rz : defaultData.rz,
      scale: _data ? _data.rscalez : defaultData.scale,
      editType: 1
    };
    return _this;
  }

  _createClass(FineTuning, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
        if (this.props.data) {
          var data = this.props.data;
          this.setState({
            ath: data.ath,
            atv: data.atv,
            rx: data.rx,
            ry: data.ry,
            rz: data.rz,
            scale: this.props.embedType == 4 && data.scale < 1 && data.scale != 0 ? 70 : data.scale
          }, function () {
            _this2.runChange();
          });
        }
      }
    } //上下左右移动hotspot

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state3 = this.state,
          rx = _this$state3.rx,
          ry = _this$state3.ry,
          rz = _this$state3.rz,
          scale = _this$state3.scale;
      var trim = React.createElement("div", null, React.createElement("div", {
        className: "".concat(style.box, " ").concat(style.bg)
      }, React.createElement("div", {
        className: style.boxTitle
      }, "\u5E73 \u79FB"), React.createElement("div", {
        className: style.directionC
      }, this.renderDirection())), React.createElement("div", {
        className: style.spacing
      }), React.createElement("div", {
        className: "".concat(style.box, " ").concat(style.bg)
      }, React.createElement("div", {
        className: style.boxTitle
      }, "\u65CB \u8F6C"), React.createElement("div", {
        className: style.rotateC
      }, React.createElement("ul", null, this.renderRotate(), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })))), React.createElement("div", {
        className: style.spacing
      }), React.createElement("div", {
        className: "".concat(style.box, " ").concat(style.bg)
      }, React.createElement("div", {
        className: style.boxTitle
      }, "\u7F29 \u653E"), React.createElement("div", {
        className: style.bloomingC
      }, React.createElement("ul", null, this.renderBlooming(), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })))));
      var align = React.createElement("div", {
        className: "".concat(style.align, " ").concat(style.bg)
      }, React.createElement("div", {
        className: "".concat(style.item)
      }, React.createElement("span", null, "\u6C34\u5E73\u89C6\u573A(HFOV)"), React.createElement("div", {
        className: style.inputDiv
      }, React.createElement(_Input, {
        value: scale,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('scale', e);
        }
      }))), React.createElement("div", {
        className: "".concat(style.item)
      }, React.createElement("span", null, "X\u8F74(Yaw)"), React.createElement("div", {
        className: style.inputDiv
      }, React.createElement(_Input, {
        value: rx,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('rx', e);
        }
      }))), React.createElement("div", {
        className: "".concat(style.item)
      }, React.createElement("span", null, "Y\u8F74(Pitch)"), React.createElement("div", {
        className: style.inputDiv
      }, React.createElement(_Input, {
        value: ry,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('ry', e);
        }
      }))), React.createElement("div", {
        className: "".concat(style.item)
      }, React.createElement("span", null, "Z\u8F74(Roll)"), React.createElement("div", {
        className: style.inputDiv
      }, React.createElement(_Input, {
        value: rz,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('rz', e);
        }
      }))), React.createElement("div", {
        className: style.help
      }, React.createElement(_Button, {
        type: "primary",
        style: {
          width: 'calc(100% - 30px)'
        },
        onClick: function onClick() {
          return _this3.props.alignment(_this3.state);
        }
      }, "\u5BF9\u9F50")), React.createElement("div", {
        className: style.help,
        onClick: function onClick() {
          window.open(schoolUrl + '/article/detail/177');
        }
      }, "\u4F7F\u7528\u6559\u7A0B"));
      return React.createElement("div", null, React.createElement("div", {
        className: style.edit,
        style: {
          display: this.props.visible == true && this.props.embedType != 1 ? 'block' : 'none'
        }
      }, React.createElement("div", {
        className: "".concat(style.fine_tuning_title, " ").concat(style.bg)
      }, this.props.embedType == 4 ? React.createElement("div", null, React.createElement("span", {
        className: "".concat(this.state.editType == 1 && style.seleased),
        onClick: function onClick() {
          return _this3.switch(1);
        }
      }, "\u7EC6\u8282\u8C03\u6574"), React.createElement("span", {
        className: "".concat(this.state.editType == 2 && style.seleased),
        onClick: function onClick() {
          return _this3.switch(2);
        }
      }, "\u4F4D\u7F6E\u5BF9\u9F50")) : React.createElement("span", {
        className: "".concat(this.state.editType == 1 && style.seleased)
      }, "\u7EC6\u8282\u8C03\u6574")), React.createElement("div", {
        className: style.spacing
      }), this.state.editType == 1 ? trim : align, React.createElement("div", {
        className: style.spacing
      }), React.createElement("div", {
        className: "".concat(style.box, " ").concat(style.bg),
        style: {
          position: 'absolute',
          bottom: '0'
        }
      }, React.createElement("div", {
        className: style.boxTitle,
        onClick: function onClick() {
          return _this3.reset();
        }
      }, "\u91CD \u7F6E"))));
    }
  }]);

  return FineTuning;
}(React.Component);

export { FineTuning as default };