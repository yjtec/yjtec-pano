"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireDefault(require("react"));

var _Form = require("@/components/Form");

var _HotspotRings = _interopRequireDefault(require("@/components/Upload/HotspotRings"));

var _utils = require("@/utils/utils");

var _yjtecSupport = require("yjtec-support");

var _ringsStyle = _interopRequireDefault(require("./ringsStyle.less"));

var _uuid = require("uuid");

var _oss = require("@/utils/oss.config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var value = (0, _utils.formatUrl)(e.target.value);

      _this.setState({
        jumpUrl: value
      }, function () {
        _this.runOnChange();
      });
    };

    _this.uploadModalShow = function () {
      _this.setState({
        visible: true,
        uuid: (0, _uuid.v4)()
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
        return (0, _oss.mediaImgConfig)(img, "img");
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
      if (!_yjtecSupport.Obj.isEqual(prevProps.data, this.props.data)) {
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
          _message2.default.error(this.state.uploadErr[0]);
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

      var tips = _react.default.createElement("div", {
        className: _ringsStyle.default.tips
      }, "\u6BCF\u5F20\u56FE\u7247\u4E0D\u8D85\u8FC7800kB", _react.default.createElement("br", null), "\u4F7F\u7528\u4ECE1\u5F00\u59CB\u7684\u8FDE\u7EED\u6570\u5B57\u547D\u540D, \u6700\u591A\u652F\u6301\u4E0A\u4F2072\u5F20, \u5982: 1.jpg, 2.jpg, ...72.jpg");

      var ringImgC = _react.default.createElement("div", {
        className: _ringsStyle.default.ringImgC
      }, _react.default.createElement("div", {
        className: _ringsStyle.default.delimg,
        onClick: function onClick() {
          return _this2.delimg();
        }
      }, _react.default.createElement(_icon.default, {
        type: "delete"
      })), _react.default.createElement("div", {
        className: _ringsStyle.default.ringsImg,
        style: {
          backgroundImage: "url(" + (0, _oss.mediaImgConfig)(imgUrl + "1." + imgType, "img") + ")"
        }
      }), _react.default.createElement("div", {
        className: _ringsStyle.default.frameNum
      }, imgNumber, "\u5E27"));

      var noImg = _react.default.createElement("div", {
        className: _ringsStyle.default.imgList
      }, _react.default.createElement("p", null, "\u6BCF\u5F20\u56FE\u7247\u4E0D\u8D85\u8FC7800kB", _react.default.createElement("br", null), "\u4F7F\u7528\u4ECE1\u5F00\u59CB\u7684\u8FDE\u7EED\u6570\u5B57\u547D\u540D, \u6700\u591A\u652F\u6301\u4E0A\u4F2072\u5F20, \u5982: 1.jpg, 2.jpg, ...72.jpg"));

      var imgList = _react.default.createElement("div", {
        className: _ringsStyle.default.imgList,
        style: {
          height: "450px"
        }
      }, fileData && fileData.map(function (item) {
        return _react.default.createElement("div", {
          key: item.uid,
          className: _ringsStyle.default.imgUrl
        }, item.img == "" ? _react.default.createElement("span", null, item.percent, "%", _react.default.createElement("br", null), "\u4E0A\u4F20\u4E2D...") : _react.default.createElement("img", {
          src: _this2.splicingUrl(item.percent, item.img)
        }), _react.default.createElement("div", {
          className: _ringsStyle.default.imgTitle
        }, item.name));
      }));

      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: _ringsStyle.default.ringsTitle
      }, _react.default.createElement("div", {
        className: _ringsStyle.default.uploadButton
      }, _react.default.createElement(_Form.Button, {
        type: "primary",
        size: "small",
        title: "\u4E0A\u4F20\u73AF\u7269",
        onClick: function onClick() {
          return _this2.uploadModalShow();
        }
      })), _react.default.createElement("span", null, "\u73AF\u7269\u56FE\u7247")), _react.default.createElement("div", {
        className: _ringsStyle.default.ringsC
      }, imgNumber == 0 ? tips : ringImgC), _react.default.createElement("div", {
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
          marginBottom: "5px"
        }
      }), _react.default.createElement(_input.default, {
        placeholder: "\u586B\u5199\u94FE\u63A5\u5730\u5740",
        value: jumpUrl,
        onBlur: this.formatJumpUrl,
        onChange: this.setJumpUrl
      })), _react.default.createElement(_modal.default, {
        title: "\u73AF\u7269\u56FE\u7247",
        visible: this.state.visible,
        width: 800,
        forceRender: true,
        maskClosable: false,
        onOk: this.modalOk,
        onCancel: this.modalHide,
        footer: null
      }, _react.default.createElement("div", {
        className: _ringsStyle.default.uploadBtnStyle
      }, _react.default.createElement(_HotspotRings.default, _extends({
        path: "avatar"
      }, uploadData, {
        uuid: this.state.uuid,
        multiple: true,
        title: "\u4E0A\u4F20",
        type: "1",
        apply_type: "2",
        className: _ringsStyle.default.uploadButton,
        accept: ".jpg,.png",
        onBeforeUpload: this.getFileLength,
        errBeforeUpload: this.uploadErr,
        onChange: this.getFileList,
        onSuccess: this.uploadSuccess
      }))), _react.default.createElement("div", {
        className: _ringsStyle.default.onOk
      }, _react.default.createElement(_Form.Button, {
        key: "submit",
        type: "primary",
        title: "\u5B8C\u6210",
        onClick: function onClick() {
          return _this2.modalOk();
        },
        style: {
          float: "right"
        }
      })), _react.default.createElement("div", {
        style: {
          clear: "both"
        }
      }), imgNumber > 0 ? imgList : noImg));
    }
  }]);

  return Rings;
}(_react.default.Component);

exports.default = Rings;