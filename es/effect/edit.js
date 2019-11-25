function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
import { ItemBox, Right } from '@/components/';
import { SliderSingle } from '@/components/Form';
import { List, Avatar, Select, Radio, Row, Col, Icon, Checkbox, Button } from 'antd';
import { Kr } from '@/utils/kr/';
import style from './style.less';
import UploadImg from '@/components/Media';
import AllScene from '@/components/Media/scene';
import { ossImgMedia } from '@/utils/oss';
import Modal from '@/components/AllScene';
var Option = Select.Option;

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
      isShow: false,
      isShowImg: false,
      media: false,
      imgUrl: '',
      sceneListVisible: false,
      categoryArr: [],
      scenesArr: []
    };

    _this.media = function () {
      //显示选择图片
      _this.setState({
        media: true
      });
    };

    _this.onCancel = function (value) {
      //添加自定义图片时
      if (value == undefined) {
        _this.setState({
          media: false
        });
      } else {
        _this.request({
          imageurl: value
        });

        _this.setState({
          media: false
        });
      }
    };

    _this.delSkyImg = function () {
      //删除自定义图片
      _this.request({
        imageurl: ''
      });

      _this.setState({
        isShowImg: false
      });
    };

    _this.request = function (tmp) {
      //请求
      var onEdit = _this.props.onEdit;
      onEdit(tmp);
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
      var categoryArr = category.list;
      var scenesArr = scene.all;

      if (data.imageurl) {
        this.setState({
          isShow: true,
          isShowImg: customUrl != ''
        });
      }

      this.setState({
        categoryArr: categoryArr,
        scenesArr: scenesArr
      });
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
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isShow = _this$state.isShow,
          isShowImg = _this$state.isShowImg,
          imgUrl = _this$state.imgUrl,
          sceneListVisible = _this$state.sceneListVisible,
          categoryArr = _this$state.categoryArr,
          scenesArr = _this$state.scenesArr;
      var _this$props2 = this.props,
          _this$props2$effect = _this$props2.effect,
          editItem = _this$props2$effect.editItem,
          data = _this$props2$effect.data,
          loading = _this$props2.loading,
          scene = _this$props2.scene,
          category = _this$props2.category,
          systemLists = _this$props2.media.systemLists,
          SysFileList = _this$props2.SysFileList;
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

      return React.createElement("div", null, React.createElement(ItemBox, null, React.createElement("div", {
        className: style.title
      }, React.createElement("span", {
        className: style.checkboxC
      }, selectValue ? React.createElement("div", {
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, "\u5220\u9664") : ''), "\u7279\u6548"), React.createElement("div", {
        className: style.select
      }, React.createElement(Select, {
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
        return React.createElement(Option, {
          key: index,
          value: item.value
        }, item.label);
      }), React.createElement(Option, {
        value: "custom"
      }, "\u81EA\u5B9A\u4E49"))), React.createElement("div", {
        className: style.title,
        style: {
          margin: '10px 0 0 0',
          lineHeight: '22px'
        }
      }, React.createElement("span", {
        className: style.checkboxC
      }, React.createElement(Button, {
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
      }, "\u9009\u62E9\u573A\u666F")), "\u5E94\u7528\u5230:")), (isShowImg || selectValue == 'custom') && React.createElement(ItemBox, null, React.createElement(Row, null, React.createElement(Col, {
        span: 24,
        className: style.mb10
      }, customUrl != '' ? React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("img", {
        alt: "aa",
        src: ossImgMedia(customUrl, 'media'),
        className: style.img
      }), React.createElement("div", {
        className: style.delimg,
        onClick: function onClick() {
          return _this2.delSkyImg();
        }
      }, React.createElement(Icon, {
        type: "delete"
      }))) : React.createElement("div", {
        className: style.defaultImg
      }, React.createElement("span", null, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500"))), React.createElement(Col, {
        span: 12
      }, React.createElement(Button, {
        type: "primary",
        onClick: this.media
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement(Col, {
        span: 12,
        className: style.prompt
      }, "\u5EFA\u8BAE\u5927\u5C0F", React.createElement("br", null), "500X500"), React.createElement(UploadImg, {
        title: "\u56FE\u7247",
        visible: this.state.media,
        onCancel: this.onCancel,
        mediaType: 1,
        accept: ".jpg,.jpeg,.png"
      }))), React.createElement(React.Fragment, null, React.createElement(ItemBox, null, editItem.map(function (item) {
        return React.createElement("div", {
          key: item.key,
          className: style.list
        }, React.createElement("p", null, item.title), React.createElement(SliderSingle, _extends({}, item.slider, {
          defaultValue: data[item.key] ? data[item.key] : item.slider.defaultValue,
          onChange: function onChange(value) {
            return _this2.handleChange(item.key, value);
          }
        })));
      }))), React.createElement(Modal, {
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