import PropTypes from 'prop-types';
import { AnnotationType, ZOrderType, ShapeType, LineType, PlacementType } from 'basicprimitives';

const ShapeAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.Shape]),
  zOrderType: PropTypes.oneOf(Object.values(ZOrderType)),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  shapeType: PropTypes.oneOf(Object.values(ShapeType)),
  offset: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  lineWidth: PropTypes.number,
  cornerRadius: PropTypes.string,
  opacity: PropTypes.number,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(LineType)),
  selectItems: PropTypes.bool,
  label: PropTypes.any,
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelPlacement: PropTypes.oneOf(Object.values(PlacementType)),
  labelOffset: PropTypes.number
});

export default ShapeAnnotationConfigShape;
