"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("@/components/");

var _style5 = _interopRequireDefault(require("./style.less"));

var _help = require("@/utils/help");

var _Form = require("@/components/Form");

var _temp = _interopRequireDefault(require("../assets/images/temp1.jpg"));

var _menuBtn = _interopRequireDefault(require("./menuBtn"));

var _menuGroup = _interopRequireDefault(require("./menuGroup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var TabPane = _tabs.default.TabPane;
var createType = [{
  key: 1,
  type: 'button',
  title: '按钮'
}, {
  key: 2,
  type: 'group',
  title: '分组'
}];

var CustomMenuEdit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomMenuEdit, _React$Component);

  function CustomMenuEdit() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CustomMenuEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomMenuEdit)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      create: false,
      activeKey: 1,
      panes: [],
      ui_data: []
    };

    _this.setPanes = function (data) {
      var panes = [];
      data.map(function (item) {
        panes.push({
          title: item.type == 'button' ? '按钮' : '分组',
          key: item.index,
          content: {}
        });
      });

      _this.setState(_objectSpread({}, _this.state, {
        panes: panes,
        ui_data: data
      }));
    };

    _this.setCreate = function () {
      var create = true;

      if (_this.state.create) {
        create = false;
      }

      _this.setState({
        create: create
      });
    };

    _this.closeCreate = function () {
      _this.setState({
        create: false
      });
    };

    _this.add = function (type) {
      var paneItem = createType.find(function (item) {
        return item.type == type;
      });
      var _this$state = _this.state,
          panes = _this$state.panes,
          activeKey = _this$state.activeKey,
          ui_data = _this$state.ui_data;
      var newActiveKey = _this.state.panes.length + 1;
      panes.push({
        title: paneItem.title,
        content: {},
        key: newActiveKey.toString()
      });
      ui_data.push({
        index: newActiveKey.toString(),
        type: type,
        data: ''
      });

      _this.setState({
        panes: panes,
        activeKey: newActiveKey,
        ui_data: ui_data
      });

      _this.closeCreate();
    };

    _this.switchActiveKey = function (activeKey) {
      _this.setState({
        activeKey: activeKey
      });
    };

    _this.remove = function (targetKey) {
      var activeKey = _this.state.activeKey;
      var lastIndex;

      _this.state.panes.forEach(function (pane, i) {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });

      var panes = _this.state.panes.filter(function (pane) {
        return pane.key !== targetKey;
      });

      var new_panes = panes.map(function (item, i) {
        return _objectSpread({}, item, {
          key: (i + 1).toString()
        });
      });

      var ui_data = _this.state.ui_data.filter(function (item) {
        return item.index !== targetKey;
      });

      var new_ui_data = ui_data.map(function (item, i) {
        return _objectSpread({}, item, {
          index: (i + 1).toString()
        });
      });

      if (new_panes.length && activeKey == targetKey) {
        if (lastIndex >= 0) {
          activeKey = new_panes[lastIndex].key;
        } else {
          activeKey = new_panes[0].key;
        }
      } else {
        activeKey = new_panes && JSON.stringify(new_panes) != '[]' ? new_panes[0].key : 1;
      }

      _this.setPanes(new_ui_data);

      _this.setState({
        activeKey: activeKey
      });
    };

    _this.onEdit = function (targetKey, action) {
      _this[action](targetKey);
    };

    _this.editBtn = function (data) {
      var new_ui_data = [];

      if (_this.state.ui_data.some(function (item) {
        return item.index == data.index;
      })) {
        _this.state.ui_data.map(function (item) {
          if (item.index == data.index) {
            new_ui_data.push(data);
          } else {
            new_ui_data.push(item);
          }
        });
      } else {
        new_ui_data = _this.state.ui_data.concat(data);
      }

      _this.setState(_objectSpread({}, _this.state, {
        ui_data: new_ui_data
      }));
    };

    _this.save = function () {
      _this.props.onChange(_this.state.ui_data);

      _message2.default.success('菜单已保存');
    };

    return _this;
  }

  _createClass(CustomMenuEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var data = this.props.data;
      if (JSON.stringify(data) == '{}' || !data) return;
      this.setPanes(data);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var data = this.props.data;

      if (JSON.stringify(prevProps.data) != JSON.stringify(data)) {
        if (data) {
          this.setPanes(data);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          create = _this$state2.create,
          panes = _this$state2.panes,
          ui_data = _this$state2.ui_data;
      var panes_data = [];
      panes.map(function (i) {
        ui_data.map(function (j) {
          if (i.key === j.index) {
            panes_data.push(_objectSpread({}, i, {
              content: _objectSpread({}, j)
            }));
          }
        });
      });
      return _react.default.createElement("div", null, _react.default.createElement(_components.ItemBox, null, _react.default.createElement("div", {
        style: {
          padding: '10px 0'
        }
      }, _help.helpShow && _react.default.createElement("div", {
        style: {
          float: 'right',
          width: '32px',
          height: '32px',
          position: 'relative'
        }
      }, _react.default.createElement(_components.Help, {
        link: 'custom_menu',
        style: {
          fontSize: '24px',
          color: '#999999',
          float: 'left'
        }
      })), _react.default.createElement("div", {
        style: {
          width: _help.helpShow ? '80%' : '100%',
          float: 'left',
          position: 'relative'
        }
      }, _react.default.createElement(_Form.Button, {
        title: "\u521B\u5EFA",
        disabled: panes.length >= 3 ? true : false,
        style: {
          backgroundColor: '#008aff',
          color: '#fff',
          borderColor: '#008aff'
        },
        onClick: function onClick() {
          return _this2.setCreate();
        }
      }), _react.default.createElement("div", {
        className: _style5.default.createBtn,
        style: {
          position: 'absolute',
          display: create ? 'block' : 'none'
        }
      }, createType.map(function (item) {
        return _react.default.createElement("p", {
          key: item.key,
          onClick: function onClick() {
            return _this2.add(item.type);
          }
        }, item.title);
      }))), _react.default.createElement("div", {
        style: {
          clear: 'both'
        }
      }), _react.default.createElement("div", {
        className: _style5.default.tips
      }, "\u6CE8: \u53EF\u6DFB\u52A03\u4E2A\u6309\u94AE\u6216\u5206\u7EC4, \u6BCF\u4E2A\u5206\u7EC4\u6700\u591A\u53EF\u6DFB\u52A05\u4E2A\u5B50\u6309\u94AE"))), _react.default.createElement("div", {
        className: _style5.default.content
      }, panes_data.length > 0 && _react.default.createElement(_tabs.default, {
        hideAdd: true,
        onChange: this.switchActiveKey,
        activeKey: this.state.activeKey.toString(),
        type: "editable-card",
        onEdit: this.onEdit
      }, panes_data.map(function (pane) {
        return _react.default.createElement(TabPane, {
          tab: pane.title,
          key: pane.key
        }, pane.content.type == 'button' ? _react.default.createElement(_menuBtn.default, {
          showIcon: true,
          index: pane.content.index,
          type: pane.content.type,
          data: pane.content.data ? pane.content.data : '',
          onChange: _this2.editBtn
        }) : _react.default.createElement(_menuGroup.default, {
          index: pane.content.index,
          type: pane.content.type,
          data: pane.content.data ? pane.content.data : '',
          onChange: _this2.editBtn
        }));
      }))), _react.default.createElement("div", {
        style: {
          position: 'absolute',
          bottom: '0',
          zIndex: '99',
          width: '100%',
          background: '#494949'
        }
      }, _react.default.createElement("div", {
        className: _style5.default.lineDefaultBottom
      }), _react.default.createElement(_components.ItemBox, null, _react.default.createElement(_row.default, {
        style: {
          margin: '10px -5px'
        }
      }, _react.default.createElement(_col.default, {
        span: 24,
        style: {
          padding: '0 5px'
        }
      }, _react.default.createElement(_Form.Button, {
        title: "\u5B8C\u6210",
        onClick: function onClick() {
          return _this2.save();
        }
      }))))));
    }
  }]);

  return CustomMenuEdit;
}(_react.default.Component);

exports.default = CustomMenuEdit;