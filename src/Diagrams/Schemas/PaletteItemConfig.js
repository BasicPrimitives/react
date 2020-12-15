import { LineType } from 'basicprimitives';
import PropTypes from 'prop-types';

const PaletteItemConfig = PropTypes.shape({
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  lineType: PropTypes.oneOf(Object.values(LineType))
});

export default PaletteItemConfig;
