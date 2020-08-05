"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _kr = require("@/utils/kr/");

var _style2 = _interopRequireDefault(require("./style.less"));

var _scene = _interopRequireDefault(require("@/components/Media/scene"));

var _oss = require("@/utils/oss.config");

var _help = require("@/utils/help");

var _AllScene = _interopRequireDefault(require("@/components/AllScene"));

var _yjtecSupport = require("yjtec-support");

var _yjtecPano = require("yjtec-pano");

var _type = _interopRequireDefault(require("./type"));

var _size = _interopRequireDefault(require("./size"));

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

var Effect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Effect, _React$Component);

  function Effect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Effect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Effect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      imageurl: '',
      type: 'custom',
      effect_size: 1,
      ath: 0,
      atv: 0,
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
    };

    _this.handleChange = function (value) {
      if (value == 'custom' || value == 'sunlight') {
        _this.setState({
          imageurl: '',
          type: value
        }, function () {
          return _this.request();
        });
      } else {
        _this.setState({
          imageurl: value,
          type: 'system'
        }, function () {
          return _this.request();
        });
      }
    };

    _this.selectMedia = function (arr) {
      //添加自定义图片时
      _this.setState({
        imageurl: arr[0].path.path
      }, function () {
        _this.request();
      });
    };

    _this.delSkyImg = function () {
      _this.setState({
        imageurl: ''
      }, function () {
        _this.request();
      });
    };

    _this.setEffectSize = function (e) {
      _this.setState({
        effect_size: e.target.value
      }, function () {
        _this.request();
      });
    };

    _this.request = function () {
      //请求
      var _this$state = _this.state,
          imageurl = _this$state.imageurl,
          type = _this$state.type,
          effect_size = _this$state.effect_size,
          ath = _this$state.ath,
          atv = _this$state.atv;

      _this.props.onEdit({
        imageurl: imageurl,
        type: type,
        effect_size: effect_size,
        ath: ath,
        atv: atv
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

    _this.setAllScene = function (data, sceneIds) {
      var onSetAllScene = _this.props.onSetAllScene;
      onSetAllScene(data, sceneIds);
    };

    return _this;
  }

  _createClass(Effect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.effect.data,
          category = _this$props.category,
          scene = _this$props.scene;
      this.setState({
        imageurl: data.imageurl ? data.imageurl : '',
        type: data.type ? data.type : 'custom',
        effect_size: data.effect_size ? data.effect_size : 1,
        ath: data.ath ? data.ath : 0,
        atv: data.atv ? data.atv : 0,
        categoryArr: category,
        scenesArr: scene
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          data = _this$props2.effect.data,
          category = _this$props2.category,
          scene = _this$props2.scene;

      if (!_yjtecSupport.Obj.isEqual(prevState.categoryArr, category) || !_yjtecSupport.Obj.isEqual(prevState.scenesArr, scene)) {
        this.setState(_objectSpread({}, this.state, {
          categoryArr: category,
          scenesArr: scene
        }));
      }

      if (data) {
        if (!_yjtecSupport.Obj.isEqual(prevProps.effect.data, data)) {
          this.setState(_objectSpread({}, this.state, {
            imageurl: data.imageurl ? data.imageurl : '',
            type: data.type ? data.type : 'custom',
            effect_size: data.effect_size ? data.effect_size : 1,
            ath: data.ath ? data.ath : 0,
            atv: data.atv ? data.atv : 0
          }));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          sceneListVisible = _this$state2.sceneListVisible,
          categoryArr = _this$state2.categoryArr,
          scenesArr = _this$state2.scenesArr,
          effect_size = _this$state2.effect_size,
          type = _this$state2.type,
          imageurl = _this$state2.imageurl;
      var _this$props3 = this.props,
          data = _this$props3.effect.data,
          loading = _this$props3.loading,
          scene = _this$props3.scene,
          category = _this$props3.category,
          systemLists = _this$props3.media.systemLists,
          SysFileList = _this$props3.SysFileList;
      var snowAll = SysFileList.map(function (item) {
        return {
          label: item.name,
          'value': item.path.path
        };
      }); //选择框value

      var selectType = '';

      if (type == 'system') {
        selectType = imageurl;
      } else {
        selectType = type;
      }

      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style2.default.title
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, imageurl ? _react.default.createElement("div", {
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, "\u5220\u9664") : ''), _react.default.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u7279\u6548"), _help.helpShow && _react.default.createElement("div", {
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
        className: _style2.default.select
      }, _react.default.createElement(_type.default, {
        value: selectType,
        effectList: snowAll,
        onChange: this.handleChange
      })), type == 'sunlight' ? _react.default.createElement("div", {
        style: {
          padding: '20px 0 10px',
          cursor: 'pointer',
          color: '#108EE9',
          fontSize: '14px'
        },
        onClick: function onClick() {
          return _this2.props.onSetView();
        }
      }, "\u62D6\u52A8\u592A\u9633\u5149\uFF0C\u79FB\u52A8\u4F4D\u7F6E") : _react.default.createElement("div", {
        style: {
          padding: '20px 0'
        }
      }, _react.default.createElement(_size.default, {
        value: effect_size,
        onChange: this.setEffectSize
      })), type == 'custom' && _react.default.createElement("div", {
        style: {
          padding: '0 0 20px'
        }
      }, _react.default.createElement(_yjtecPano.ItemImg, {
        url: data && data.imageurl ? (0, _oss.mediaImgConfig)(data.imageurl, 'img') : '',
        imgSize: "100X100",
        onChange: this.selectMedia,
        onDel: this.delSkyImg
      })), _react.default.createElement("div", {
        className: _style2.default.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style2.default.checkboxC
      }, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return _this2.appliedToScene();
        },
        style: {
          padding: '0 5px',
          height: 'auto',
          background: 'none',
          fontSize: '12px',
          color: '#fff',
          borderColor: '#008aff'
        }
      }, "\u9009\u62E9\u573A\u666F")), "\u5E94\u7528\u5230:")), _react.default.createElement(_AllScene.default, {
        visible: sceneListVisible,
        title: "\u9009\u62E9\u573A\u666F",
        onCancel: this.onCancelAppliedToScene,
        categoryArr: categoryArr,
        scenesArr: scenesArr,
        data: '',
        onOk: this.setAllScene
      }));
    }
  }]);

  return Effect;
}(_react.default.Component);

var _default = Effect;
exports.default = _default;