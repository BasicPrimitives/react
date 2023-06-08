"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LabelAnnotationConfigShape = _propTypes["default"].shape({
  annotationType: _propTypes["default"].oneOf([_basicprimitives.AnnotationType.Label]),
  fromItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,
  toItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])).isRequired,
  title: _propTypes["default"].any,
  itemTitleColor: _propTypes["default"].string,
  templateName: _propTypes["default"].string
});
var _default = LabelAnnotationConfigShape;
exports["default"] = _default;