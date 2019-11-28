import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const ItemConfig = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  parent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  context: PropTypes.any,
  itemTitleColor: PropTypes.string,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(primitives.common.ShapeType)),
  groupTitle: PropTypes.string,
  groupTitleColor: PropTypes.string,
  isVisible: PropTypes.bool,
  isActive: PropTypes.bool,
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  hasButtons: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  itemType: PropTypes.oneOf(Object.values(primitives.orgdiagram.ItemType)),
  adviserPlacementType: PropTypes.oneOf(Object.values(primitives.common.AdviserPlacementType)),
  childrenPlacementType: PropTypes.oneOf(Object.values(primitives.common.ChildrenPlacementType)),
  levelOffset: PropTypes.number,
  placeAdvisersAboveChildren: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  placeAssistantsAboveChildren: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  templateName: PropTypes.string,
  showCallout: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  calloutTemplateName: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.oneOf(Object.values(primitives.common.Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOrientation: PropTypes.oneOf(Object.values(primitives.text.TextOrientationType))
});

export default ItemConfig;
