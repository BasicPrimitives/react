import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const LabelAnnotationConfig = PropTypes.shape({
  annotationType: PropTypes.oneOf([primitives.common.AnnotationType.Label]),
  fromItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  toItems: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
  title: PropTypes.string,
  itemTitleColor: PropTypes.string,
  templateName: PropTypes.string
});

export default LabelAnnotationConfig;
