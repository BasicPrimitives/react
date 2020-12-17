import PropTypes from 'prop-types';
import { ShapeType, LineType } from 'basicprimitives';

const TemplateConfigShape = PropTypes.shape({
  name: PropTypes.string,
  isActive: PropTypes.bool,
  itemSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  itemBorderWidth: PropTypes.number,
  onItemRender: PropTypes.func,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(ShapeType)),
  minimizedItemSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }),
  minimizedItemCornerRadius: PropTypes.number,
  minimizedItemLineWidth: PropTypes.number,
  minimizedItemBorderColor: PropTypes.string,
  minimizedItemLineType: PropTypes.oneOf(Object.values(LineType)),
  minimizedItemFillColor: PropTypes.string,
  minimizedItemOpacity: PropTypes.number,
  highlightPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  highlightBorderWidth: PropTypes.number,
  onHighlightRender: PropTypes.func,
  cursorPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired
  }),
  cursorBorderWidth: PropTypes.number,
  onCursorRender: PropTypes.func,
  onButtonsRender: PropTypes.func
});

export default TemplateConfigShape;
