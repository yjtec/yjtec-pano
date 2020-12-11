import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/message/style";
import _message from "antd/es/message";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import React from "react";
import { Button } from "@/components/Form";
import HotspotRings from "@/components/Upload/HotspotRings";
import { getImgWH } from "@/utils/utils";
import { Obj } from "yjtec-support";
import styles from "./ringsStyle.less";
import { v4 as uuidv4 } from "uuid";
import { mediaImgConfig } from "@/utils/oss.config";
import { formatUrl } from "@/utils/utils";
var uploadData = {
  type: 1,
  apply_type: 2,
  classify_id: "",
  category: ""
};

var Rings =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Rings, _React$Component);

  function Rings() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Rings);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Rings)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      imgType: "",
      imgNumber: 0,
      imgUrl: "",
      describe: "左右拖动图片, 观看不同角度",
      jumpUrlTitle: "",
      jumpUrl: "",
      jumpType: 1,
      visible: false,
      uploadErr: [],
      uploadLength: ""
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

    _this.uploadModalShow = function () {
      _this.setState({
        visible: true,
        uuid: uuidv4()
      });
    };

    _this.modalOk = function () {
      _this.setState({
        visible: false,
        uploadErr: []
      }, function () {
        _this.runOnChange();
      });
    };

    _this.modalHide = function () {
      _this.setState({
        visible: false,
        uploadErr: []
      });
    };

    _this.getFileLength = function (e) {
      _this.setState({
        imgNumber: e.length,
        imgType: "",
        imgUrl: "",
        fileData: ""
      });
    };

    _this.getFileList = function (e) {
      _this.setState({
        fileData: []
      }, function () {
        var fileData = [];
        e.fileList.map(function (item) {
          var index = item.name.indexOf(".");
          fileData.push({
            uid: item.uid,
            name: item.name.substring(0, index),
            percent: item.percent,
            img: item.response ? item.response.data[0].path : ""
          });
        });

        _this.setState({
          fileData: fileData
        });
      });
    };

    _this.splicingUrl = function (percent, img) {
      if (percent == 100 && img) {
        return mediaImgConfig(img, "img");
      }
    };

    _this.uploadSuccess = function (e) {
      var path = e.response.data[0];
      var lastIndex = path.path.lastIndexOf("/");
      var imgUrl = path.path.substring(0, lastIndex + 1);
      var imgTitle = path.path.substring(lastIndex + 1, lastIndex + 3);

      if (imgTitle == "1.") {
        if (imgUrl != _this.state.imgUrl) {
          _this.setState({
            imgUrl: imgUrl,
            imgType: path.ext
          });
        }
      }
    };

    _this.delimg = function () {
      _this.setState({
        imgType: "",
        imgNumber: 0,
        imgUrl: ""
      }, function () {
        _this.runOnChange();
      });
    };

    _this.runOnChange = function () {
      var _this$state = _this.state,
          imgType = _this$state.imgType,
          imgNumber = _this$state.imgNumber,
          imgUrl = _this$state.imgUrl,
          describe = _this$state.describe,
          jumpUrlTitle = _this$state.jumpUrlTitle,
          jumpUrl = _this$state.jumpUrl,
          jumpType = _this$state.jumpType,
          uuid = _this$state.uuid;
      var data = {
        imgType: imgType,
        imgNumber: imgNumber,
        imgUrl: imgUrl,
        describe: describe,
        jumpUrlTitle: jumpUrlTitle,
        jumpUrl: jumpUrl,
        jumpType: jumpType,
        uuid: uuid
      };

      _this.props.onChange(data);
    };

    _this.uploadErr = function (e, length) {
      var uploadErr = _this.state.uploadErr;
      uploadErr.push(e);

      _this.setState({
        uploadErr: uploadErr,
        uploadLength: length
      }, function () {
        if (uploadErr.length == length) {
          _this.setState({
            uploadErr: [],
            uploadLength: ""
          });
        }
      });
    };

    return _this;
  }

  _createClass(Rings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      var fileData = [];

      if (data) {
        for (var i = 1; i <= data.imgNumber; i++) {
          var itemList = {};
          itemList.uid = i;
          itemList.img = data.imgUrl + i + "." + data.imgType;
          itemList.name = i;
          itemList.percent = 100;
          fileData.push(itemList);
        }
      }

      this.setState(_objectSpread({}, data, {
        fileData: fileData
      }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!Obj.isEqual(prevProps.data, this.props.data)) {
        var data = this.props.data;
        var fileData = [];

        if (data) {
          for (var i = 1; i <= data.imgNumber; i++) {
            var itemList = {};
            itemList.uid = i;
            itemList.img = data.imgUrl + i + "." + data.imgType;
            itemList.name = i;
            itemList.percent = 100;
            fileData.push(itemList);
          }
        }

        this.setState(_objectSpread({}, this.props.data, {
          fileData: fileData
        }));
      } //上传不合要求错误提醒


      if (this.state.uploadErr.length != 0) {
        if (this.state.uploadErr.length === this.state.uploadLength) {
          _message.error(this.state.uploadErr[0]);
        } else {}
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          imgUrl = _this$state2.imgUrl,
          imgType = _this$state2.imgType,
          imgNumber = _this$state2.imgNumber,
          describe = _this$state2.describe,
          jumpType = _this$state2.jumpType,
          jumpUrlTitle = _this$state2.jumpUrlTitle,
          jumpUrl = _this$state2.jumpUrl,
          fileData = _this$state2.fileData;
      var isImg = 1;
      var tips = React.createElement("div", {
        className: styles.tips
      }, "\u6BCF\u5F20\u56FE\u7247\u4E0D\u8D85\u8FC7800kB", React.createElement("br", null), "\u4F7F\u7528\u4ECE1\u5F00\u59CB\u7684\u8FDE\u7EED\u6570\u5B57\u547D\u540D, \u6700\u591A\u652F\u6301\u4E0A\u4F2072\u5F20, \u5982: 1.jpg, 2.jpg, ...72.jpg");
      var ringImgC = React.createElement("div", {
        className: styles.ringImgC
      }, React.createElement("div", {
        className: styles.delimg,
        onClick: function onClick() {
          return _this2.delimg();
        }
      }, React.createElement(_Icon, {
        type: "delete"
      })), React.createElement("div", {
        className: styles.ringsImg,
        style: {
          backgroundImage: "url(" + mediaImgConfig(imgUrl + "1." + imgType, "img") + ")"
        }
      }), React.createElement("div", {
        className: styles.frameNum
      }, imgNumber, "\u5E27"));
      var noImg = React.createElement("div", {
        className: styles.imgList
      }, React.createElement("p", null, "\u6BCF\u5F20\u56FE\u7247\u4E0D\u8D85\u8FC7800kB", React.createElement("br", null), "\u4F7F\u7528\u4ECE1\u5F00\u59CB\u7684\u8FDE\u7EED\u6570\u5B57\u547D\u540D, \u6700\u591A\u652F\u6301\u4E0A\u4F2072\u5F20, \u5982: 1.jpg, 2.jpg, ...72.jpg"));
      var imgList = React.createElement("div", {
        className: styles.imgList,
        style: {
          height: "450px"
        }
      }, fileData && fileData.map(function (item) {
        return React.createElement("div", {
          key: item.uid,
          className: styles.imgUrl
        }, item.img == "" ? React.createElement("span", null, item.percent, "%", React.createElement("br", null), "\u4E0A\u4F20\u4E2D...") : React.createElement("img", {
          src: _this2.splicingUrl(item.percent, item.img)
        }), React.createElement("div", {
          className: styles.imgTitle
        }, item.name));
      }));
      return React.createElement("div", null, React.createElement("div", {
        className: styles.ringsTitle
      }, React.createElement("div", {
        className: styles.uploadButton
      }, React.createElement(Button, {
        type: "primary",
        size: "small",
        title: "\u4E0A\u4F20\u73AF\u7269",
        onClick: function onClick() {
          return _this2.uploadModalShow();
        }
      })), React.createElement("span", null, "\u73AF\u7269\u56FE\u7247")), React.createElement("div", {
        className: styles.ringsC
      }, imgNumber == 0 ? tips : ringImgC), React.createElement("div", {
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
          marginBottom: "5px"
        }
      }), React.createElement(_Input, {
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        value: jumpUrl,
        onBlur: this.formatJumpUrl,
        onChange: this.setJumpUrl
      })), React.createElement(_Modal, {
        title: "\u73AF\u7269\u56FE\u7247",
        visible: this.state.visible,
        width: 800,
        forceRender: true,
        maskClosable: false,
        onOk: this.modalOk,
        onCancel: this.modalHide,
        footer: null
      }, React.createElement("div", {
        className: styles.uploadBtnStyle
      }, React.createElement(HotspotRings, _extends({
        path: "avatar"
      }, uploadData, {
        uuid: this.state.uuid,
        multiple: true,
        title: "\u4E0A\u4F20",
        type: "1",
        apply_type: "2",
        className: styles.uploadButton,
        accept: ".jpg,.png",
        onBeforeUpload: this.getFileLength,
        errBeforeUpload: this.uploadErr,
        onChange: this.getFileList,
        onSuccess: this.uploadSuccess
      }))), React.createElement("div", {
        className: styles.onOk
      }, React.createElement(Button, {
        key: "submit",
        type: "primary",
        title: "\u5B8C\u6210",
        onClick: function onClick() {
          return _this2.modalOk();
        },
        style: {
          float: "right"
        }
      })), React.createElement("div", {
        style: {
          clear: "both"
        }
      }), imgNumber > 0 ? imgList : noImg));
    }
  }]);

  return Rings;
}(React.Component);

export { Rings as default };