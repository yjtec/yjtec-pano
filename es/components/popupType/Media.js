import "antd/es/button/style";
import _Button from "antd/es/button";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import PicList from '@/components/PicList';
import { strRandom, Arr, Obj, isArray } from 'yjtec-support';
import UserMedia from '@/components/MediaModal/UserMedia';

var ActionMedia =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ActionMedia, _React$Component);

  function ActionMedia() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ActionMedia);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ActionMedia)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      userMediaVisible: false,
      list: [] //当前选择图片

    };

    _this.handleShow = function () {
      _this.setState({
        userMediaVisible: true
      });
    };

    _this.selectImg = function (arr) {
      var list = _this.state.list;
      var newList = [];

      if (arr) {
        newList = arr.map(function (item) {
          return {
            id: strRandom(10, {
              letters: false
            }),
            url: item.path.path
          };
        });
      }

      list = list.concat(newList);

      _this.setState({
        userMediaVisible: false,
        list: list
      });
    };

    _this.closeMediaModal = function () {
      _this.setState({
        userMediaVisible: false
      });
    };

    _this.delImg = function (data) {
      var list = _this.state.list;
      var newList = list.filter(function (item) {
        return item.id != data.id;
      });

      _this.setState({
        list: newList
      });
    };

    return _this;
  }

  _createClass(ActionMedia, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;

      if (isArray(data) && !Arr.isNull(data)) {
        this.setState({
          list: data
        });
      }
    }
  }, {
    key: "componentWillUpdate",
    value: function componentWillUpdate(nextProps, nextState) {
      if (!Obj.isEqual(this.state.list, nextState.list)) {
        var onChange = this.props.onChange;
        if (onChange) onChange(nextState.list);
      }

      if (!Obj.isEqual(this.props.data, nextProps.data)) {
        this.setState({
          list: nextProps.data
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          userMediaVisible = _this$state.userMediaVisible,
          list = _this$state.list;
      var activeId = this.props.activeId;
      var activeProps = {};

      if (activeId) {
        activeProps = {
          activeId: activeId
        };
      }

      return React.createElement("div", null, React.createElement("p", null, "\u76F8\u518C", React.createElement(_Button, {
        onClick: this.handleShow,
        style: {
          float: 'right'
        },
        type: "primary",
        size: "small"
      }, "\u9009\u62E9\u56FE\u7247")), React.createElement(UserMedia, {
        title: "\u56FE\u7247\u7D20\u6750\u5E93",
        mediaType: "1",
        multipleChoices: true,
        width: "900px",
        visible: userMediaVisible,
        onChange: this.selectImg,
        onCancel: this.closeMediaModal
      }), React.createElement(PicList, _extends({
        data: list,
        onDel: this.delImg,
        onClick: this.props.onClick
      }, activeProps)));
    }
  }]);

  return ActionMedia;
}(React.Component);

export { ActionMedia as default };