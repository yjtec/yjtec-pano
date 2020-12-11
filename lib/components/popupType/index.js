"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Media = _interopRequireDefault(require("./Media"));

var _MediaMul = _interopRequireDefault(require("./MediaMul"));

var _Phone = _interopRequireDefault(require("./Phone"));

var _Url = _interopRequireDefault(require("./Url"));

var _Scene = _interopRequireDefault(require("./Scene"));

var _Music = _interopRequireDefault(require("./Music"));

var _Rings = _interopRequireDefault(require("./Rings"));

var _Video = _interopRequireDefault(require("./Video"));

var _Iframe = _interopRequireDefault(require("./Iframe"));

var _Model = _interopRequireDefault(require("./Model"));

var _richText = _interopRequireDefault(require("./richText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Media: _Media.default,
  MediaMul: _MediaMul.default,
  Phone: _Phone.default,
  Url: _Url.default,
  Scene: _Scene.default,
  Music: _Music.default,
  Rings: _Rings.default,
  Video: _Video.default,
  Iframe: _Iframe.default,
  Model: _Model.default,
  RichText: _richText.default
};
exports.default = _default;