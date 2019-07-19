import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const HighlightPathAnnotationConfig = PropTypes.shape({
  annotationType: PropTypes.oneOf([primitives.common.AnnotationType.HighlightPath]),
  zOrderType: PropTypes.oneOf(Object.values(primitives.common.ZOrderType)),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  opacity: PropTypes.number,
  showArrows: PropTypes.bool,
  selectItems: PropTypes.bool
});

export default HighlightPathAnnotationConfig;
