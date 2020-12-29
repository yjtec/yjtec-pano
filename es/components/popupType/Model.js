import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";

var _dec, _class, _temp;

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
import { Button } from '@/components/Form';
import HotspotRings from '@/components/Upload/HotspotRings';
import { Model3dView, Help } from '@/components/';
import { getImgWH } from '@/utils/utils';
import { Obj } from 'yjtec-support';
import styles from './ringsStyle.less';
import { formatUrl } from '@/utils/utils';
import { mediaImgConfig } from '@/utils/oss.config';
import Media from '@/components/MediaModal';
import { helpShow } from '@/utils/help';
var Model = (_dec = connect(function (_ref) {
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
      var value = formatUrl(e.target.value);

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
      if (!Obj.isEqual(prevProps.data, this.props.data)) {
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
      var text = React.createElement("div", {
        className: styles.tips
      }, "\u4E0A\u4F20\u8981\u6C42\uFF1A\u4EC5\u652F\u6301zip\u538B\u7F29\u5305\uFF0C\u538B\u7F29\u5305\u9700\u5C0F\u4E8E30MB;", React.createElement("br", null), "\u6A21\u578B\u683C\u5F0F\uFF1A\u4EC5\u652F\u6301obj\u3001fbx\u6A21\u578B\u683C\u5F0F\uFF0C\u9762\u6570\u63A7\u5236\u572850w\u4EE5\u4E0B;", React.createElement("br", null), "\u8D34\u56FE\u8981\u6C42\uFF1A\u652F\u6301jpg\u3001png\u8D34\u56FE\uFF0C\u6570\u91CF\u5C0F\u4E8E16\u5F20\uFF0C\u8BF7\u5C3D\u91CF\u63A7\u5236\u5206\u8FA8\u7387\u57282048\u4EE5\u4E0B;", React.createElement("br", null), "\u5C01\u9762\u8981\u6C42\uFF1A\u6587\u4EF6\u4E2D\u9700\u5305\u542Bthumb.jpg\u6216thumb.png\u6587\u4EF6\u3002");
      return React.createElement("div", null, React.createElement("div", {
        className: styles.ringsTitle
      }, React.createElement("div", {
        className: styles.uploadButton
      }, React.createElement(Button, {
        type: "primary",
        size: "small",
        title: "\u9009\u62E9\u6A21\u578B",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      })), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u6A21\u578B\u6587\u4EF6"), helpShow && React.createElement(_Tooltip, {
        placement: "topRight",
        title: text
      }, React.createElement("div", {
        style: {
          width: '16px',
          height: '16px',
          position: 'relative',
          float: 'left',
          margin: '4px 0 0 4px',
          cursor: 'pointer'
        }
      }, React.createElement(_Icon, {
        type: "question-circle",
        style: {
          fontSize: '16px',
          color: '#999999',
          float: 'left'
        }
      }))), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), model_id != '' && React.createElement("div", {
        className: styles.ringsC,
        style: {
          height: '200px'
        }
      }, React.createElement(Model3dView, {
        data: modelData
      })), React.createElement("div", {
        className: styles.title,
        style: {
          marginTop: 10
        }
      }, "\u6A21\u578B\u6807\u9898"), React.createElement("div", {
        className: styles.ringsDesc
      }, React.createElement(_Input, {
        maxLength: 20,
        value: title,
        placeholder: "\u6A21\u578B\u6807\u9898",
        onChange: this.editTitle,
        style: {
          borderRadius: 3
        }
      })), React.createElement("div", {
        className: styles.title,
        style: {
          marginTop: 10
        }
      }, "\u63CF\u8FF0\u5185\u5BB9"), React.createElement("div", {
        className: styles.ringsDesc
      }, React.createElement(_Input.TextArea, {
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
      })), React.createElement("div", {
        className: styles.title,
        style: {
          marginTop: 10
        }
      }, React.createElement("span", {
        className: styles.checkboxC
      }, React.createElement(_Checkbox, {
        checked: jumpType == 1 ? true : false,
        onChange: this.setJumpType,
        className: styles.checkbox
      }, "\u65B0\u7A97\u53E3\u6253\u5F00")), "\u66F4\u591A\u5185\u5BB9"), React.createElement("div", {
        className: styles.ringsJumpUrl
      }, React.createElement(_Input, {
        placeholder: "\u6309\u94AE\u6807\u9898",
        value: jumpUrlTitle,
        onChange: this.setJumpUrlTitle,
        style: {
          marginBottom: '5px'
        }
      }), React.createElement(_Input, {
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        value: jumpUrl,
        onBlur: this.formatJumpUrl,
        onChange: this.setJumpUrl
      })), React.createElement(Media, {
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
}(React.Component), _temp)) || _class);
export { Model as default };