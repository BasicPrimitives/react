import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class HighlightTemplate extends AbstractTemplate {
  constructor(options, config) {
    super();

    this.options = options;
    this.config = config;

    this.render = this.render.bind(this);
  }

  render(data) {
    const { highlightBorderWidth } = this.config;
    const style = {
      borderWidth: highlightBorderWidth + "px"
    }
    return <div className="BPHighlightFrame" style={style}></div>;
  }
};

export default HighlightTemplate;