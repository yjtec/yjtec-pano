"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _edit = _interopRequireDefault(require("./edit"));

var _pano = _interopRequireDefault(require("./pano"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Edit: _edit.default,
  Pano: _pano.default
};
exports.default = _default;