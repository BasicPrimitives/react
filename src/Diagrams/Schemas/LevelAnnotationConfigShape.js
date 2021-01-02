import PropTypes from 'prop-types';
import { AnnotationType, LineType } from 'basicprimitives';

const LevelAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.Level]),
  levels: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  title: PropTypes.any,
  titleFontColor: PropTypes.string,
  titleColor: PropTypes.string,
  offset: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  lineWidth: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  opacity: PropTypes.number,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(LineType))
});

export default LevelAnnotationConfigShape;
