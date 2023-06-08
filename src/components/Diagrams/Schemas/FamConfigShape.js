import PropTypes from 'prop-types';
import { Visibility, OrientationType, VerticalAlignmentType, ElbowType,
  NeighboursSelectionMode, ShapeType, TextOrientationType, HorizontalAlignmentType, 
  PlacementType, NavigationMode, PageFitMode, GroupByType,
  Enabled, LineType, AdviserPlacementType, SelectionPathMode } from 'basicprimitives';
import FamItemConfigShape from './FamItemConfigShape';
import TemplateConfigShape from './TemplateConfigShape';
import BackgroundAnnotationConfigShape from './BackgroundAnnotationConfigShape';
import ConnectorAnnotationConfigShape from './ConnectorAnnotationConfigShape';
import HighlightPathAnnotationConfigShape from './HighlightPathAnnotationConfigShape';
import ShapeAnnotationConfigShape from './ShapeAnnotationConfigShape';
import LevelAnnotationConfigShape from './LevelAnnotationConfigShape';
import LabelAnnotationConfigShape from './LabelAnnotationConfigShape';
import PaletteItemConfigShape from './PaletteItemConfigShape';

const FamConfigShape = PropTypes.shape({
  navigationMode: PropTypes.oneOf(Object.values(NavigationMode)),
  pageFitMode: PropTypes.oneOf(Object.values(PageFitMode)),
  minimalVisibility: PropTypes.oneOf(Object.values(Visibility)),
  minimumVisibleLevels: PropTypes.number,
  orientationType: PropTypes.oneOf(Object.values(OrientationType)),
  verticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  arrowsDirection: PropTypes.oneOf(Object.values(GroupByType)),
  showExtraArrows: PropTypes.bool,
  extraArrowsMinimumSpace: PropTypes.number,
  groupByType: PropTypes.oneOf(Object.values(GroupByType)),
  alignBylevels: PropTypes.bool,
  enableMatrixLayout: PropTypes.bool,
  minimumMatrixSize: PropTypes.number,
  maximumColumnsInMatrix: PropTypes.number,
  hideGrandParentsConnectors: PropTypes.bool,
  bevelSize: PropTypes.number,
  elbowType: PropTypes.oneOf(Object.values(ElbowType)),
  elbowDotSize: PropTypes.number,
  emptyDiagramMessage: PropTypes.string,
  items: PropTypes.arrayOf(FamItemConfigShape),
  annotations: PropTypes.arrayOf(
    PropTypes.oneOfType([BackgroundAnnotationConfigShape, ConnectorAnnotationConfigShape, HighlightPathAnnotationConfigShape, ShapeAnnotationConfigShape, LabelAnnotationConfigShape, LevelAnnotationConfigShape])
  ),
  cursorItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightGravityRadius: PropTypes.number,
  selectedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(Enabled)),
  selectCheckBoxLabel: PropTypes.string,
  selectionPathMode: PropTypes.oneOf(Object.values(SelectionPathMode)),
  neighboursSelectionMode: PropTypes.oneOf(Object.values(NeighboursSelectionMode)),
  templates: PropTypes.arrayOf(TemplateConfigShape),
  defaultTemplateName: PropTypes.string,
  defaultLabelAnnotationTemplate: PropTypes.string,
  hasButtons: PropTypes.oneOf(Object.values(Enabled)),
  onButtonsRender: PropTypes.func,

  normalLevelShift: PropTypes.number,
  dotLevelShift: PropTypes.number,
  lineLevelShift: PropTypes.number,
  normalItemsInterval: PropTypes.number,
  dotItemsInterval: PropTypes.number,
  lineItemsInterval: PropTypes.number,
  cousinsIntervalMultiplier: PropTypes.number,
  itemTitleFirstFontColor: PropTypes.string,
  itemTitleSecondFontColor: PropTypes.string,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(ShapeType)),
  linesColor: PropTypes.string,
  linesWidth: PropTypes.number,
  linesType: PropTypes.oneOf(Object.values(LineType)),
  showNeigboursConnectorsHighlighted: PropTypes.bool,
  highlightLinesColor: PropTypes.string,
  highlightLinesWidth: PropTypes.number,
  highlightLinesType: PropTypes.oneOf(Object.values(LineType)),
  linesPalette: PropTypes.arrayOf(PaletteItemConfigShape),
  calloutMaximumVisibility: PropTypes.oneOf(Object.values(Visibility)),
  showCallout: PropTypes.bool,
  calloutPlacementOffset: PropTypes.number,
  defaultCalloutTemplateName: PropTypes.string,
  calloutfillColor: PropTypes.string,
  calloutBorderColor: PropTypes.string,
  calloutOffset: PropTypes.number,
  calloutCornerRadius: PropTypes.number,
  calloutPointerWidth: PropTypes.string,
  calloutLineWidth: PropTypes.number,
  calloutOpacity: PropTypes.number,
  buttonsPanelSize: PropTypes.number,
  groupTitlePanelSize: PropTypes.number,
  checkBoxPanelSize: PropTypes.number,
  groupTitlePlacementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  groupTitleOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  groupTitleVerticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  groupTitleHorizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),
  groupTitleFontSize: PropTypes.string,
  groupTitleFontFamily: PropTypes.string,
  groupTitleColor: PropTypes.string,
  groupTitleFontWeight: PropTypes.string,
  groupTitleFontStyle: PropTypes.string,
  onGroupTitleRender: PropTypes.func,
  levelTitlePanelSize: PropTypes.number,
  levelTitlePlacementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  levelTitlePlaceInside: PropTypes.bool,
  levelTitleOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  levelTitleVerticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),
  levelTitleHorizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),
  levelTitleFontSize: PropTypes.string,
  levelTitleFontFamily: PropTypes.string,
  levelTitleFontColor: PropTypes.string,
  levelTitleColor: PropTypes.string,
  levelTitleFontWeight: PropTypes.string,
  levelTitleFontStyle: PropTypes.string,
  onLevelTitleRender: PropTypes.func,
  onLevelBackgroundRender: PropTypes.func,
  distance: PropTypes.number,
  scale: PropTypes.number,
  minimumScale: PropTypes.number,
  maximumScale: PropTypes.number,
  showLabels: PropTypes.oneOf(Object.values(Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOffset: PropTypes.number,
  labelOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  labelPlacement: PropTypes.oneOf(Object.values(PlacementType)),
  labelFontSize: PropTypes.string,
  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontWeight: PropTypes.string,
  labelFontStyle: PropTypes.string,
  enablePanning: PropTypes.bool,
  autoSizeMinimum: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  autoSizeMaximum: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  showFrame: PropTypes.bool,
  frameInnerPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  frameOuterPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  padding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  })
});

export default FamConfigShape;
