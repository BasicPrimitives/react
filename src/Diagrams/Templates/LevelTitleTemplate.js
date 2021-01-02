import React from 'react';
import AbstractTemplate from './AbstractTemplate';
import RotatedText from './RotatedText';
import { OrientationType, TextOrientationType } from 'basicprimitives';

class LevelTitleTemplate extends AbstractTemplate {
  constructor(options, orientation) {
    super();
    this.render = this.render.bind(this);

    this.options = options;
    this.orientation = orientation;

    this.style = {
      position: "absolute",
      fontFamily: "Trebuchet MS, Tahoma, Verdana, Arial, sans-serif",
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitUserSelect: "none",
      WebkitTouchCallout: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none",
      boxSizing: "content-box",

      MozBorderRadius: "4px",
      WebkitBorderRadius: "4px",
      KhtmlBorderRadius: "4px",
      BorderRadius: "4px",

      background: "royalblue",
      borderWidth: 0,
      color: "white",
      padding: 0,
      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    }
  }

  render(data) {
    var {
      levelTitleFontSize,
      levelTitleFontFamily,
      levelTitleFontWeight,
      levelTitleFontStyle,
      levelTitleOrientation,
      levelTitleHorizontalAlignment,
      levelTitleVerticalAlignment,
      levelTitleFontColor,
      levelTitleColor
    } = this.options;

    if(levelTitleOrientation === TextOrientationType.Auto) {
      switch (this.orientation) {
        case OrientationType.Top:
          levelTitleOrientation = TextOrientationType.RotateRight;
          break;
        case OrientationType.Bottom:
          levelTitleOrientation = TextOrientationType.RotateRight;
          break;
        default:
          break;
      }
    }

    const {
      context: annotationConfig,
      width,
      height
    } = data;

    const backgroundColor = annotationConfig.titleColor || levelTitleColor;
    const label = (annotationConfig.title || "").replace("\n", "<br/>");
    const color = annotationConfig.titleFontColor || levelTitleFontColor;

    const orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'],
      horizontalAlignments = ['center', 'left', 'right'],
      verticalAlignments = ['top', 'middle', 'bottom'];
    const style = {
      ...this.style,
      backgroundColor,
      color,
      fontSize: levelTitleFontSize,
      fontFamily: levelTitleFontFamily,
      fontWeight: levelTitleFontWeight,
      fontStyle: levelTitleFontStyle
    }
    return <div style={style}>
      <RotatedText
        width={width}
        height={height}
        orientation={orientations[levelTitleOrientation]}
        horizontalAlignment={horizontalAlignments[levelTitleHorizontalAlignment]}
        verticalAlignment={verticalAlignments[levelTitleVerticalAlignment]}
      >{label}</RotatedText>
    </div>;
  }
};

export default LevelTitleTemplate;