import PropTypes from 'prop-types';
import { ShapeType, Enabled, ItemType, AdviserPlacementType, ChildrenPlacementType, TextOrientationType } from 'basicprimitives';

const OrgItemConfigShape = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  parent: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  context: PropTypes.any,
  itemTitleColor: PropTypes.string,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(ShapeType)),
  groupTitle: PropTypes.string,
  groupTitleColor: PropTypes.string,
  isVisible: PropTypes.bool,
  isActive: PropTypes.bool,
  hasSelectorCheckbox: PropTypes.oneOf(Object.values(Enabled)),
  hasButtons: PropTypes.oneOf(Object.values(Enabled)),
  itemType: PropTypes.oneOf(Object.values(ItemType)),
  adviserPlacementType: PropTypes.oneOf(Object.values(AdviserPlacementType)),
  childrenPlacementType: PropTypes.oneOf(Object.values(ChildrenPlacementType)),
  levelOffset: PropTypes.number,
  placeAdvisersAboveChildren: PropTypes.oneOf(Object.values(Enabled)),
  placeAssistantsAboveChildren: PropTypes.oneOf(Object.values(Enabled)),
  templateName: PropTypes.string,
  showCallout: PropTypes.oneOf(Object.values(Enabled)),
  calloutTemplateName: PropTypes.string,
  label: PropTypes.string,
  showLabel: PropTypes.oneOf(Object.values(Enabled)),
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelOrientation: PropTypes.oneOf(Object.values(TextOrientationType))
});

export default OrgItemConfigShape;
