import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const BackgroundAnnotationConfig = PropTypes.shape({
  annotationType: PropTypes.oneOf([primitives.common.AnnotationType.Background]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  includeChildren: PropTypes.bool,
  zOrderType: PropTypes.oneOf(Object.values(primitives.common.ZOrderType)),
  offset: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  lineWidth: PropTypes.number,
  opacity: PropTypes.number,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  selectItems: PropTypes.bool
});

export default BackgroundAnnotationConfig;
