"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var HighlightPathAnnotationConfigShape = _propTypes["default"].shape({
  annotationType: _propTypes["default"].oneOf([_basicprimitives.AnnotationType.HighlightPath]),
  zOrderType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ZOrderType)),
  items: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  lineWidth: _propTypes["default"].number,
  color: _propTypes["default"].string,
  lineType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  opacity: _propTypes["default"].number,
  showArrows: _propTypes["default"].bool,
  selectItems: _propTypes["default"].bool
});
var _default = HighlightPathAnnotationConfigShape;
exports["default"] = _default;