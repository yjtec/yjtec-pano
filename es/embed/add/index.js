import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/button/style";
import _Button from "antd/es/button";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Component } from 'react';
import { connect } from 'dva';
import { Drawer, ItemBox } from '@/components/';
import { EmbedType } from '../action';
import Action from './action';
import FineTuning from '../fineTuning';
import style from './style.less';

var EmbedAdd =
/*#__PURE__*/
function (_Component) {
  _inherits(EmbedAdd, _Component);

  function EmbedAdd() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EmbedAdd);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EmbedAdd)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleCancel = function () {
      _this.props.onCancel();
    };

    _this.handleEmbedType = function (e) {
      _this.props.onSetType(e);
    };

    _this.receiveData = function (data) {
      _this.props.onChange(data);
    };

    _this.editFineTuning = function (data) {
      _this.props.onLocation(data);
    };

    _this.handleSave = function () {
      _this.props.onSave();
    };

    _this.handleDelete = function () {
      _this.props.onDel();
    };

    return _this;
  }

  _createClass(EmbedAdd, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          embedTypeData = _this$props.embedTypeData,
          _this$props$embedType = _this$props.embedType,
          embedType = _this$props$embedType === void 0 ? 1 : _this$props$embedType,
          data = _this$props.data,
          isVip = _this$props.isVip;
      var saveDiv = React.createElement(ItemBox, null, React.createElement(_Row, {
        style: {
          margin: '0 -5px'
        }
      }, React.createElement(_Col, {
        span: 12,
        style: {
          padding: '0 5px'
        }
      }, React.createElement(_Button, {
        type: "primary",
        onClick: this.handleSave,
        style: {
          width: '100%'
        }
      }, "\u4FDD\u5B58")), React.createElement(_Col, {
        span: 12,
        className: style.panoList,
        style: {
          padding: '0 5px'
        }
      }, React.createElement(_Button, {
        type: "danger",
        onClick: this.handleDelete,
        style: {
          width: '100%'
        }
      }, "\u5220\u9664"))));
      return React.createElement("div", {
        className: style.module
      }, React.createElement(Drawer, {
        visible: this.props.visible,
        destroyOnClose: false,
        title: "\u5D4C\u5165",
        onCancel: this.handleCancel
      }, React.createElement(ItemBox, null, React.createElement(EmbedType, {
        embedTypeData: embedTypeData,
        embedType: embedType,
        onChange: this.handleEmbedType
      })), React.createElement(Action, {
        embedType: embedType,
        isVip: isVip,
        data: data,
        onChange: this.receiveData
      }), embedType == 4 && isVip == 1 || embedType == 1 || embedType == 2 || embedType == 3 ? saveDiv : ''), React.createElement(FineTuning, {
        visible: this.props.visible,
        data: data.locationData,
        embedType: embedType,
        onChange: this.editFineTuning
      }));
    }
  }]);

  return EmbedAdd;
}(Component);

export default connect(function (_ref) {
  var loading = _ref.loading;
  return {
    loading: loading
  };
})(EmbedAdd);