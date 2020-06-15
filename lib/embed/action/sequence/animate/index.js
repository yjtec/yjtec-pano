"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _yjtecPano = require("yjtec-pano");

var _style3 = _interopRequireDefault(require("./style.less"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var inputNumber = [{
  id: 1,
  title: '序列帧总帧数',
  inputNumber: {
    min: 1,
    max: 100,
    inputNumberValue: 1
  },
  unit: '帧'
}, {
  id: 2,
  title: '总播放时长',
  inputNumber: {
    min: 0.1,
    max: 10,
    inputNumberValue: 1
  },
  unit: '秒'
}, {
  id: 3,
  title: '单帧播放时长',
  inputNumber: {
    min: 0.01,
    max: 10,
    inputNumberValue: 1
  },
  unit: '秒'
}, {
  id: 4,
  title: '单帧宽度',
  inputNumber: {
    min: 1,
    max: 400,
    inputNumberValue: 1
  },
  unit: 'PX'
}, {
  id: 5,
  title: '单帧高度',
  inputNumber: {
    min: 1,
    max: 400,
    inputNumberValue: 1
  },
  unit: 'PX'
}];

var TypeAnimate =
/*#__PURE__*/
function (_Component) {
  _inherits(TypeAnimate, _Component);

  function TypeAnimate(props) {
    var _this;

    _classCallCheck(this, TypeAnimate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TypeAnimate).call(this, props));

    _this.selectImg = function (arr) {
      _this.setState({
        url: arr[0].path.path
      }, _this.runChange);
    };

    _this.delImg = function () {
      //删除图片
      _this.setState({
        url: ''
      }, _this.runChange);
    };

    _this.hanldeImg = function (index, value) {
      var playTime = _this.state.playTime;

      if (index == 1) {
        playTime[0] = value;
        playTime[2] = playTime[1] / value;
      }

      if (index == 2) {
        playTime[1] = value;
        playTime[2] = playTime[1] / playTime[0];
      }

      if (index == 3) {
        playTime[1] = value * playTime[0];
        playTime[2] = value;
      }

      if (index == 4) {
        playTime[3] = value;
      }

      if (index == 5) {
        playTime[4] = value;
      }

      _this.setState({
        playTime: playTime
      }, _this.runChange);
    };

    _this.runChange = function (e) {
      var _this$state = _this.state,
          url = _this$state.url,
          playTime = _this$state.playTime;
      var onChange = _this.props.onChange;
      onChange({
        url: url,
        playTime: {
          total: playTime[0],
          time: playTime[1],
          pertime: playTime[2],
          fwidth: playTime[3],
          fheight: playTime[4]
        }
      });
    };

    var _playTime = props.playTime,
        _url = props.url;

    if (_playTime == undefined) {
      _this.state = {
        url: _url ? _url : '',
        playTime: [1, 1, 1, 100, 100]
      };
    } else {
      var total = _playTime.total,
          time = _playTime.time,
          pertime = _playTime.pertime;
      _this.state = {
        url: _url ? _url : '',
        playTime: [total ? total : 1, time ? time : 1, pertime ? pertime : 1, _playTime.fwidth ? _playTime.fwidth : 100, _playTime.fheight ? _playTime.fheight : 100]
      };
    }

    return _this;
  }

  _createClass(TypeAnimate, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          url = _this$state2.url,
          playTime = _this$state2.playTime;
      return _react.default.createElement("div", null, _react.default.createElement(_yjtecPano.ItemImg, {
        url: url,
        imgSize: "200X1200",
        onChange: this.selectImg,
        onDel: this.delImg
      }), _react.default.createElement("div", {
        className: _style3.default.mb20
      }), inputNumber.map(function (item, i) {
        return _react.default.createElement(_row.default, {
          key: item.id,
          className: "".concat(_style3.default.configuration, " ").concat(_style3.default.mb6)
        }, _react.default.createElement(_col.default, {
          span: 14
        }, item.title), _react.default.createElement(_col.default, {
          span: 8
        }, _react.default.createElement(_Form.InputNumber, _extends({}, item.inputNumber, {
          inputNumberValue: playTime[i],
          name: "",
          onChange: function onChange(value) {
            return _this2.hanldeImg(item.id, value);
          }
        }))), _react.default.createElement(_col.default, {
          span: 2,
          style: {
            textAlign: 'center'
          }
        }, item.unit));
      }));
    }
  }]);

  return TypeAnimate;
}(_react.Component);

var _default = TypeAnimate;
exports.default = _default;