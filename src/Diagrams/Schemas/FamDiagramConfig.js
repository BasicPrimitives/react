import PropTypes from 'prop-types';
import primitives from 'basicprimitives';
import ItemConfig from './FamDiagramItemConfig';
import TemplateConfig from './TemplateConfig';
import BackgroundAnnotationConfig from './BackgroundAnnotationConfig';
import ConnectorAnnotationConfig from './ConnectorAnnotationConfig';
import HighlightPathAnnotationConfig from './HighlightPathAnnotationConfig';
import ShapeAnnotationConfig from './ShapeAnnotationConfig';
import LabelAnnotationConfig from './LabelAnnotationConfig';
import PaletteItemConfig from './PaletteItemConfig';

const Config = PropTypes.shape({
  navigationMode: PropTypes.oneOf(Object.values(primitives.common.NavigationMode)),
  graphicsType: PropTypes.oneOf(Object.values(primitives.common.GraphicsType)),
  pageFitMode: PropTypes.oneOf(Object.values(primitives.common.PageFitMode)),
  minimalVisibility: PropTypes.oneOf(Object.values(primitives.common.Visibility)),
  orientationType: PropTypes.oneOf(Object.values(primitives.common.OrientationType)),
  verticalAlignment: PropTypes.oneOf(Object.values(primitives.common.VerticalAlignmentType)),
  arrowsDirection: PropTypes.oneOf(Object.values(primitives.common.GroupByType)),
  showExtraArrows: PropTypes.bool,
  extraArrowsMinimumSpace: PropTypes.number,
  groupByType: PropTypes.oneOf(Object.values(primitives.common.GroupByType)),
  alignBylevels: PropTypes.bool,
  enableMatrixLayout: PropTypes.bool,
  minimumMatrixSize: PropTypes.number,
  maximumColumnsInMatrix: PropTypes.number,
  hideGrandParentsConnectors: PropTypes.bool,
  bevelSize: PropTypes.number,
  elbowType: PropTypes.oneOf(Object.values(primitives.common.ElbowType)),
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
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  selectCheckBoxLabel: PropTypes.string,
  selectionPathMode: PropTypes.oneOf(Object.values(primitives.common.SelectionPathMode)),
  neighboursSelectionMode: PropTypes.oneOf(Object.values(primitives.common.NeighboursSelectionMode)),
  templates: PropTypes.arrayOf(TemplateConfig),
  defaultTemplateName: PropTypes.string,
  defaultLabelAnnotationTemplate: PropTypes.string,
  hasButtons: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
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
  minimizedItemShapeType: PropTypes.oneOf(Object.values(primitives.common.ShapeType)),
  linesColor: PropTypes.string,
  linesWidth: PropTypes.number,
  linesType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  showNeigboursConnectorsHighlighted: PropTypes.bool,
  highlightLinesColor: PropTypes.string,
  highlightLinesWidth: PropTypes.number,
  highlightLinesType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  linesPalette: PropTypes.arrayOf(PaletteItemConfig),
  calloutMaximumVisibility: PropTypes.oneOf(Object.values(primitives.common.Visibility)),
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
  groupTitlePlacementType: PropTypes.oneOf(Object.values(primitives.common.AdviserPlacementType)),
  groupTitleOrientation: PropTypes.oneOf(Object.values(primitives.text.TextOrientationType)),
  groupTitleVerticalAlignment: PropTypes.oneOf(Object.values(primitives.common.VerticalAlignmentType)),
  groupTitleHorizontalAlignment: PropTypes.oneOf(Object.values(primitives.common.HorizontalAlignmentType)),
  groupTitleFontSize: PropTypes.string,
  groupTitleFontFamily: PropTypes.string,
  groupTitleColor: PropTypes.string,
  groupTitleFontWeight: PropTypes.string,
  groupTitleFontStyle: PropTypes.string,
  distance: PropTypes.number,
  scale: PropTypes.number,
  minimumScale: PropTypes.number,
  maximumScale: PropTypes.number,
  showLabels: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOffset: PropTypes.number,
  labelOrientation: PropTypes.oneOf(Object.values(primitives.text.TextOrientationType)),
  labelPlacement: PropTypes.oneOf(Object.values(primitives.common.PlacementType)),
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
  })
});

export default Config;
