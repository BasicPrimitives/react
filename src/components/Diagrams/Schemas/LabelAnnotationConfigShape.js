import PropTypes from 'prop-types';
import { AnnotationType } from 'basicprimitives';

const LabelAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.Label]),
  fromItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  toItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  title: PropTypes.any,
  itemTitleColor: PropTypes.string,
  templateName: PropTypes.string
});

export default LabelAnnotationConfigShape;
