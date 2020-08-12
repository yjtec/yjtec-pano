"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _edit = _interopRequireDefault(require("./edit"));

var _spotList = _interopRequireDefault(require("./spotList"));

var _sceneList = _interopRequireDefault(require("./sceneList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Edit: _edit.default,
  SpotList: _spotList.default,
  SceneList: _sceneList.default
};
exports.default = _default;