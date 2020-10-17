"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _components = require("@/components/");

var _bmap = require("@yjtec/bmap");

var _bmapModal = _interopRequireDefault(require("./bmapModal"));

var _help = require("@/utils/help");

var _style2 = _interopRequireDefault(require("./style.less"));

var _appliedToScene = _interopRequireDefault(require("./appliedToScene"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      bmapVisible: false,
      lng: '',
      lat: '',
      province: '',
      city: '',
      district: '',
      address: ''
    };

    _this.showBmap = function () {
      _this.setState({
        bmapVisible: true
      });
    };

    _this.cancelBmap = function () {
      _this.setState({
        bmapVisible: false
      });
    };

    _this.handlePoint = function (e) {
      _this.setState({
        lng: e ? e.lng : '',
        lat: e ? e.lat : '',
        province: e ? e.province : '',
        city: e ? e.city : '',
        district: e ? e.district : '',
        address: e ? e.address : ''
      }, function () {
        _this.runChange();
      });
    };

    _this.runChange = function () {
      var _this$state = _this.state,
          lng = _this$state.lng,
          lat = _this$state.lat,
          province = _this$state.province,
          city = _this$state.city,
          district = _this$state.district,
          address = _this$state.address;
      var point = {
        lng: lng,
        lat: lat,
        province: province,
        city: city,
        district: district,
        address: address ? address : ''
      };

      _this.props.onChange(point);

      _this.refBmap.setPoint(point);
    };

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState({
        lng: data && data.lng ? data.lng : '',
        lat: data && data.lat ? data.lat : '',
        province: data && data.province ? data.province : '',
        city: data && data.city ? data.city : '',
        district: data && data.district ? data.district : '',
        address: data && data.address ? data.address : ''
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var data = this.props.data;

      if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
        if (data) {
          this.setState({
            lng: data && data.lng ? data.lng : '',
            lat: data && data.lat ? data.lat : '',
            province: data && data.province ? data.province : '',
            city: data && data.city ? data.city : '',
            district: data && data.district ? data.district : '',
            address: data && data.address ? data.address : ''
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          title = _this$props.title;
      var _this$state2 = this.state,
          bmapVisible = _this$state2.bmapVisible,
          lng = _this$state2.lng,
          lat = _this$state2.lat,
          province = _this$state2.province,
          city = _this$state2.city,
          district = _this$state2.district,
          address = _this$state2.address;
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement("a", {
        onClick: function onClick() {
          return _this2.showBmap();
        }
      }, "\u8BBE\u7F6E\u6807\u6CE8")), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, title), _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, _react.default.createElement(_components.Help, {
        style: {
          fontSize: '14px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), _react.default.createElement("div", {
        className: _style2.default.mapBox
      }, _react.default.createElement("div", null, _react.default.createElement(_bmap.MapSearchField, {
        id: "mapView",
        value: {
          lng: data.lng,
          lat: data.lat
        } //默认坐标
        // searchinput={"false"}             //是否有输入框
        ,
        onChange: this.props.handleCoordinateInfo,
        ref: function ref(_ref) {
          return _this2.refBmap = _ref;
        } //把子组件的方法提到父组件中
        ,
        style: {
          width: '200px',
          height: '200px'
        }
      }), _react.default.createElement("p", {
        style: {
          display: lng && lat ? 'none' : 'block'
        }
      }, "\u5F53\u524D\u9879\u76EE", _react.default.createElement("br", null), "\u6682\u672A\u8BBE\u7F6E\u5730\u56FE\u6807\u6CE8"), _react.default.createElement("span", null), _react.default.createElement("div", {
        className: _style2.default.delLocation,
        style: {
          display: lng && lat ? 'block' : 'none'
        },
        onClick: function onClick() {
          return _this2.handlePoint('');
        }
      }, _react.default.createElement(_icon.default, {
        type: "delete"
      }))))), this.props.applied && _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", null, _react.default.createElement("span", {
        style: {
          float: 'right'
        }
      }, _react.default.createElement(_appliedToScene.default, {
        scenes: this.props.scenes,
        onSetAll: this.props.onSetAll
      })), "\u5E94\u7528\u5230\uFF1A")), _react.default.createElement(_bmapModal.default, {
        visible: bmapVisible,
        point: {
          lng: lng,
          lat: lat
        },
        title: "\u5730\u56FE\u6807\u6CE8",
        onCancel: this.cancelBmap,
        onOk: this.handlePoint
      }));
    }
  }]);

  return Index;
}(_react.Component);

var _default = function _default(props) {
  return _react.default.createElement(_bmap.AsyncLoadMap, {
    renderLoading: _react.default.createElement("div", null, "\u52A0\u8F7D\u4E2D&&&")
  }, _react.default.createElement(Index, props));
};

exports.default = _default;