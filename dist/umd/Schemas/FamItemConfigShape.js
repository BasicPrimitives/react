"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FamItemConfigShape = _propTypes["default"].shape({
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  parents: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  image: _propTypes["default"].string,
  context: _propTypes["default"].any,
  itemTitleColor: _propTypes["default"].string,
  minimizedItemShapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ShapeType)),
  groupTitle: _propTypes["default"].string,
  groupTitleColor: _propTypes["default"].string,
  isActive: _propTypes["default"].bool,
  hasSelectorCheckbox: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  hasButtons: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  templateName: _propTypes["default"].string,
  showCallout: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  calloutTemplateName: _propTypes["default"].string,
  label: _propTypes["default"].string,
  showLabel: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  labelSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  labelOrientation: _propTypes["default"].oneOf(Object.values(_basicprimitives.TextOrientationType)),
  labelPlacement: _propTypes["default"].oneOf(Object.values(_basicprimitives.PlacementType)),
  primaryParent: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  relativeItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  position: _propTypes["default"].number,
  placementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.AdviserPlacementType)),
  matrixId: _propTypes["default"].string,
  addToMatrix: _propTypes["default"].bool
});
var _default = FamItemConfigShape;
exports["default"] = _default;