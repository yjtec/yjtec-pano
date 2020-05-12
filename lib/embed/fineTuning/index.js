"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconFont = _interopRequireDefault(require("@/components/IconFont"));

var _style = _interopRequireDefault(require("./style.less"));

var _langTap = _interopRequireDefault(require("@/utils/langTap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var defaultData = {
  ath: 0,
  //左右
  atv: 0,
  //上下
  rx: 0,
  ry: 0,
  rz: 0,
  scale: 1
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

    _this.runChange = function () {
      _this.props.onChange(_this.state);
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
        var className = _style.default[item.type];
        var Move = (0, _langTap.default)(_react.default.createElement(_IconFont.default, {
          type: item.icon,
          className: _style.default.directionIcon
        }), function () {
          _this.moveHotspot(item.type);
        }, 100);
        return _react.default.createElement("div", {
          key: item.type,
          className: className
        }, item.position ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", null, item.label), _react.default.createElement(Move, null)) : _react.default.createElement(_react.Fragment, null, _react.default.createElement(Move, null), _react.default.createElement("span", null, item.label)));
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
        var Rotate = (0, _langTap.default)(_react.default.createElement(_IconFont.default, {
          type: item.icon,
          className: _style.default.rotateIcon
        }), function () {
          _this.setRy(item.type, item.operator);
        }, 100);
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement(Rotate, null));
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
        var Blooming = (0, _langTap.default)(_react.default.createElement(_IconFont.default, {
          type: item.icon,
          className: _style.default.bloomingIcon
        }), function () {
          _this.setScale(item.operator);
        }, 100);
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement(Blooming, null), _react.default.createElement("span", null, item.label));
      });
    };

    var _data = props.data;
    _this.state = {
      ath: _data ? _data.ath : defaultData.ath,
      atv: _data ? _data.atv : defaultData.atv,
      rx: _data ? _data.rx : defaultData.rx,
      ry: _data ? _data.ry : defaultData.ry,
      rz: _data ? _data.rz : defaultData.rz,
      scale: _data ? _data.scale : defaultData.scale
    };
    return _this;
  }

  _createClass(FineTuning, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data)) {
        if (this.props.data) {
          var data = this.props.data;
          this.setState({
            ath: data.ath,
            atv: data.atv,
            rx: data.rx,
            ry: data.ry,
            rz: data.rz,
            scale: data.scale
          });
        }
      }
    } //上下左右移动hotspot

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style.default.edit,
        style: {
          display: this.props.visible == true && this.props.embedType != 1 ? 'block' : 'none'
        }
      }, _react.default.createElement("div", {
        className: "".concat(_style.default.fine_tuning_title, " ").concat(_style.default.bg)
      }, "\u7EC6\u8282\u8C03\u6574"), _react.default.createElement("div", {
        className: _style.default.spacing
      }), _react.default.createElement("div", {
        className: "".concat(_style.default.box, " ").concat(_style.default.bg)
      }, _react.default.createElement("div", {
        className: _style.default.boxTitle
      }, "\u5E73 \u79FB"), _react.default.createElement("div", {
        className: _style.default.directionC
      }, this.renderDirection())), _react.default.createElement("div", {
        className: _style.default.spacing
      }), _react.default.createElement("div", {
        className: "".concat(_style.default.box, " ").concat(_style.default.bg)
      }, _react.default.createElement("div", {
        className: _style.default.boxTitle
      }, "\u65CB \u8F6C"), _react.default.createElement("div", {
        className: _style.default.rotateC
      }, _react.default.createElement("ul", null, this.renderRotate(), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })))), _react.default.createElement("div", {
        className: _style.default.spacing
      }), _react.default.createElement("div", {
        className: "".concat(_style.default.box, " ").concat(_style.default.bg)
      }, _react.default.createElement("div", {
        className: _style.default.boxTitle
      }, "\u7F29 \u653E"), _react.default.createElement("div", {
        className: _style.default.bloomingC
      }, _react.default.createElement("ul", null, this.renderBlooming(), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })))), _react.default.createElement("div", {
        className: _style.default.spacing
      }), _react.default.createElement("div", {
        className: "".concat(_style.default.box, " ").concat(_style.default.bg)
      }, _react.default.createElement("div", {
        className: _style.default.boxTitle,
        onClick: function onClick() {
          return _this2.reset();
        }
      }, "\u91CD \u7F6E"))));
    }
  }]);

  return FineTuning;
}(_react.default.Component);

exports.default = FineTuning;