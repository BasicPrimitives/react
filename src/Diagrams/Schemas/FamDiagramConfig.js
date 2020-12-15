import PropTypes from 'prop-types';
import { GraphicsType, Visibility, OrientationType, VerticalAlignmentType, ElbowType,
  NeighboursSelectionMode, ShapeType, TextOrientationType, HorizontalAlignmentType, 
  PlacementType, NavigationMode, PageFitMode, GroupByType, LoopsLayoutMode,
  Enabled, LineType, AdviserPlacementType, SelectionPathMode } from 'basicprimitives';
import ItemConfig from './FamDiagramItemConfig';
import TemplateConfig from './TemplateConfig';
import BackgroundAnnotationConfig from './BackgroundAnnotationConfig';
import ConnectorAnnotationConfig from './ConnectorAnnotationConfig';
import HighlightPathAnnotationConfig from './HighlightPathAnnotationConfig';
import ShapeAnnotationConfig from './ShapeAnnotationConfig';
import LabelAnnotationConfig from './LabelAnnotationConfig';
import PaletteItemConfig from './PaletteItemConfig';

const Config = PropTypes.shape({
  navigationMode: PropTypes.oneOf(Object.values(NavigationMode)),
  graphicsType: PropTypes.oneOf(Object.values(GraphicsType)),
  pageFitMode: PropTypes.oneOf(Object.values(PageFitMode)),
  minimalVisibility: PropTypes.oneOf(Object.values(Visibility)),
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
  loopsLayoutMode: PropTypes.oneOf(Object.values(LoopsLayoutMode)),
  bevelSize: PropTypes.number,
  elbowType: PropTypes.oneOf(Object.values(ElbowType)),
  elbowDotSize: PropTypes.number,
  emptyDiagramMessage: PropTypes.string,
  items: PropTypes.arrayOf(ItemConfig),
  annotations: PropTypes.arrayOf(
    PropTypes.oneOfType([BackgroundAnnotationConfig, ConnectorAnnotationConfig, HighlightPathAnnotationConfig, ShapeAnnotationConfig, LabelAnnotationConfig])
  ),
  cursorItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  highlightGravityRadius: PropTypes.number,
  selectedItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(Enabled)),
  selectCheckBoxLabel: PropTypes.string,
  selectionPathMode: PropTypes.oneOf(Object.values(SelectionPathMode)),
  neighboursSelectionMode: PropTypes.oneOf(Object.values(NeighboursSelectionMode)),
  templates: PropTypes.arrayOf(TemplateConfig),
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
  linesPalette: PropTypes.arrayOf(PaletteItemConfig),
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
  })
});

export default Config;
