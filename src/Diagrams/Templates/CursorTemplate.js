import React from 'react';
import AbstractTemplate from './AbstractTemplate';

class CursorTemplate extends AbstractTemplate {
  constructor(options, itemTemplateConfig) {
    super();

    this.options = options;
    this.itemTemplateConfig = itemTemplateConfig;

    this.render = this.render.bind(this);
  }

  render(data) {
    const { cursorPadding, itemSize, cursorBorderWidth } = this.itemTemplateConfig;
    const style = {
      width: (itemSize.width + cursorPadding.left + cursorPadding.right) + "px",
      height: (itemSize.height + cursorPadding.top + cursorPadding.bottom) + "px",
      borderWidth: cursorBorderWidth + "px"
    }
    return <div className="BPCursorFrame" style={style}></div>;
  }
};

export default CursorTemplate;