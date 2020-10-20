"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _bmap = require("@yjtec/bmap");

require("./style.less");

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
      point: {},
      coordinateInfo: {},
      inputValue: '',
      localSearchArr: []
    };

    _this.handleInputValue = function (e) {
      _this.setState({
        inputValue: e.target.value
      });
    };

    _this.search = function () {
      _this.ref.getRelationList(_this.state.inputValue);
    };

    _this.handlePoint = function (value) {
      _this.setState({
        coordinateInfo: value,
        point: {
          lng: value.lng,
          lat: value.lat
        },
        inputValue: value.keyword
      });
    };

    _this.onCancel = function () {
      _this.props.onCancel();
    };

    _this.onOk = function () {
      _this.onCancel();

      _this.props.onOk(_this.state.coordinateInfo);
    };

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var point = this.props.point;
      this.setState({
        point: point
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(newProps) {
      if (this.props.point.lng != newProps.point.lng) {
        if (JSON.stringify(this.props.point) != '{}') {
          this.setState({
            point: this.props.point
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var localSearchArr = this.state.localSearchArr;
      var _this$props = this.props,
          visible = _this$props.visible,
          title = _this$props.title;
      return _react.default.createElement(_modal.default, {
        title: title,
        onOk: this.onOk,
        onCancel: this.onCancel,
        visible: visible,
        width: 800,
        className: "selectScene",
        forceRender: true,
        destroyOnClose: true
      }, _react.default.createElement("div", {
        style: {
          marginBottom: '20px'
        }
      }, _react.default.createElement(_input.default, {
        id: "mapSearchInput",
        value: this.state.inputValue,
        onChange: this.handleInputValue,
        style: {
          width: '200px',
          float: 'left'
        }
      }), _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.search();
        },
        style: {
          marginLeft: '10px'
        }
      }, "\u641C\u7D22")), _react.default.createElement("div", null, _react.default.createElement(_bmap.MapSearchField, {
        id: 'mapsearch',
        value: this.props.point //默认坐标
        ,
        isposition: "false",
        searchinput: 'true' //是否有输入框
        ,
        inputid: "mapSearchInput" //绑定input ID
        // getres={this.getRes}                //结果面板信息
        ,
        control: 'true' //是否显示 左上角，添加默认缩放平移控件
        ,
        onChange: this.handlePoint,
        ref: function ref(_ref) {
          return _this2.ref = _ref;
        } //把子组件的方法提到父组件中
        ,
        style: {
          width: '100%',
          minHeight: '400px',
          background: '#f5f5f5'
        }
      })));
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