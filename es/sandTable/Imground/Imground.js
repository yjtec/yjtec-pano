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

import React, { Component } from 'react';
import style from './style.less';
import { KrEditUrl } from '@/utils/url.config';
import { Obj } from 'yjtec-support';

var ItemDefault = function ItemDefault(props) {
  var item = props.item,
      _onClick = props.onClick;
  var x = item.x,
      y = item.y;
  return React.createElement("div", {
    onClick: function onClick() {
      return _onClick(item);
    },
    className: style.item,
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
      _this.setState({
        activeKey: item.scene_id,
        left: item.x,
        top: item.y,
        heading: item.heading
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
            list = _this$state2.list; //console.log(ce.clientX,ce.clientY);

        var moveX = em.clientX - diffX;
        var moveY = em.clientY - diffY; //console.log(moveX,moveY ,'x y ');

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
        }); //console.log(ce.offsetX,ce.offsetY);

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
      if (!Obj.isEqual(prevProps.list, this.props.list)) {
        this.setState({
          list: this.props.list
        });
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
      return React.createElement("div", {
        className: style.container
      }, React.createElement("div", {
        className: style.map,
        style: {
          backgroundImage: "url(".concat(src, ")")
        },
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, list && list.map(function (item) {
        return React.createElement(React.Fragment, {
          key: item.scene_id
        }, item.scene_id == activeKey ? React.createElement("div", {
          className: style.active,
          style: {
            left: "".concat(item.x - 25, "px"),
            top: "".concat(item.y - 25, "px"),
            transform: "rotate(".concat(item.heading, "deg)")
          }
        }, React.createElement("img", {
          src: KrEditUrl + '/images/round.png',
          width: ""
        }), React.createElement("div", {
          className: style.center,
          onMouseDown: function onMouseDown(e) {
            return _this2.handleDown(e, item);
          },
          ref: function ref(ele) {
            return _this2.dragEle = ele;
          }
        }), React.createElement("div", {
          className: style.pointer,
          onMouseDown: function onMouseDown(e) {
            return _this2.hanldePoinerDown(e, item);
          },
          ref: function ref(ele) {
            return _this2.pointerEle = ele;
          }
        })) : React.createElement(ItemDefault, {
          onClick: _this2.handleClick,
          item: item
        }));
      })));
    }
  }]);

  return Imground;
}(Component);

export default Imground;