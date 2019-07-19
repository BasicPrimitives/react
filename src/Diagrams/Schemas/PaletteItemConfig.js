import primitives from 'basicprimitives';
import PropTypes from 'prop-types';

const PaletteItemConfig = PropTypes.shape({
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  lineType: PropTypes.oneOf(Object.values(primitives.common.LineType))
});

export default PaletteItemConfig;
