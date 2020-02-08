import PropTypes from 'prop-types';
import primitives from 'basicprimitives';

const ConnectorAnnotationConfig = PropTypes.shape({
  annotationType: PropTypes.oneOf([primitives.common.AnnotationType.Connector]),
  zOrderType: PropTypes.oneOf(Object.values(primitives.common.ZOrderType)),
  fromItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  connectorShapeType: PropTypes.oneOf(Object.values(primitives.common.ConnectorShapeType)),
  connectorPlacementType: PropTypes.oneOf(Object.values(primitives.common.ConnectorPlacementType)),
  labelPlacementType: PropTypes.oneOf(Object.values(primitives.common.ConnectorLabelPlacementType)),
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      right: PropTypes.number.isRequired,
      bottom: PropTypes.number.isRequired
    })
  ]),
  lineWidth: PropTypes.number,
  color: PropTypes.string,
  lineType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  selectItems: PropTypes.bool,
  label: PropTypes.any,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
});

export default ConnectorAnnotationConfig;
