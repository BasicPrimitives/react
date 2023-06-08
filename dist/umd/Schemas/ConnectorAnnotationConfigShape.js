"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConnectorAnnotationConfigShape = _propTypes["default"].shape({
  annotationType: _propTypes["default"].oneOf([_basicprimitives.AnnotationType.Connector]),
  zOrderType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ZOrderType)),
  fromItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  toItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  connectorShapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ConnectorShapeType)),
  connectorPlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ConnectorPlacementType)),
  labelPlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ConnectorLabelPlacementType)),
  offset: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  })]),
  lineWidth: _propTypes["default"].number,
  color: _propTypes["default"].string,
  lineType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  selectItems: _propTypes["default"].bool,
  label: _propTypes["default"].any,
  size: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  })
});
var _default = ConnectorAnnotationConfigShape;
exports["default"] = _default;