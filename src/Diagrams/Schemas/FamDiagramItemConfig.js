import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const ItemConfig = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  parents: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  spouses: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  context: PropTypes.any,
  itemTitleColor: PropTypes.string,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(primitives.common.ShapeType)),
  groupTitle: PropTypes.string,
  groupTitleColor: PropTypes.string,
  isActive: PropTypes.bool,
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  hasButtons: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  templateName: PropTypes.string,
  showCallout: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  calloutTemplateName: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOrientation: PropTypes.oneOf(Object.values(primitives.text.TextOrientationType)),
  labelPlacement: PropTypes.oneOf(Object.values(primitives.common.PlacementType)),
  primaryParent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  relativeItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.number,
  placementType: PropTypes.oneOf(Object.values(primitives.common.AdviserPlacementType))
});

export default ItemConfig;
