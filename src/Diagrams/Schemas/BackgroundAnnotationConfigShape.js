import PropTypes from 'prop-types';
import {AnnotationType, ZOrderType, LineType} from 'basicprimitives';

const BackgroundAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.Background]),
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  includeChildren: PropTypes.bool,
  zOrderType: PropTypes.oneOf(Object.values(ZOrderType)),
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
  lineType: PropTypes.oneOf(Object.values(LineType)),
  selectItems: PropTypes.bool
});

export default BackgroundAnnotationConfigShape;
