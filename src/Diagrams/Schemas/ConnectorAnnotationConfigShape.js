import PropTypes from 'prop-types';
import { ConnectorLabelPlacementType, ConnectorPlacementType, 
  ConnectorShapeType, ZOrderType, AnnotationType, LineType } from 'basicprimitives';

const ConnectorAnnotationConfigShape = PropTypes.shape({
  annotationType: PropTypes.oneOf([AnnotationType.Connector]),
  zOrderType: PropTypes.oneOf(Object.values(ZOrderType)),
  fromItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  toItem: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  connectorShapeType: PropTypes.oneOf(Object.values(ConnectorShapeType)),
  connectorPlacementType: PropTypes.oneOf(Object.values(ConnectorPlacementType)),
  labelPlacementType: PropTypes.oneOf(Object.values(ConnectorLabelPlacementType)),
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
  lineType: PropTypes.oneOf(Object.values(LineType)),
  selectItems: PropTypes.bool,
  label: PropTypes.any,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
});

export default ConnectorAnnotationConfigShape;
