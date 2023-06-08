import PropTypes from 'prop-types';
import { AnnotationType, ZOrderType, LineType } from 'basicprimitives';

const HighlightPathAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.HighlightPath]),
  zOrderType: PropTypes.oneOf(Object.values(ZOrderType)),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(LineType)),
  opacity: PropTypes.number,
  showArrows: PropTypes.bool,
  selectItems: PropTypes.bool
});

export default HighlightPathAnnotationConfigShape;
