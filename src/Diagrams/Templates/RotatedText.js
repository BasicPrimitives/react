import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RotatedText extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    orientation: PropTypes.oneOf(['Horizontal', 'RotateLeft', 'RotateRight']),
    horizontalAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    verticalAlignment: PropTypes.oneOf(['top', 'middle', 'bottom'])
  };

  static defaultProps = {
    orientation: 'RotateRight',
    horizontalAlignment: 'center',
    verticalAlignment: 'middle'
  };

  getTransform(orientation) {
    let result = "";
    switch (orientation) {
      case 'RotateLeft':
        result = "rotate(-90deg)";
        break;
      case 'RotateRight':
        result = "rotate(90deg)";
        break;
      default:
        break;
    }
    return result;
  }

  render() {
    const {
      children,
      width,
      height,
      orientation,
      horizontalAlignment,
      verticalAlignment
    } = this.props;

    const transform = this.getTransform(orientation);

    let size = null;
    if (orientation === "Horizontal") {
      size = {
        width: width + "px",
        height: height + "px",
        maxWidth: width + "px",
        maxHeight: height + "px"
      }
    } else {
      size = {
        width: height + "px",
        height: width + "px",
        maxWidth: height + "px",
        maxHeight: width + "px",
        left: Math.round(width / 2.0 - height / 2.0) + "px",
        top: Math.round(height / 2.0 - width / 2.0) + "px"
      }
    }
    var style = {
      position: "absolute",
      padding: 0,
      margin: 0,
      lineHeight: 1,
      textAlign: horizontalAlignment,
      WebkitTransformOrigin: "center center",
      MozTransformOrigin: "center center",
      OTransformOrigin: "center center",
      msTransformOrigin: "center center",
      WebkitTransform: transform,
      MozTransform: transform,
      OTransform: transform,
      msTransform: transform,
      transform,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
      tableLayout: "fixed",
      ...size
    };

    return (
      verticalAlignment === 'top' ?
        <div style={style}>
          {children}
        </div>
        :
        <table style={{ ...style, borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{
                verticalAlign: verticalAlignment,
                padding: 0,
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden"
              }}>
                {children}
              </td>
            </tr>
          </tbody>
        </table>
    );
  }
}

export default RotatedText;
