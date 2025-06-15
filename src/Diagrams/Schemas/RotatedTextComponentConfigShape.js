import PropTypes from 'prop-types';
import {
  VerticalAlignmentType,
  TextOrientationType,
  HorizontalAlignmentType
} from 'basicprimitives'; // Adjust this import path as needed

const RotatedTextControlConfigShape = PropTypes.shape({
  /**
   * Label orientation.
   */
  orientation: PropTypes.oneOf(Object.values(TextOrientationType)),

  /**
   * The text content to display.
   */
  text: PropTypes.string,

  /**
   * Label vertical alignment inside bounding rectangle.
   */
  verticalAlignment: PropTypes.oneOf(Object.values(VerticalAlignmentType)),

  /**
   * Label horizontal alignment inside bounding rectangle.
   */
  horizontalAlignment: PropTypes.oneOf(Object.values(HorizontalAlignmentType)),

  /**
   * Font size (e.g., "16px")
   */
  fontSize: PropTypes.string,

  /**
   * Font family (e.g., "Arial")
   */
  fontFamily: PropTypes.string,

  /**
   * Font color (e.g., Colors.Black)
   */
  color: PropTypes.string,

  /**
   * Font weight (e.g., "normal", "bold")
   */
  fontWeight: PropTypes.oneOf(['normal', 'bold']),

  /**
   * Font style (e.g., "normal", "italic")
   */
  fontStyle: PropTypes.oneOf(['normal', 'italic'])
});

export default RotatedTextControlConfigShape;
