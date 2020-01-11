"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _Media = _interopRequireDefault(require("@/components/Media"));

var _PicList = _interopRequireDefault(require("@/components/PicList"));

var _style2 = _interopRequireDefault(require("../style.less"));

var _yjtecSupport = require("yjtec-support");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
        visible: true
      });
    };

    _this.handleChange = function (value) {
      var img = [];

      if (value) {
        img = _this.state.img.concat({
          id: (0, _yjtecSupport.strRandom)(10, {
            letters: false
          }),
          url: value
        });
      }

      _this.setState({
        visible: false,
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

    _this.handleW = function (value) {
      _this.setState({
        width: value
      }, function () {
        _this.runChange();
      });
    };

    _this.handleH = function (value) {
      _this.setState({
        height: value
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
        time: _this.state.time,
        width: _this.state.width,
        height: _this.state.height
      });
    };

    var actionData = props.actionData;
    _this.state = {
      visible: false,
      time: actionData && actionData.time ? actionData.time : 3,
      img: actionData && actionData.img ? actionData.img : [],
      width: actionData && actionData.width ? actionData.width : 100,
      height: actionData && actionData.height ? actionData.height : 100
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
            visible: false,
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
          visible = _this$state2.visible,
          img = _this$state2.img,
          time = _this$state2.time,
          width = _this$state2.width,
          height = _this$state2.height;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style2.default.pictitle
      }, "\u56FE\u7247\u5C55\u793A", _react.default.createElement("p", null, "\u5EFA\u8BAE\u5927\u5C0F400X400"), _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.handleShow();
        },
        className: _style2.default.uploadBtn,
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u56FE\u7247")), _react.default.createElement("div", null, _react.default.createElement(_PicList.default, {
        data: img,
        onChange: this.handlePic,
        onClick: this.delImg
      })))), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        style: {
          marginBottom: '5px'
        }
      }, "\u56FE\u7247\u5BBD\u9AD8"), _react.default.createElement("div", {
        style: {
          marginBottom: '10px'
        }
      }, _react.default.createElement(_Form.InputNumber, {
        inputNumberValue: width,
        max: 1000,
        min: 1,
        name: '宽',
        onChange: function onChange(value) {
          return _this2.handleW(value);
        }
      })), _react.default.createElement("div", null, _react.default.createElement(_Form.InputNumber, {
        inputNumberValue: height,
        max: 1000,
        min: 1,
        name: '高',
        onChange: function onChange(value) {
          return _this2.handleH(value);
        }
      }))), _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _style2.default.timeTitle,
        style: {
          marginTop: '20px'
        }
      }, _react.default.createElement("span", null, "\u4EA4\u4E92\u65F6\u95F4")), _react.default.createElement("div", {
        className: _style2.default.timeInput
      }, _react.default.createElement("div", {
        className: _style2.default.input
      }, _react.default.createElement(_Form.InputNumber, {
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
      })), _react.default.createElement("p", null, "\u79D2\u540E\u81EA\u52A8\u64AD\u653E\u4E0B\u4E00\u5F20"))), _react.default.createElement(_Media.default, {
        title: "\u56FE\u7247",
        mediaType: 1,
        visible: visible,
        onCancel: this.handleChange,
        accept: ".jpg,.png,.jpeg"
      }), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })));
    }
  }]);

  return Pic;
}(_react.default.Component);

exports.default = Pic;