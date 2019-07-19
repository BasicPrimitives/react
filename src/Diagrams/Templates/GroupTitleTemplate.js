import React from 'react';
import AbstractTemplate from './AbstractTemplate';
import RotatedText from './RotatedText';
import primitives from 'basicprimitives';

class GroupTitleTemplate extends AbstractTemplate {
  constructor(options) {
    super();
    this.render = this.render.bind(this);

    this.options = options;
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
    const color = primitives.common.highestContrast(backgroundColor, itemTitleSecondFontColor, itemTitleFirstFontColor);

    const orientations = ['Horizontal', 'RotateLeft', 'RotateRight', 'Horizontal'],
      horizontalAlignments = ['center', 'left', 'right'],
      verticalAlignments = ['top', 'middle', 'bottom'];
    const style = {
      backgroundColor,
      color,
      fontSize: groupTitleFontSize,
      fontFamily: groupTitleFontFamily,
      fontWeight: groupTitleFontWeight,
      fontStyle: groupTitleFontStyle
    }
    return <div className="BPGroupTitleFrame" style={style}>
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