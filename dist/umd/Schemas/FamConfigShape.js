"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _basicprimitives = require("basicprimitives");
var _FamItemConfigShape = _interopRequireDefault(require("./FamItemConfigShape"));
var _TemplateConfigShape = _interopRequireDefault(require("./TemplateConfigShape"));
var _BackgroundAnnotationConfigShape = _interopRequireDefault(require("./BackgroundAnnotationConfigShape"));
var _ConnectorAnnotationConfigShape = _interopRequireDefault(require("./ConnectorAnnotationConfigShape"));
var _HighlightPathAnnotationConfigShape = _interopRequireDefault(require("./HighlightPathAnnotationConfigShape"));
var _ShapeAnnotationConfigShape = _interopRequireDefault(require("./ShapeAnnotationConfigShape"));
var _LevelAnnotationConfigShape = _interopRequireDefault(require("./LevelAnnotationConfigShape"));
var _LabelAnnotationConfigShape = _interopRequireDefault(require("./LabelAnnotationConfigShape"));
var _PaletteItemConfigShape = _interopRequireDefault(require("./PaletteItemConfigShape"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FamConfigShape = _propTypes["default"].shape({
  navigationMode: _propTypes["default"].oneOf(Object.values(_basicprimitives.NavigationMode)),
  pageFitMode: _propTypes["default"].oneOf(Object.values(_basicprimitives.PageFitMode)),
  minimalVisibility: _propTypes["default"].oneOf(Object.values(_basicprimitives.Visibility)),
  minimumVisibleLevels: _propTypes["default"].number,
  orientationType: _propTypes["default"].oneOf(Object.values(_basicprimitives.OrientationType)),
  verticalAlignment: _propTypes["default"].oneOf(Object.values(_basicprimitives.VerticalAlignmentType)),
  arrowsDirection: _propTypes["default"].oneOf(Object.values(_basicprimitives.GroupByType)),
  showExtraArrows: _propTypes["default"].bool,
  extraArrowsMinimumSpace: _propTypes["default"].number,
  groupByType: _propTypes["default"].oneOf(Object.values(_basicprimitives.GroupByType)),
  alignBylevels: _propTypes["default"].bool,
  enableMatrixLayout: _propTypes["default"].bool,
  minimumMatrixSize: _propTypes["default"].number,
  maximumColumnsInMatrix: _propTypes["default"].number,
  hideGrandParentsConnectors: _propTypes["default"].bool,
  bevelSize: _propTypes["default"].number,
  elbowType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ElbowType)),
  elbowDotSize: _propTypes["default"].number,
  emptyDiagramMessage: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_FamItemConfigShape["default"]),
  annotations: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_BackgroundAnnotationConfigShape["default"], _ConnectorAnnotationConfigShape["default"], _HighlightPathAnnotationConfigShape["default"], _ShapeAnnotationConfigShape["default"], _LabelAnnotationConfigShape["default"], _LevelAnnotationConfigShape["default"]])),
  cursorItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  highlightItem: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),
  highlightGravityRadius: _propTypes["default"].number,
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string])),
  hasSelectorCheckbox: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  selectCheckBoxLabel: _propTypes["default"].string,
  selectionPathMode: _propTypes["default"].oneOf(Object.values(_basicprimitives.SelectionPathMode)),
  neighboursSelectionMode: _propTypes["default"].oneOf(Object.values(_basicprimitives.NeighboursSelectionMode)),
  templates: _propTypes["default"].arrayOf(_TemplateConfigShape["default"]),
  defaultTemplateName: _propTypes["default"].string,
  defaultLabelAnnotationTemplate: _propTypes["default"].string,
  hasButtons: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  onButtonsRender: _propTypes["default"].func,
  normalLevelShift: _propTypes["default"].number,
  dotLevelShift: _propTypes["default"].number,
  lineLevelShift: _propTypes["default"].number,
  normalItemsInterval: _propTypes["default"].number,
  dotItemsInterval: _propTypes["default"].number,
  lineItemsInterval: _propTypes["default"].number,
  cousinsIntervalMultiplier: _propTypes["default"].number,
  itemTitleFirstFontColor: _propTypes["default"].string,
  itemTitleSecondFontColor: _propTypes["default"].string,
  minimizedItemShapeType: _propTypes["default"].oneOf(Object.values(_basicprimitives.ShapeType)),
  linesColor: _propTypes["default"].string,
  linesWidth: _propTypes["default"].number,
  linesType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  showNeigboursConnectorsHighlighted: _propTypes["default"].bool,
  highlightLinesColor: _propTypes["default"].string,
  highlightLinesWidth: _propTypes["default"].number,
  highlightLinesType: _propTypes["default"].oneOf(Object.values(_basicprimitives.LineType)),
  linesPalette: _propTypes["default"].arrayOf(_PaletteItemConfigShape["default"]),
  calloutMaximumVisibility: _propTypes["default"].oneOf(Object.values(_basicprimitives.Visibility)),
  showCallout: _propTypes["default"].bool,
  calloutPlacementOffset: _propTypes["default"].number,
  defaultCalloutTemplateName: _propTypes["default"].string,
  calloutfillColor: _propTypes["default"].string,
  calloutBorderColor: _propTypes["default"].string,
  calloutOffset: _propTypes["default"].number,
  calloutCornerRadius: _propTypes["default"].number,
  calloutPointerWidth: _propTypes["default"].string,
  calloutLineWidth: _propTypes["default"].number,
  calloutOpacity: _propTypes["default"].number,
  buttonsPanelSize: _propTypes["default"].number,
  groupTitlePanelSize: _propTypes["default"].number,
  checkBoxPanelSize: _propTypes["default"].number,
  groupTitlePlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.AdviserPlacementType)),
  groupTitleOrientation: _propTypes["default"].oneOf(Object.values(_basicprimitives.TextOrientationType)),
  groupTitleVerticalAlignment: _propTypes["default"].oneOf(Object.values(_basicprimitives.VerticalAlignmentType)),
  groupTitleHorizontalAlignment: _propTypes["default"].oneOf(Object.values(_basicprimitives.HorizontalAlignmentType)),
  groupTitleFontSize: _propTypes["default"].string,
  groupTitleFontFamily: _propTypes["default"].string,
  groupTitleColor: _propTypes["default"].string,
  groupTitleFontWeight: _propTypes["default"].string,
  groupTitleFontStyle: _propTypes["default"].string,
  onGroupTitleRender: _propTypes["default"].func,
  levelTitlePanelSize: _propTypes["default"].number,
  levelTitlePlacementType: _propTypes["default"].oneOf(Object.values(_basicprimitives.AdviserPlacementType)),
  levelTitlePlaceInside: _propTypes["default"].bool,
  levelTitleOrientation: _propTypes["default"].oneOf(Object.values(_basicprimitives.TextOrientationType)),
  levelTitleVerticalAlignment: _propTypes["default"].oneOf(Object.values(_basicprimitives.VerticalAlignmentType)),
  levelTitleHorizontalAlignment: _propTypes["default"].oneOf(Object.values(_basicprimitives.HorizontalAlignmentType)),
  levelTitleFontSize: _propTypes["default"].string,
  levelTitleFontFamily: _propTypes["default"].string,
  levelTitleFontColor: _propTypes["default"].string,
  levelTitleColor: _propTypes["default"].string,
  levelTitleFontWeight: _propTypes["default"].string,
  levelTitleFontStyle: _propTypes["default"].string,
  onLevelTitleRender: _propTypes["default"].func,
  onLevelBackgroundRender: _propTypes["default"].func,
  distance: _propTypes["default"].number,
  scale: _propTypes["default"].number,
  minimumScale: _propTypes["default"].number,
  maximumScale: _propTypes["default"].number,
  showLabels: _propTypes["default"].oneOf(Object.values(_basicprimitives.Enabled)),
  labelSize: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  labelOffset: _propTypes["default"].number,
  labelOrientation: _propTypes["default"].oneOf(Object.values(_basicprimitives.TextOrientationType)),
  labelPlacement: _propTypes["default"].oneOf(Object.values(_basicprimitives.PlacementType)),
  labelFontSize: _propTypes["default"].string,
  labelFontFamily: _propTypes["default"].string,
  labelColor: _propTypes["default"].string,
  labelFontWeight: _propTypes["default"].string,
  labelFontStyle: _propTypes["default"].string,
  enablePanning: _propTypes["default"].bool,
  autoSizeMinimum: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  autoSizeMaximum: _propTypes["default"].shape({
    width: _propTypes["default"].number.isRequired,
    height: _propTypes["default"].number.isRequired
  }),
  showFrame: _propTypes["default"].bool,
  frameInnerPadding: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }),
  frameOuterPadding: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  }),
  padding: _propTypes["default"].shape({
    left: _propTypes["default"].number.isRequired,
    top: _propTypes["default"].number.isRequired,
    right: _propTypes["default"].number.isRequired,
    bottom: _propTypes["default"].number.isRequired
  })
});
var _default = FamConfigShape;
exports["default"] = _default;