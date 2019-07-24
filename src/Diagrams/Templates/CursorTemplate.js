import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class CursorTemplate extends AbstractTemplate {
  constructor(options, itemTemplateConfig) {
    super();

    this.options = options;
    this.itemTemplateConfig = itemTemplateConfig;

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

      border: "2px solid #fbd850",
      background: "#ffffff",
      color: "#eb8f00",

      width: "100%",
      height: "100%",
      left: "-2px",
      top: "-2px"
    }
  }

  render(data) {
    const { cursorPadding, itemSize, cursorBorderWidth } = this.itemTemplateConfig;
    const style = {
      ...this.style,
      width: (itemSize.width + cursorPadding.left + cursorPadding.right) + "px",
      height: (itemSize.height + cursorPadding.top + cursorPadding.bottom) + "px",
      borderWidth: cursorBorderWidth + "px"
    }
    return <div style={style}></div>;
  }
};

export default CursorTemplate;