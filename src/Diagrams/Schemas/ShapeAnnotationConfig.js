import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const ShapeAnnotationConfig = PropTypes.shape({
  annotationType: PropTypes.oneOf([primitives.common.AnnotationType.Shape]),
  zOrderType: PropTypes.oneOf(Object.values(primitives.common.ZOrderType)),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  shapeType: PropTypes.oneOf(Object.values(primitives.common.ShapeType)),
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
  lineType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  selectItems: PropTypes.bool,
  label: PropTypes.any,
  labelSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  labelPlacement: PropTypes.oneOf(Object.values(primitives.common.PlacementType)),
  labelOffset: PropTypes.number
});

export default ShapeAnnotationConfig;
