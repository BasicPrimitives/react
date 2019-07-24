import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class DotHighlightTemplate extends AbstractTemplate {
  constructor(options, itemTemplateConfig) {
    super();
    this.render = this.render.bind(this);

    this.config = itemTemplateConfig;

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

      border: "1px solid #fbcb09",
      background: "#fdf5ce",
      color: "#c77405",
      width: "100%",
      height: "100%",
      left: "0px",
      top: "0px"
    }
  }

  render(data) {
    const { minimizedItemCornerRadius, highlightPadding, highlightBorderWidth, minimizedItemSize } = this.config;
    let radius = 0;
    if (minimizedItemCornerRadius === null) {
      radius = Math.max(minimizedItemSize.width / 2, minimizedItemSize.height / 2) + highlightPadding.left;
    } else {
      radius = minimizedItemCornerRadius + highlightPadding.left;
    }
    const style = {
      ...this.style,
      borderWidth: highlightBorderWidth + "px",
      left: - highlightBorderWidth + "px",
      top: - highlightBorderWidth + "px",
      MozBorderRadius: radius + "px",
      WebkitBorderRadius: radius + "px",
      KhtmlBorderRadius: radius + "px",
      borderRadius: radius + "px"
    }
    return <div style={style}></div>;
  }
};

export default DotHighlightTemplate;