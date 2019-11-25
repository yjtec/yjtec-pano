"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = _interopRequireDefault(require("./style.less"));

var _krpanoJS = _interopRequireDefault(require("krpanoJS"));

var _scene = _interopRequireDefault(require("@/utils/kr/scene"));

var _yjtecSupport = require("yjtec-support");

var _dva = require("dva");

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

var jsapi = null;

var setView = function setView(view) {
  var fov = view.fov,
      hlookat = view.hlookat,
      vlookat = view.vlookat;
  Object.keys({
    fov: fov,
    fovmin: fov,
    fovmax: fov,
    hlookat: hlookat,
    hlookatmin: hlookat,
    hlookatmax: hlookat,
    vlookat: vlookat,
    vlookatmin: vlookat,
    vlookatmax: vlookat
  }).map(function (item) {
    jsapi.set('view.' + item, view[item]);
  });
};

var View =
/*#__PURE__*/
function (_React$Component) {
  _inherits(View, _React$Component);

  function View() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, View);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(View)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      loading: true
    };
    return _this;
  }

  _createClass(View, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          view = _this$props.view,
          scene = _this$props.scene,
          viewDefault = _this$props.viewDefault;

      _krpanoJS.default.embedpano({
        target: 'viewpano',
        html5: "auto",
        id: 'viewpanoSWFOBJ',
        xml: null,
        consolelog: true,
        onready: function onready(krpano) {
          jsapi = krpano.get('global');
          krpano.set('events.onxmlcomplete', function () {
            if (viewDefault) setView(viewDefault); //Ke.loaded(krpano);
          });
          var xml = "<krpano><scene name='pano_scene'>";
          xml += (0, _scene.default)(scene);
          xml += "</scene></krpano>";
          krpano.call('loadxml(' + xml + ')');
          krpano.call('loadscene(pano_scene)');
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var view = this.props.view;

      if (view && !_yjtecSupport.Obj.isEqual(prevProps.view, this.props.view)) {
        setView(view);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removepano("viewpanoSWFOBJ");
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          height: '100px',
          background: 'red'
        },
        id: "viewpano"
      });
    }
  }]);

  return View;
}(_react.default.Component);

var _default = (0, _dva.connect)(function (_ref) {
  var pano = _ref.pano,
      view = _ref.view,
      global = _ref.global;
  return {
    scene: pano.scene,
    view: view.data,
    viewDefault: global.scene.view // scene:global.scene

  };
})(View);

exports.default = _default;