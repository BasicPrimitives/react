"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TemplateConfigShape = _propTypes["default"].shape({
  name: _propTypes["default"].string,
  isActive: _propTypes["default"].bool,
  itemSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  itemBorderWidth: _propTypes["default"].number,
  onItemRender: _propTypes["default"].func,
  minimizedItemShapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ShapeType)),
  minimizedItemSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  minimizedItemCornerRadius: _propTypes["default"].number,
  minimizedItemLineWidth: _propTypes["default"].number,
  minimizedItemBorderColor: _propTypes["default"].string,
  minimizedItemLineType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  minimizedItemFillColor: _propTypes["default"].string,
  minimizedItemOpacity: _propTypes["default"].number,
  highlightPadding: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }),
  highlightBorderWidth: _propTypes["default"].number,
  onHighlightRender: _propTypes["default"].func,
  cursorPadding: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }),
  cursorBorderWidth: _propTypes["default"].number,
  onCursorRender: _propTypes["default"].func,
  onButtonsRender: _propTypes["default"].func
});
var _default = TemplateConfigShape;
exports["default"] = _default;