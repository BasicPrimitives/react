import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class HighlightTemplate extends AbstractTemplate {
  constructor(options, config) {
    super();

    this.options = options;
    this.config = config;

    this.render = this.render.bind(this);

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

      border: "1px solid #fbcb09",
      background: "#fdf5ce",
      color: "#c77405",

      width: "100%",
      height: "100%",
      left: "-1px",
      top: "-1px"
    }
  }

  render(data) {
    const { highlightBorderWidth } = this.config;
    return <div style={{
      ...this.style,
      borderWidth: highlightBorderWidth + "px"
    }}></div>;
  }
};

export default HighlightTemplate;