"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var OrgItemConfigShape = _propTypes["default"].shape({
  id: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  parent: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  title: _propTypes["default"].string,
  description: _propTypes["default"].string,
  image: _propTypes["default"].string,
  context: _propTypes["default"].any,
  itemTitleColor: _propTypes["default"].string,
  minimizedItemShapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ShapeType)),
  groupTitle: _propTypes["default"].string,
  groupTitleColor: _propTypes["default"].string,
  isVisible: _propTypes["default"].bool,
  isActive: _propTypes["default"].bool,
  hasSelectorCheckbox: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  hasButtons: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  itemType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ItemType)),
  adviserPlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.AdviserPlacementType)),
  childrenPlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ChildrenPlacementType)),
  levelOffset: _propTypes["default"].number,
  placeAdvisersAboveChildren: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  placeAssistantsAboveChildren: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  templateName: _propTypes["default"].string,
  showCallout: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  calloutTemplateName: _propTypes["default"].string,
  label: _propTypes["default"].string,
  showLabel: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  labelSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  labelOrientation: _propTypes["default"].oneOf(Object.values(_basicprimitives.TextOrientationType))
});
var _default = OrgItemConfigShape;
exports["default"] = _default;