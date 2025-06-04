import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class EndPointTemplate extends AbstractTemplate {
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

      borderWidth: "0px",
      width: "100%",
      height: "100%",
      left: "0px",
      top: "0px"
    }
  }

  render(data) {
    const { endPointCornerRadius, endPointFillColor, endPointOpacity } = this.options;

    const style = {
      ...this.style,
      MozBorderRadius: endPointCornerRadius + "px",
      WebkitBorderRadius: endPointCornerRadius + "px",
      KhtmlBorderRadius: endPointCornerRadius + "px",
      borderRadius: endPointCornerRadius + "px",
      background: endPointFillColor,
      opacity: endPointOpacity
    }
    return <div style={style}></div>;
  }
};

export default EndPointTemplate;