"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireWildcard(require("react"));

var _dva = require("dva");

var _components = require("@/components/");

var _action = require("../action");

var _action2 = _interopRequireDefault(require("./action"));

var _fineTuning = _interopRequireDefault(require("../fineTuning"));

var _style4 = _interopRequireDefault(require("./style.less"));

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

var EmbedAdd =
/*#__PURE__*/
function (_Component) {
  _inherits(EmbedAdd, _Component);

  function EmbedAdd() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmbedAdd);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmbedAdd)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleCancel = function () {
      _this.props.onCancel();
    };

    _this.handleEmbedType = function (e) {
      _this.props.onSetType(e);
    };

    _this.receiveData = function (data) {
      _this.props.onChange(data);
    };

    _this.editFineTuning = function (data) {
      console.log(data);

      _this.props.onLocation(data);
    };

    _this.handleSave = function () {
      _this.props.onSave();
    };

    _this.handleDelete = function () {
      _this.props.onDel();
    };

    return _this;
  }

  _createClass(EmbedAdd, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          embedTypeData = _this$props.embedTypeData,
          _this$props$embedType = _this$props.embedType,
          embedType = _this$props$embedType === void 0 ? 1 : _this$props$embedType,
          data = _this$props.data,
          isVip = _this$props.isVip;
      return _react.default.createElement("div", {
        className: _style4.default.module
      }, _react.default.createElement(_components.Drawer, {
        visible: this.props.visible,
        destroyOnClose: false,
        title: "\u5D4C\u5165",
        onCancel: this.handleCancel
      }, _react.default.createElement(_components.ItemBox, null, _react.default.createElement(_action.EmbedType, {
        embedTypeData: embedTypeData,
        embedType: embedType,
        onChange: this.handleEmbedType
      })), _react.default.createElement(_action2.default, {
        embedType: embedType,
        isVip: isVip,
        data: data,
        onChange: this.receiveData
      }), _react.default.createElement(_components.ItemBox, null, _react.default.createElement(_row.default, {
        style: {
          margin: '0 -5px'
        }
      }, _react.default.createElement(_col.default, {
        span: 12,
        style: {
          padding: '0 5px'
        }
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.handleSave,
        style: {
          width: '100%'
        }
      }, "\u4FDD\u5B58")), _react.default.createElement(_col.default, {
        span: 12,
        className: _style4.default.panoList,
        style: {
          padding: '0 5px'
        }
      }, _react.default.createElement(_button.default, {
        type: "danger",
        onClick: this.handleDelete,
        style: {
          width: '100%'
        }
      }, "\u5220\u9664"))))), _react.default.createElement(_fineTuning.default, {
        visible: this.props.visible,
        data: data.locationData,
        embedType: embedType,
        onChange: this.editFineTuning
      }));
    }
  }]);

  return EmbedAdd;
}(_react.Component);

var _default = (0, _dva.connect)(function (_ref) {
  var loading = _ref.loading;
  return {
    loading: loading
  };
})(EmbedAdd);

exports.default = _default;