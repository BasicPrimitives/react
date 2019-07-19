import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class DotHighlightTemplate extends AbstractTemplate {
  constructor(options, itemTemplateConfig) {
    super();
    this.render = this.render.bind(this);

    this.config = itemTemplateConfig;
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
      borderWidth: highlightBorderWidth + "px",
      left: - highlightBorderWidth + "px",
      top: - highlightBorderWidth + "px",
      MozBorderRadius: radius + "px",
      WebkitBorderRadius: radius + "px",
      KhtmlBorderRadius: radius + "px",
      borderRadius: radius + "px"
    }
    return <div className="BPHighlightDotFrame" style={style}></div>;
  }
};

export default DotHighlightTemplate;