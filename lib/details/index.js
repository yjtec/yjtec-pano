"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _list = _interopRequireDefault(require("./list"));

var _edit = _interopRequireDefault(require("./edit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  List: _list.default,
  Edit: _edit.default
};
exports.default = _default;