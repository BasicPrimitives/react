import { LineType } from 'basicprimitives';
import PropTypes from 'prop-types';

const PaletteItemConfigShape = PropTypes.shape({
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  lineType: PropTypes.oneOf(Object.values(LineType))
});

export default PaletteItemConfigShape;
