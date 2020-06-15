"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _dva = require("dva");

var _components = require("@/components/");

var _Form = require("@/components/Form");

var _kr = require("@/utils/kr/");

var _style6 = _interopRequireDefault(require("./style.less"));

var _scene = _interopRequireDefault(require("@/components/Media/scene"));

var _oss = require("@/utils/oss");

var _help = require("@/utils/help");

var _AllScene = _interopRequireDefault(require("@/components/AllScene"));

var _yjtecSupport = require("yjtec-support");

var _UserMedia = _interopRequireDefault(require("@/components/MediaModal/UserMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var Option = _select.default.Option;

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
    _this.state = _defineProperty({
      isShow: false,
      isShowImg: false,
      userMediaVisible: false,
      imgUrl: '',
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
    }, "userMediaVisible", false);

    _this.openMediaModal = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.selectMedia = function (arr) {
      //添加自定义图片时
      _this.request({
        imageurl: arr[0].path.path
      });

      _this.closeMediaModal();
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.delSkyImg = function () {
      _this.request({
        imageurl: ''
      });

      _this.setState({
        isShowImg: false
      });
    };

    _this.request = function (data) {
      //请求
      _this.props.onEdit(data);
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
          _this$props$effect = _this$props.effect,
          data = _this$props$effect.data,
          customUrl = _this$props$effect.customUrl,
          category = _this$props.category,
          scene = _this$props.scene;

      if (data.imageurl) {
        this.setState({
          isShow: true,
          isShowImg: customUrl != ''
        });
      }

      this.setState({
        categoryArr: category,
        scenesArr: scene
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          category = _this$props2.category,
          scene = _this$props2.scene;

      if (!_yjtecSupport.Obj.isEqual(prevState.categoryArr, category) || !_yjtecSupport.Obj.isEqual(prevState.scenesArr, scene)) {
        this.setState(_objectSpread({}, this.state, {
          categoryArr: category,
          scenesArr: scene
        }));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(key, value) {
      var tmp = {};
      tmp[key] = value;

      if (key == 'imageurl') {
        this.setState({
          isShow: true
        });

        if (value == 'custom') {
          this.setState({
            isShowImg: true
          });
          return;
        } else {
          this.setState({
            isShowImg: false
          });
        }
      }

      this.request(tmp);
    } //打开素材库选择窗口

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          isShow = _this$state2.isShow,
          isShowImg = _this$state2.isShowImg,
          imgUrl = _this$state2.imgUrl,
          sceneListVisible = _this$state2.sceneListVisible,
          categoryArr = _this$state2.categoryArr,
          scenesArr = _this$state2.scenesArr,
          userMediaVisible = _this$state2.userMediaVisible;
      var _this$props3 = this.props,
          _this$props3$effect = _this$props3.effect,
          editItem = _this$props3$effect.editItem,
          data = _this$props3$effect.data,
          loading = _this$props3.loading,
          scene = _this$props3.scene,
          category = _this$props3.category,
          systemLists = _this$props3.media.systemLists,
          SysFileList = _this$props3.SysFileList;
      var imageUrl = SysFileList.map(function (item) {
        return {
          label: item.name,
          'value': item.path.path
        };
      });

      var _imageUrl$filter = imageUrl.filter(function (item) {
        return item.value == data.imageurl;
      }),
          _imageUrl$filter2 = _slicedToArray(_imageUrl$filter, 1),
          re = _imageUrl$filter2[0];

      var selectValue = '';
      var customUrl = '';

      if (re) {
        customUrl = '';
        selectValue = re.value;
      } else {
        customUrl = data.imageurl;
        selectValue = 'custom';
      }

      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        className: _style6.default.title
      }, _react.default.createElement("span", {
        className: _style6.default.checkboxC
      }, selectValue ? _react.default.createElement("div", {
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
        className: _style6.default.select
      }, _react.default.createElement(_select.default, {
        value: selectValue,
        name: "imageurl",
        placeholder: "\u8BF7\u9009\u62E9\u7279\u6548",
        style: {
          width: '100%'
        },
        onChange: function onChange(value) {
          return _this2.handleChange('imageurl', value);
        }
      }, imageUrl.map(function (item, index) {
        return _react.default.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }), _react.default.createElement(Option, {
        value: "custom"
      }, "\u81EA\u5B9A\u4E49"))), _react.default.createElement("div", {
        className: _style6.default.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, _react.default.createElement("span", {
        className: _style6.default.checkboxC
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
      }, "\u9009\u62E9\u573A\u666F")), "\u5E94\u7528\u5230:")), (isShowImg || selectValue == 'custom') && _react.default.createElement(_components.ItemBox, null, _react.default.createElement(_row.default, null, _react.default.createElement(_col.default, {
        span: 24,
        className: _style6.default.mb10
      }, customUrl != '' ? _react.default.createElement("div", {
        className: _style6.default.defaultImg
      }, _react.default.createElement("img", {
        alt: "aa",
        src: (0, _oss.ossImgMedia)(customUrl, 'media'),
        className: _style6.default.img
      }), _react.default.createElement("div", {
        className: _style6.default.delimg,
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, _react.default.createElement(_icon.default, {
        type: "delete"
      }))) : _react.default.createElement("div", {
        className: _style6.default.defaultImg
      }, _react.default.createElement("span", null, "\u5EFA\u8BAE\u5927\u5C0F", _react.default.createElement("br", null), "500X500"))), _react.default.createElement(_col.default, {
        span: 12
      }, _react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.openMediaModal
      }, "\u9009\u62E9\u56FE\u7247")), _react.default.createElement(_col.default, {
        span: 12,
        className: _style6.default.prompt
      }, "\u5EFA\u8BAE\u5927\u5C0F", _react.default.createElement("br", null), "500X500"), _react.default.createElement(_UserMedia.default, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: false,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectMedia,
        onCancel: this.closeMediaModal
      }))), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.ItemBox, null, editItem.map(function (item) {
        return _react.default.createElement("div", {
          key: item.key,
          className: _style6.default.list
        }, _react.default.createElement("p", null, item.title), _react.default.createElement(_Form.SliderSingle, _extends({}, item.slider, {
          defaultValue: data[item.key] ? data[item.key] : item.slider.defaultValue,
          onChange: function onChange(value) {
            return _this2.handleChange(item.key, value);
          }
        })));
      }))), _react.default.createElement(_AllScene.default, {
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