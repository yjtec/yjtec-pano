"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("./style.less"));

var _url = require("@/utils/url.config");

var _yjtecSupport = require("yjtec-support");

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

var ItemDefault = function ItemDefault(props) {
  var item = props.item,
      _onClick = props.onClick;
  var x = item.x,
      y = item.y;
  return _react.default.createElement("div", {
    onClick: function onClick() {
      return _onClick(item);
    },
    className: _style.default.item,
    style: {
      left: "".concat(x - 7.5, "px"),
      top: "".concat(y - 7.5, "px")
    }
  });
};

var Imground =
/*#__PURE__*/
function (_Component) {
  _inherits(Imground, _Component);

  function Imground(props) {
    var _this;

    _classCallCheck(this, Imground);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Imground).call(this, props));

    _this.handleClick = function (item) {
      console.log(171717);
      var onChange = _this.props.onChange;

      _this.setState({
        activeKey: item.scene_id,
        left: item.x,
        top: item.y,
        heading: item.heading
      }, function () {
        _this.handleChange();
      });
    };

    _this.handleDown = function (e, item) {
      var diffX = e.pageX - item.x;
      var diffY = e.pageY - item.y;

      _this.container.onmousemove = function (ce) {
        var _this$state = _this.state,
            activeKey = _this$state.activeKey,
            list = _this$state.list;
        var moveX = ce.pageX - diffX;
        var moveY = ce.pageY - diffY;
        if (moveX < 0) moveX = 0;
        if (moveX > 400) moveX = 400;
        if (moveY < 0) moveY = 0;
        if (moveY > 400) moveY = 400;
        var re = list.map(function (item) {
          return item.scene_id == activeKey ? _objectSpread({}, item, {
            x: moveX,
            y: moveY
          }) : item;
        });

        _this.setState({
          list: re,
          left: moveX,
          top: moveY
        });
      };

      _this.container.onmouseup = function (ce) {
        _this.handleChange();

        _this.container.onmousemove = null;
      };

      e.preventDefault();
    };

    _this.hanldePoinerDown = function (e, item) {
      var diffX = e.clientX;
      var diffY = e.clientY;

      document.onmousemove = function (em) {
        var _this$state2 = _this.state,
            activeKey = _this$state2.activeKey,
            list = _this$state2.list;
        var moveX = em.clientX - diffX;
        var moveY = em.clientY - diffY;
        var heading = Math.floor(180 / (Math.PI / Math.atan2(moveY, moveX)));

        if (heading < 0) {
          heading = 360 + heading;
        }

        var re = list.map(function (item) {
          return item.scene_id == activeKey ? _objectSpread({}, item, {
            heading: heading
          }) : item;
        });

        _this.setState({
          list: re,
          heading: heading
        });
      };

      document.onmouseup = function (ce) {
        _this.handleChange();

        document.onmousemove = null;
      };

      e.preventDefault();
    };

    _this.handleChange = function () {
      var onChange = _this.props.onChange;
      var _this$state3 = _this.state,
          activeKey = _this$state3.activeKey,
          left = _this$state3.left,
          top = _this$state3.top,
          heading = _this$state3.heading;
      onChange({
        key: activeKey,
        x: left,
        y: top,
        heading: heading
      });
    };

    _this.state = {
      activeKey: 1,
      list: props.list,
      left: 0,
      top: 0,
      heading: 0
    };
    return _this;
  }

  _createClass(Imground, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          list = _this$props.list,
          delSpot = _this$props.delSpot;
      var data = {};

      if (!_yjtecSupport.Obj.isEqual(prevProps.list, list)) {
        if (this.state.activeKey == delSpot) {
          data = {
            activeKey: 1,
            list: list,
            left: 0,
            top: 0,
            heading: 0
          };
        } else {
          data = {
            list: list
          };
        }

        this.setState(_objectSpread({}, data));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state4 = this.state,
          activeKey = _this$state4.activeKey,
          left = _this$state4.left,
          top = _this$state4.top,
          list = _this$state4.list;
      var src = this.props.src;
      return _react.default.createElement("div", {
        className: _style.default.container
      }, _react.default.createElement("div", {
        className: _style.default.map,
        style: {
          backgroundImage: "url(".concat(src, ")")
        },
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, list && list.map(function (item) {
        return _react.default.createElement(_react.default.Fragment, {
          key: item.scene_id
        }, item.scene_id == activeKey ? _react.default.createElement("div", {
          className: _style.default.active,
          style: {
            left: "".concat(item.x - 25, "px"),
            top: "".concat(item.y - 25, "px"),
            transform: "rotate(".concat(item.heading, "deg)")
          }
        }, _react.default.createElement("img", {
          src: _url.KrEditUrl + '/images/round.png',
          width: ""
        }), _react.default.createElement("div", {
          className: _style.default.center,
          onMouseDown: function onMouseDown(e) {
            return _this2.handleDown(e, item);
          },
          ref: function ref(ele) {
            return _this2.dragEle = ele;
          }
        }), _react.default.createElement("div", {
          className: _style.default.pointer,
          onMouseDown: function onMouseDown(e) {
            return _this2.hanldePoinerDown(e, item);
          },
          ref: function ref(ele) {
            return _this2.pointerEle = ele;
          }
        })) : _react.default.createElement(ItemDefault, {
          onClick: _this2.handleClick,
          item: item
        }));
      })));
    }
  }]);

  return Imground;
}(_react.Component);

var _default = Imground;
exports.default = _default;