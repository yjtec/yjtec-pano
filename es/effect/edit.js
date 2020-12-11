import "antd/es/button/style";
import _Button from "antd/es/button";

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

import React from 'react';
import { connect } from 'dva';
import { ItemBox, Right, Help } from '@/components/';
import { SliderSingle } from '@/components/Form';
import { Kr } from '@/utils/kr/';
import styles from './style.less';
import { mediaImgConfig } from '@/utils/oss.config';
import { helpShow } from '@/utils/help';
import Modal from '@/components/ApplyToScene';
import { Obj } from 'yjtec-support';
import { ItemImg } from 'yjtec-pano';
import Type from './type';
import Size from './size';

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
        imageurl: '',
        type: 'custom',
        effect_size: 1,
        ath: 0,
        atv: 0
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

      if (!Obj.isEqual(prevState.categoryArr, category) || !Obj.isEqual(prevState.scenesArr, scene)) {
        this.setState(_objectSpread({}, this.state, {
          categoryArr: category,
          scenesArr: scene
        }));
      }

      if (data) {
        if (!Obj.isEqual(prevProps.effect.data, data)) {
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

      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: styles.title
      }, React.createElement("span", {
        className: styles.checkboxC
      }, imageurl || type == 'sunlight' ? React.createElement("div", {
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, "\u5220\u9664") : ''), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u7279\u6548"), helpShow && React.createElement("div", {
        style: {
          float: 'left',
          width: '18px',
          height: '18px',
          position: 'relative',
          marginLeft: '5px'
        }
      }, React.createElement(Help, {
        link: 'effect',
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
        className: styles.select
      }, React.createElement(Type, {
        value: selectType,
        effectList: snowAll,
        onChange: this.handleChange
      })), type == 'sunlight' ? React.createElement("div", {
        style: {
          padding: '20px 0 10px',
          cursor: 'pointer',
          color: '#108EE9',
          fontSize: '14px'
        },
        onClick: function onClick() {
          return _this2.props.onSetView();
        }
      }, "\u62D6\u52A8\u592A\u9633\u5149\uFF0C\u79FB\u52A8\u4F4D\u7F6E") : React.createElement("div", {
        style: {
          padding: '20px 0'
        }
      }, React.createElement(Size, {
        value: effect_size,
        onChange: this.setEffectSize
      })), type == 'custom' && React.createElement("div", {
        style: {
          padding: '0 0 20px'
        }
      }, React.createElement(ItemImg, {
        url: data && data.imageurl ? mediaImgConfig(data.imageurl, 'img') : '',
        imgSize: "100X100",
        onChange: this.selectMedia,
        onDel: this.delSkyImg
      })), React.createElement("div", {
        className: styles.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Button, {
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
      }, "\u9009\u62E9\u573A\u666F")), "\u5E94\u7528\u5230:")), React.createElement(Modal, {
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
}(React.Component);

export default Effect;