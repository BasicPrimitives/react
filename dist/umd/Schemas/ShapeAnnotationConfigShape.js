"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ShapeAnnotationConfigShape = _propTypes["default"].shape({
  annotationType: _propTypes["default"].oneOf([_basicprimitives.AnnotationType.Shape]),
  zOrderType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ZOrderType)),
  items: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  shapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ShapeType)),
  offset: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }),
  lineWidth: _propTypes["default"].number,
  cornerRadius: _propTypes["default"].string,
  opacity: _propTypes["default"].number,
  borderColor: _propTypes["default"].string,
  fillColor: _propTypes["default"].string,
  lineType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  selectItems: _propTypes["default"].bool,
  label: _propTypes["default"].any,
  labelSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  labelPlacement: _propTypes["default"].oneOf(Object.values(_basicprimitives.PlacementType)),
  labelOffset: _propTypes["default"].number
});
var _default = ShapeAnnotationConfigShape;
exports["default"] = _default;