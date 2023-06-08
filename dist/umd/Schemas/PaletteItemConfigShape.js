"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _basicprimitives = require("basicprimitives");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PaletteItemConfigShape = _propTypes["default"].shape({
  lineColor: _propTypes["default"].string,
  lineWidth: _propTypes["default"].number,
  lineType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType))
});
var _default = PaletteItemConfigShape;
exports["default"] = _default;