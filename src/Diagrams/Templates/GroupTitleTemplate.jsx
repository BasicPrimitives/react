import React from 'react';
import AbstractTemplate from './AbstractTemplate';
import RotatedText from './RotatedText';
import { highestContrast } from 'basicprimitives';

class GroupTitleTemplate extends AbstractTemplate {
  constructor(options) {
    super();
    this.render = this.render.bind(this);

    this.options = options;

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
    const {
      groupTitleFontSize,
      groupTitleFontFamily,
      groupTitleFontWeight,
      groupTitleFontStyle,
      itemTitleSecondFontColor,
      itemTitleFirstFontColor,
      groupTitleOrientation,
      groupTitleHorizontalAlignment,
      groupTitleVerticalAlignment,
      groupTitleColor
    } = this.options;

    const {
      context: itemConfig,
      width,
      height
    } = data;

    const backgroundColor = itemConfig.groupTitleColor || groupTitleColor;
    const label = (itemConfig.groupTitle || "").replace("\n", "<br/>");
    const color = highestContrast(backgroundColor, itemTitleSecondFontColor, itemTitleFirstFontColor);

    const orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'],
      horizontalAlignments = ['center', 'left', 'right'],
      verticalAlignments = ['top', 'middle', 'bottom'];
    const style = {
      ...this.style,
      backgroundColor,
      color,
      fontSize: groupTitleFontSize,
      fontFamily: groupTitleFontFamily,
      fontWeight: groupTitleFontWeight,
      fontStyle: groupTitleFontStyle
    }
    return <div style={style}>
      <RotatedText
        width={width}
        height={height}
        orientation={orientations[groupTitleOrientation]}
        horizontalAlignment={horizontalAlignments[groupTitleHorizontalAlignment]}
        verticalAlignment={verticalAlignments[groupTitleVerticalAlignment]}
      >{label}</RotatedText>
    </div>;
  }
};

export default GroupTitleTemplate;