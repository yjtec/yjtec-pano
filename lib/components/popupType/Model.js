"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _Form = require("@/components/Form");

var _HotspotRings = _interopRequireDefault(require("@/components/Upload/HotspotRings"));

var _components = require("@/components/");

var _utils = require("@/utils/utils");

var _yjtecSupport = require("yjtec-support");

var _ringsStyle = _interopRequireDefault(require("./ringsStyle.less"));

var _oss = require("@/utils/oss.config");

var _MediaModal = _interopRequireDefault(require("@/components/MediaModal"));

var _help = require("@/utils/help");

var _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Model = (_dec = (0, _dva.connect)(function (_ref) {
  var loading = _ref.loading,
      model3d = _ref.model3d;
  return {
    loading: loading,
    model3d: model3d
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Model, _React$Component);

  function Model() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Model);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Model)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: '',
      describe: '',
      jumpUrlTitle: '',
      jumpUrl: '',
      jumpType: 1,
      userMediaVisible: false,
      model_id: '',
      model_thumb: '',
      modelData: ''
    };

    _this.getModel3dInfo = function (id) {
      var dispatch = _this.props.dispatch;
      dispatch({
        type: 'model3d/getInfo',
        payload: {
          id: id
        },
        callback: function callback(res) {
          _this.setState({
            modelData: res
          });
        }
      });
    };

    _this.openMediaModal = function () {
      //选择用户的素材
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.selectModel = function (arr) {
      _this.setState({
        model_id: arr[0].id,
        model_thumb: arr[0].thumb.path
      }, function () {
        _this.runOnChange();

        _this.getModel3dInfo(arr[0].id);
      });

      _this.closeMediaModal();
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.delimg = function () {
      _this.setState({
        model_id: '',
        model_thumb: ''
      }, function () {
        _this.runOnChange();
      });
    };

    _this.editTitle = function (e) {
      _this.setState({
        title: e.target.value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.editDesc = function (e) {
      _this.setState({
        describe: e.target.value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.setJumpType = function (e) {
      _this.setState({
        jumpType: e.target.checked == true ? 1 : 0
      }, function () {
        _this.runOnChange();
      });
    };

    _this.setJumpUrlTitle = function (e) {
      _this.setState({
        jumpUrlTitle: e.target.value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.setJumpUrl = function (e) {
      var value = e.target.value;

      _this.setState({
        jumpUrl: value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.formatJumpUrl = function (e) {
      var value = (0, _utils.formatUrl)(e.target.value);

      _this.setState({
        jumpUrl: value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.runOnChange = function () {
      var _this$state = _this.state,
          title = _this$state.title,
          describe = _this$state.describe,
          jumpUrlTitle = _this$state.jumpUrlTitle,
          jumpUrl = _this$state.jumpUrl,
          jumpType = _this$state.jumpType,
          model_id = _this$state.model_id,
          model_thumb = _this$state.model_thumb;
      var data = {
        title: title,
        describe: describe,
        jumpUrlTitle: jumpUrlTitle,
        jumpUrl: jumpUrl,
        jumpType: jumpType,
        model_id: model_id,
        model_thumb: model_thumb
      };

      _this.props.onChange(data);
    };

    return _this;
  }

  _createClass(Model, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;

      if (data) {
        this.setState(_objectSpread({}, data));
      }

      if (data && data.model_id) {
        this.getModel3dInfo(data.model_id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;

        if (data) {
          this.setState(_objectSpread({}, data));

          if (data.model_id) {
            this.getModel3dInfo(data.model_id);
          }
        }
      }
    } //获取模型数据

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          imgUrl = _this$state2.imgUrl,
          imgType = _this$state2.imgType,
          imgNumber = _this$state2.imgNumber,
          title = _this$state2.title,
          describe = _this$state2.describe,
          jumpType = _this$state2.jumpType,
          jumpUrlTitle = _this$state2.jumpUrlTitle,
          jumpUrl = _this$state2.jumpUrl,
          userMediaVisible = _this$state2.userMediaVisible,
          model_id = _this$state2.model_id,
          model_thumb = _this$state2.model_thumb,
          modelData = _this$state2.modelData;

      var text = _react.default.createElement("div", {
        className: _ringsStyle.default.tips
      }, "\u4E0A\u4F20\u8981\u6C42\uFF1A\u4EC5\u652F\u6301zip\u538B\u7F29\u5305\uFF0C\u538B\u7F29\u5305\u9700\u5C0F\u4E8E30MB;", _react.default.createElement("br", null), "\u6A21\u578B\u683C\u5F0F\uFF1A\u4EC5\u652F\u6301obj\u3001fbx\u6A21\u578B\u683C\u5F0F\uFF0C\u9762\u6570\u63A7\u5236\u572850w\u4EE5\u4E0B;", _react.default.createElement("br", null), "\u8D34\u56FE\u8981\u6C42\uFF1A\u652F\u6301jpg\u3001png\u8D34\u56FE\uFF0C\u6570\u91CF\u5C0F\u4E8E16\u5F20\uFF0C\u8BF7\u5C3D\u91CF\u63A7\u5236\u5206\u8FA8\u7387\u57282048\u4EE5\u4E0B;", _react.default.createElement("br", null), "\u5C01\u9762\u8981\u6C42\uFF1A\u6587\u4EF6\u4E2D\u9700\u5305\u542Bthumb.jpg\u6216thumb.png\u6587\u4EF6\u3002");

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _ringsStyle.default.ringsTitle
      }, _react.default.createElement("div", {
        className: _ringsStyle.default.uploadButton
      }, _react.default.createElement(_Form.Button, {
        type: "primary",
        size: "small",
        title: "\u9009\u62E9\u6A21\u578B",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      })), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u6A21\u578B\u6587\u4EF6"), _help.helpShow && _react.default.createElement(_tooltip.default, {
        placement: "topRight",
        title: text
      }, _react.default.createElement("div", {
        style: {
          width: '16px',
          height: '16px',
          position: 'relative',
          float: 'left',
          margin: '4px 0 0 4px',
          cursor: 'pointer'
        }
      }, _react.default.createElement(_icon.default, {
        type: "question-circle",
        style: {
          fontSize: '16px',
          color: '#999999',
          float: 'left'
        }
      }))), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      })), model_id != '' && _react.default.createElement("div", {
        className: _ringsStyle.default.ringsC,
        style: {
          height: '200px'
        }
      }, _react.default.createElement(_components.Model3dView, {
        data: modelData
      })), _react.default.createElement("div", {
        className: _ringsStyle.default.title,
        style: {
          marginTop: 10
        }
      }, "\u6A21\u578B\u6807\u9898"), _react.default.createElement("div", {
        className: _ringsStyle.default.ringsDesc
      }, _react.default.createElement(_input.default, {
        maxLength: 20,
        value: title,
        placeholder: "\u6A21\u578B\u6807\u9898",
        onChange: this.editTitle,
        style: {
          borderRadius: 3
        }
      })), _react.default.createElement("div", {
        className: _ringsStyle.default.title,
        style: {
          marginTop: 10
        }
      }, "\u63CF\u8FF0\u5185\u5BB9"), _react.default.createElement("div", {
        className: _ringsStyle.default.ringsDesc
      }, _react.default.createElement(_input.default.TextArea, {
        autosize: {
          minRows: 3,
          maxRows: 4
        },
        maxLength: 150,
        value: describe,
        placeholder: "\u63CF\u8FF0\u5185\u5BB9",
        onChange: this.editDesc,
        style: {
          borderRadius: 3
        }
      })), _react.default.createElement("div", {
        className: _ringsStyle.default.title,
        style: {
          marginTop: 10
        }
      }, _react.default.createElement("span", {
        className: _ringsStyle.default.checkboxC
      }, _react.default.createElement(_checkbox.default, {
        checked: jumpType == 1 ? true : false,
        onChange: this.setJumpType,
        className: _ringsStyle.default.checkbox
      }, "\u65B0\u7A97\u53E3\u6253\u5F00")), "\u66F4\u591A\u5185\u5BB9"), _react.default.createElement("div", {
        className: _ringsStyle.default.ringsJumpUrl
      }, _react.default.createElement(_input.default, {
        placeholder: "\u6309\u94AE\u6807\u9898",
        value: jumpUrlTitle,
        onChange: this.setJumpUrlTitle,
        style: {
          marginBottom: '5px'
        }
      }), _react.default.createElement(_input.default, {
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        value: jumpUrl,
        onBlur: this.formatJumpUrl,
        onChange: this.setJumpUrl
      })), _react.default.createElement(_MediaModal.default, {
        title: "3D\u6A21\u578B\u7D20\u6750\u5E93",
        mediaType: 5,
        tabType: 1,
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectModel,
        onCancel: this.closeMediaModal
      }));
    }
  }]);

  return Model;
}(_react.default.Component), _temp)) || _class);
exports.default = Model;