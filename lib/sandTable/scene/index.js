"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/row/style");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/col/style");

var _col = _interopRequireDefault(require("antd/es/col"));

var _react = _interopRequireWildcard(require("react"));

var _style3 = _interopRequireDefault(require("./style.less"));

var _dva = require("dva");

var _oss = require("@/utils/oss.config");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var residualArr = function residualArr(arr1, arr2) {
  var new_arr = [];
  arr1.map(function (item) {
    if (!arr2.some(function (j) {
      return item.id == j.scene_id && item.x !== '' && item.x !== null;
    })) {
      new_arr.push(item);
    }
  });
  return new_arr;
};

var ActionScene =
/*#__PURE__*/
function (_Component) {
  _inherits(ActionScene, _Component);

  function ActionScene() {
    _classCallCheck(this, ActionScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionScene).apply(this, arguments));
  }

  _createClass(ActionScene, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          scene = _this$props.scene,
          data = _this$props.data,
          spots = _this$props.spots,
          onChange = _this$props.onChange;
      return _react.default.createElement("div", {
        style: {
          marginBottom: '72px'
        }
      }, _react.default.createElement("div", {
        className: _style3.default.title
      }, "\u9009\u62E9\u76EE\u6807\u573A\u666F"), _react.default.createElement("div", {
        className: _style3.default.panoLists
      }, _react.default.createElement(_row.default, null, residualArr(scene, spots).map(function (item) {
        return _react.default.createElement(_col.default, {
          key: item.id,
          span: 8,
          className: _style3.default.panoList,
          onClick: function onClick() {
            return onChange(item);
          }
        }, _react.default.createElement("div", null, _react.default.createElement("img", {
          alt: "img",
          src: item.thumb.url == undefined ? (0, _oss.panoImgConfig)(item.thumb.path) : item.thumb.url,
          style: {
            width: '100%',
            height: '62px',
            border: data && data.scene_id == item.id ? '2px solid #008aff' : ''
          }
        })), _react.default.createElement("span", null, item.name));
      }))));
    }
  }]);

  return ActionScene;
}(_react.Component);

var _default = (0, _dva.connect)(function (_ref) {
  var scene = _ref.scene;
  return {
    scene: scene.all
  };
})(ActionScene);

exports.default = _default;