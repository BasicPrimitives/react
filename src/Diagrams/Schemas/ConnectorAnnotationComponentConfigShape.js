import PropTypes from 'prop-types';
import {
  OrientationType,
  ConnectorPlacementType,
  ConnectorShapeType,
  ConnectorLabelPlacementType,
  LineType
} from 'basicprimitives';

const RectShape = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

const ThicknessShape = PropTypes.shape({
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
  bottom: PropTypes.number.isRequired
});

const SizeShape = PropTypes.shape({
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

const ConnectorAnnotationControlConfigShape = PropTypes.shape({
  orientationType: PropTypes.oneOf(Object.values(OrientationType)),
  connectorPlacementType: PropTypes.oneOf(Object.values(ConnectorPlacementType)),
  connectorShapeType: PropTypes.oneOf(Object.values(ConnectorShapeType)),
  fromRectangle: RectShape,
  toRectangle: RectShape,
  offset: ThicknessShape,
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(LineType)),
  label:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  labelSize: SizeShape,
  labelOffset: PropTypes.number,
  labelPlacementType: PropTypes.oneOf(Object.values(ConnectorLabelPlacementType))
});

export default ConnectorAnnotationControlConfigShape;