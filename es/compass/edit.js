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
import { Drawer, ItemBox } from '@/components/'; // import {Button} from '@/components/Form';

import styles from './style.less';
import ring from '../assets/images/compass_ring.png';
import plate from '../assets/images/compass_plate.png';
import pointer from '../assets/images/compass_pointer.png';
import { mediaImgConfig } from '@/utils/oss.config';
import ItemImg from '../components/ItemImg';
import Modal from '@/components/ApplyToScene';
import { helpShow } from '@/utils/help';

var CompassEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CompassEdit, _React$Component);

  function CompassEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CompassEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CompassEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      angle: 0,
      currentAngle: 0,
      sceneListVisible: false
    };

    _this.scrollFunc = function () {
      var krpano = _this.props.krpano;
      var currentAngle = Number(krpano.get('view.hlookat'));
      var newAngle = 0;

      if (-360 <= currentAngle && currentAngle <= 360) {
        if (currentAngle >= 0) {
          newAngle = currentAngle;
        } else {
          newAngle = 360 + currentAngle;
        }
      } else if (currentAngle > 360) {
        newAngle = parseInt(currentAngle % 360);
      } else {
        newAngle = 360 + parseInt(currentAngle % 360);
      }

      _this.setState({
        currentAngle: parseInt(newAngle)
      });
    };

    _this.appliedToScene = function () {
      _this.setState({
        sceneListVisible: true
      });
    };

    _this.onCancelAppliedToScene = function () {
      _this.setState({
        sceneListVisible: false
      });
    };

    _this.save = function () {
      _this.setState({
        angle: _this.state.currentAngle
      }, function () {
        return _this.props.onSave({
          angle: _this.state.currentAngle
        });
      });
    };

    _this.setAllScene = function (data, sceneIds) {
      _this.props.apply(data, sceneIds);
    };

    return _this;
  }

  _createClass(CompassEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          krpano = _this$props.krpano;
      this.setState({
        angle: data && data.angle ? data.angle : 0
      });
      krpano.set('events.onviewchanged', function () {
        _this2.scrollFunc();
      });
      this.scrollFunc();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          krpano = _this$props2.krpano;

      if (JSON.stringify(data) != JSON.stringify(prevProps.data)) {
        if (data) {
          this.setState({
            angle: data.angle ? data.angle : 0
          });
        }
      }

      krpano.set('events.onviewchanged', function () {
        _this3.scrollFunc();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          angle = _this$state.angle,
          currentAngle = _this$state.currentAngle,
          sceneListVisible = _this$state.sceneListVisible;
      var _this$props3 = this.props,
          visible = _this$props3.visible,
          categoryArr = _this$props3.categoryArr,
          scenesArr = _this$props3.scenesArr;
      var helpShow = false;
      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title,
        style: {
          margin: '10px 0 10px 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Button, {
        onClick: function onClick() {
          return _this4.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px',
          color: '#fff',
          borderColor: '#008aff'
        }
      }, "\u5E94\u7528\u5230")), React.createElement("span", {
        style: {
          float: 'left',
          lineHeight: '22px'
        }
      }, "\u6307\u5357\u9488"), helpShow && React.createElement("div", {
        style: {
          float: 'left',
          width: '20px',
          height: '20px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        link: 'compass',
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: styles.compassEdit
      }, React.createElement("div", {
        className: styles.tips
      }, React.createElement("p", null, React.createElement("span", null, "\u6B63\u5317\u89D2\u5EA6\u504F\u79FB\u91CF\uFF08\u5EA6\uFF09\uFF1A ", parseInt(currentAngle)), "\u6CE8\uFF1A\u8BF7\u65CB\u8F6C\u573A\u666F\u89C6\u89D2\u5230\u6B63\u5317\u89D2\u5EA6\uFF0C\u4EE5\u83B7\u5F97\u5F53\u524D\u573A\u666F\u7684\u6B63\u5317\u89D2\u5EA6\u504F\u79FB\u91CF")))), React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.compass
      }, React.createElement("img", {
        src: ring,
        alt: "plate",
        className: styles.ring
      }), React.createElement("img", {
        src: plate,
        alt: "plate",
        className: styles.plate
      }), React.createElement("img", {
        src: pointer,
        alt: "pointer",
        className: styles.pointer,
        style: {
          transform: 'translate(-50%, -50%)' + 'rotate(' + (currentAngle - angle) + 'deg)'
        }
      }))), React.createElement(ItemBox, null, React.createElement(_Button, {
        type: "primary",
        onClick: function onClick() {
          return _this4.save();
        },
        style: {
          margin: '10px 0 0 0',
          width: '100%'
        }
      }, "\u5E94\u7528\u5F53\u524D\u89D2\u5EA6\u4E3A\u6B63\u5317\u65B9\u5411"), React.createElement("div", {
        className: styles.tips
      }, React.createElement("p", null, "\u6CE8\uFF1A\u7F16\u8F91\u540E\u5C06\u81EA\u52A8\u5F00\u59CB\u6307\u5357\u9488\u529F\u80FD\uFF0C\u5982\u9700\u5173\u95ED\u8BF7\u524D\u5F80\u300A\u57FA\u7840\u8BBE\u7F6E\u300B"))), React.createElement(Modal, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: {
          angle: angle
        },
        onOk: this.setAllScene
      }));
    }
  }]);

  return CompassEdit;
}(React.Component);

export { CompassEdit as default };