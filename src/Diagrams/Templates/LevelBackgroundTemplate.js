import React from 'react';
import AbstractTemplate from './AbstractTemplate';
import { LineType } from 'basicprimitives';

function getBorderStyle(lineType) {
  var result = null;
  switch (lineType) {
    case LineType.Dotted:
      result = "dotted";
      break;
    case LineType.Dashed:
      result = "dashed";
      break;
    default:
      result = "solid";
      break;
  }
  return result;
}


class LevelBackgroundTemplate extends AbstractTemplate {
  constructor(options) {
    super();

    this.options = options;

    this.render = this.render.bind(this);

    this.style = {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  }

  render(data) {
    var annotationConfig = data.context;
    var style = {
      opacity: annotationConfig.opacity,
      borderColor: annotationConfig.borderColor,
      backgroundColor: annotationConfig.fillColor,
      borderWidth: annotationConfig.lineWidth.toString(),
      borderStyle: getBorderStyle(annotationConfig.lineType),
      ...this.style
    }
    return <div style={style}></div>;
  }
};

export default LevelBackgroundTemplate;