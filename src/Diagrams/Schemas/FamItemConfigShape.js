import PropTypes from 'prop-types';
import { ShapeType, Enabled, TextOrientationType, PlacementType, AdviserPlacementType } from 'basicprimitives';

const FamItemConfigShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  parents: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  context: PropTypes.any,
  itemTitleColor: PropTypes.string,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(ShapeType)),
  groupTitle: PropTypes.string,
  groupTitleColor: PropTypes.string,
  isActive: PropTypes.bool,
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(Enabled)),
  hasButtons: PropTypes.oneOf(Object.values(Enabled)),
  templateName: PropTypes.string,
  showCallout: PropTypes.oneOf(Object.values(Enabled)),
  calloutTemplateName: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.oneOf(Object.values(Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOrientation: PropTypes.oneOf(Object.values(TextOrientationType)),
  labelPlacement: PropTypes.oneOf(Object.values(PlacementType)),
  primaryParent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  relativeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.number,
  placementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  matrixId: PropTypes.string,
  addToMatrix: PropTypes.bool
});

export default FamItemConfigShape;
