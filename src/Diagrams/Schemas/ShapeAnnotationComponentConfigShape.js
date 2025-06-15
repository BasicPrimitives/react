import PropTypes from 'prop-types';
import {
  OrientationType,
  LineType,
  ShapeType,
  PlacementType
} from 'basicprimitives'; // Adjust the import path as needed

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

const RectShape = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
});

const ShapeAnnotationControlConfigShape = PropTypes.shape({
  /**
   * Diagram orientation.
   */
  orientationType: PropTypes.oneOf(Object.values(OrientationType)),

  /**
   * Shape type.
   */
  shapeType: PropTypes.oneOf(Object.values(ShapeType)),

  /**
   * Bounding rectangle.
   */
  position: RectShape,

  /**
   * Offset of the bounding rectangle.
   */
  offset: ThicknessShape,

  /**
   * Border line width.
   */
  lineWidth: PropTypes.number,

  /**
   * Corner radius in % or px.
   */
  cornerRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  /**
   * Background color opacity.
   */
  opacity: PropTypes.number,

  /**
   * Border color.
   */
  borderColor: PropTypes.string,

  /**
   * Fill color.
   */
  fillColor: PropTypes.string,

  /**
   * Border line pattern.
   */
  lineType: PropTypes.oneOf(Object.values(LineType)),

  /**
   * Optional label text.
   */
  label: PropTypes.string,

  /**
   * Label size.
   */
  labelSize: SizeShape,

  /**
   * Label placement.
   */
  labelPlacement: PropTypes.oneOf(Object.values(PlacementType)),

  /**
   * Offset between label and shape.
   */
  labelOffset: PropTypes.number
});

export default ShapeAnnotationControlConfigShape;
