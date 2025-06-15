import PropTypes from 'prop-types';
import { LineType, PlacementType } from 'basicprimitives';

const RectShape = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

const PointShape = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
});

const CalloutAnnotationControlConfigShape = PropTypes.shape({
  pointerPlacement: PropTypes.oneOf(Object.values(PlacementType)),
  position: RectShape,
  snapPoint: PointShape,
  cornerRadius: PropTypes.oneOfType([
    PropTypes.string, // e.g. "10%"
    PropTypes.number  // in case pixel radius is supported
  ]),
  offset: PropTypes.number,
  opacity: PropTypes.number,
  lineWidth: PropTypes.number,
  lineType: PropTypes.oneOf(Object.values(LineType)),
  pointerWidth: PropTypes.oneOfType([
    PropTypes.string, // e.g. "10%"
    PropTypes.number  // e.g. 10
  ]),
  borderColor: PropTypes.string,
  fillColor: PropTypes.string
});

export default CalloutAnnotationControlConfigShape;
