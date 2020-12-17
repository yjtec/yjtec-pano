import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/skeleton/style";
import _Skeleton from "antd/es/skeleton";

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
import { Obj } from 'yjtec-support';
import styles from './richText.less';
import { formatUrl } from '@/utils/utils';
import { mediaImgConfig } from '@/utils/oss.config';
import { v4 as uuidv4 } from "uuid";
import VipAuthority from "@/components/VipAuthority";
import { Editor } from 'yjtec-pano';
var RichText = (_dec = connect(function (_ref) {
  var global = _ref.global;
  return {
    global: global
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RichText, _React$Component);

  function RichText() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RichText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RichText)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      title: '',
      describe: '',
      jumpUrlTitle: '',
      jumpUrl: '',
      jumpType: 1,
      editorVisible: false,
      htmlContent: '',
      richTextId: '',
      uuid: ''
    };

    _this.openMediaModal = function () {
      //选择用户的素材
      _this.setState({
        editorVisible: true
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        editorVisible: false
      });
    };

    _this.setHtmlContent = function (data) {
      _this.setState({
        htmlContent: data
      }, function () {
        _this.closeMediaModal();

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
          htmlContent = _this$state.htmlContent,
          richTextId = _this$state.richTextId,
          uuid = _this$state.uuid;
      var data = {
        title: title,
        describe: describe,
        jumpUrlTitle: jumpUrlTitle,
        jumpUrl: jumpUrl,
        jumpType: jumpType,
        htmlContent: htmlContent,
        richTextId: richTextId,
        uuid: uuid
      };

      _this.props.onChange(data);
    };

    return _this;
  }

  _createClass(RichText, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      this.setState(_objectSpread({}, data, {
        richTextId: data && data.richTextId ? data.richTextId : '',
        uuid: data && data.uuid ? data.uuid : uuidv4()
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;

        if (data) {
          this.setState(_objectSpread({}, data, {
            richTextId: data && data.richTextId ? data.richTextId : '',
            uuid: data && data.uuid ? data.uuid : uuidv4()
          }));
        }
      }
    } //打开文章编辑框

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
          editorVisible = _this$state2.editorVisible,
          htmlContent = _this$state2.htmlContent;
      var isVip = this.props.global.data.info.is_vip;
      return React.createElement("div", null, isVip == 0 ? React.createElement(VipAuthority, null) : React.createElement("div", null, React.createElement("div", {
        className: styles.title
      }, React.createElement("div", {
        className: styles.uploadButton
      }, React.createElement(Button, {
        type: "primary",
        size: "small",
        title: "\u7F16\u8F91\u6587\u7AE0",
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      })), React.createElement("span", {
        style: {
          float: 'left'
        }
      }, "\u6587\u7AE0\u5185\u5BB9"), React.createElement("div", {
        style: {
          clear: 'both'
        }
      })), React.createElement("div", {
        className: styles.desc,
        onClick: function onClick() {
          return _this2.openMediaModal();
        }
      }, htmlContent != '<p></p>' && htmlContent != '' ? React.createElement(_Skeleton, {
        active: "true"
      }) : React.createElement("span", null, "\u6682\u65E0\u5185\u5BB9")), React.createElement("div", {
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
        className: styles.jumpUrl
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
      })), React.createElement(Editor, {
        visible: editorVisible,
        data: htmlContent,
        onChange: this.setHtmlContent,
        onClose: this.closeMediaModal
      })));
    }
  }]);

  return RichText;
}(React.Component), _temp)) || _class);
export { RichText as default };