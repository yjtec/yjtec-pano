import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";

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
import styles from './style.less';
import LangTap from '@/utils/langTap';
import { schoolUrl } from '@/utils/url.config';
import { helpShow } from '@/utils/help';
var defaultData = {
  ath: 0,
  //左右
  atv: 0,
  //上下
  rx: 0,
  ry: 0,
  rz: 0,
  scale: 0.99,
  edit_type: 1
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
        var className = styles[item.type];
        var Move = LangTap(React.createElement(IconFont, {
          type: item.icon,
          className: styles.directionIcon
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
          className: styles.rotateIcon
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
          className: styles.bloomingIcon
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
            rx: e
          }, function () {
            _this.runChange();
          });

          break;

        case 'ry':
          _this.setState({
            ry: e
          }, function () {
            _this.runChange();
          });

          break;

        case 'rz':
          _this.setState({
            rz: e
          }, function () {
            _this.runChange();
          });

          break;

        case 'scale':
          _this.setState({
            scale: e
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
        scale: value == 1 ? 0.99 : 31.5,
        edit_type: value
      }, function () {
        _this.runChange();
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
      edit_type: _data ? _data.edit_type : defaultData.edit_type
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
            scale: data.scale,
            edit_type: data.edit_type ? data.edit_type : 1
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
          scale = _this$state3.scale,
          edit_type = _this$state3.edit_type;
      var trim = React.createElement("div", null, React.createElement("div", {
        className: "".concat(styles.box, " ").concat(styles.bg)
      }, React.createElement("div", {
        className: styles.boxTitle
      }, "\u5E73 \u79FB"), React.createElement("div", {
        className: styles.directionC
      }, this.renderDirection())), React.createElement("div", {
        className: styles.spacing
      }), React.createElement("div", {
        className: "".concat(styles.box, " ").concat(styles.bg)
      }, React.createElement("div", {
        className: styles.boxTitle
      }, "\u65CB \u8F6C"), React.createElement("div", {
        className: styles.rotateC
      }, React.createElement("ul", null, this.renderRotate(), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })))), React.createElement("div", {
        className: styles.spacing
      }), React.createElement("div", {
        className: "".concat(styles.box, " ").concat(styles.bg)
      }, React.createElement("div", {
        className: styles.boxTitle
      }, "\u7F29 \u653E"), React.createElement("div", {
        className: styles.bloomingC
      }, React.createElement("ul", null, this.renderBlooming(), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })))));
      var align = React.createElement("div", {
        className: "".concat(styles.align, " ").concat(styles.bg)
      }, React.createElement("div", {
        className: "".concat(styles.item)
      }, React.createElement("span", null, "\u6C34\u5E73\u89C6\u573A(HFOV)"), React.createElement("div", {
        className: styles.inputDiv
      }, React.createElement(_InputNumber, {
        min: 1,
        max: 300,
        value: scale,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('scale', e);
        }
      }))), React.createElement("div", {
        className: "".concat(styles.item)
      }, React.createElement("span", null, "X\u8F74(Yaw)"), React.createElement("div", {
        className: styles.inputDiv
      }, React.createElement(_InputNumber, {
        min: -360,
        max: 360,
        value: rx,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('rx', e);
        }
      }))), React.createElement("div", {
        className: "".concat(styles.item)
      }, React.createElement("span", null, "Y\u8F74(Pitch)"), React.createElement("div", {
        className: styles.inputDiv
      }, React.createElement(_InputNumber, {
        min: -360,
        max: 360,
        value: ry,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('ry', e);
        }
      }))), React.createElement("div", {
        className: "".concat(styles.item)
      }, React.createElement("span", null, "Z\u8F74(Roll)"), React.createElement("div", {
        className: styles.inputDiv
      }, React.createElement(_InputNumber, {
        min: -360,
        max: 360,
        value: rz,
        placeholder: "\u8BF7\u8F93\u5165\u5750\u6807\u503C",
        onChange: function onChange(e) {
          return _this3.editCoordinate('rz', e);
        }
      }))), React.createElement("div", {
        className: styles.help
      }, React.createElement(_Button, {
        type: "primary",
        style: {
          width: 'calc(100% - 30px)'
        },
        onClick: function onClick() {
          return _this3.props.alignment(_this3.state);
        }
      }, "\u5BF9\u9F50")), React.createElement("div", {
        className: styles.help,
        style: {
          display: helpShow ? 'block' : 'none'
        },
        onClick: function onClick() {
          window.open(schoolUrl + '/article/detail/177');
        }
      }, "\u4F7F\u7528\u6559\u7A0B"));
      return React.createElement("div", null, React.createElement("div", {
        className: styles.edit,
        style: {
          display: this.props.visible == true && this.props.embedType != 1 ? 'block' : 'none'
        }
      }, React.createElement("div", {
        className: "".concat(styles.fine_tuning_title, " ").concat(styles.bg)
      }, this.props.embedType == 4 ? React.createElement("div", null, React.createElement("span", {
        className: "".concat(edit_type == 1 && styles.seleased),
        style: {
          width: '50%'
        },
        onClick: function onClick() {
          return _this3.switch(1);
        }
      }, "\u7EC6\u8282\u8C03\u6574"), React.createElement("span", {
        className: "".concat(edit_type == 2 && styles.seleased),
        style: {
          width: '50%'
        },
        onClick: function onClick() {
          return _this3.switch(2);
        }
      }, "\u4F4D\u7F6E\u5BF9\u9F50")) : React.createElement("span", {
        className: "".concat(edit_type == 1 && styles.seleased)
      }, "\u7EC6\u8282\u8C03\u6574")), React.createElement("div", {
        className: styles.spacing
      }), this.props.embedType == 4 && edit_type == 2 && align, (this.props.embedType == 2 || this.props.embedType == 3) && trim, this.props.embedType == 4 && edit_type == 1 && trim, React.createElement("div", {
        className: styles.spacing
      }), React.createElement("div", {
        className: "".concat(styles.box, " ").concat(styles.bg),
        style: {
          position: 'absolute',
          bottom: '0'
        }
      }, React.createElement("div", {
        className: styles.boxTitle,
        onClick: function onClick() {
          return _this3.reset();
        }
      }, "\u91CD \u7F6E"))));
    }
  }]);

  return FineTuning;
}(React.Component);

export { FineTuning as default };